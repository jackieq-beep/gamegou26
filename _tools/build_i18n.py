#!/usr/bin/env python3
"""Build the translated copies of the site from the English pages.

Usage (from the repo root):
  python3 _tools/build_i18n.py extract   # write _i18n/strings.json (every English string that needs translating)
  python3 _tools/build_i18n.py check     # list strings missing from each _i18n/<lang>.json
  python3 _tools/build_i18n.py build     # refresh language links on the English pages and write /<lang>/ pages + sitemap

English pages are the source. After changing an English page, run `extract`, add the new strings to each
_i18n/<lang>.json, then run `build`. Game names are never translated and always stay on one line: in the
translation files they are written as {{Game Name}} and become <span class="nowrap">Game Name</span>.
"""
import json, os, posixpath, re, sys
from bs4 import BeautifulSoup, NavigableString, Comment

SITE = "https://welcome.gamegou.com"
# (folder, BCP-47 code, native name, og:locale)
LANGS = [
    ("es", "es", "Español", "es_ES"),
    ("pt", "pt", "Português", "pt_BR"),
    ("fr", "fr", "Français", "fr_FR"),
    ("de", "de", "Deutsch", "de_DE"),
    ("ar", "ar", "العربية", "ar_AR"),
    ("tr", "tr", "Türkçe", "tr_TR"),
    ("zh", "zh-Hans", "简体中文", "zh_CN"),
    ("ja", "ja", "日本語", "ja_JP"),
]
EN = ("", "en", "English", "en_US")
ALL = [EN] + LANGS
GAMES = ["top-football-manager", "super-goal", "soccer-legend", "soccer-league", "perfect-kick", "perfect-kick-2", "soccer-strike"]
PAGES = ["index.html", "games/index.html"] + [f"games/{g}/index.html" for g in GAMES]
NAMES = ["Top Football Manager", "Perfect Kick 2", "Perfect Kick", "Super Goal", "Soccer Legend", "Soccer League", "Soccer Strike"]
# Strings that stay as they are in every language
KEEP = set(NAMES) | {"Gamegou", "Gamegou Limited", "Google Play", "App Store", "Android", "iOS", "Facebook", "f",
                     "300M+", "adsmanager@gamegou.com", "jqiang@mobilesoccer.net", "topfm@gamegou.com", "×", "/", "←", "→", "·"}
TEXT_ATTRS = ["alt", "aria-label", "title", "placeholder"]
META_KEYS = {"description", "og:title", "og:description", "twitter:title", "twitter:description", "og:image:alt", "twitter:image:alt"}
LD_TEXT_KEYS = {"name", "text", "description", "releaseNotes", "headline", "alternateName"}
SKIP_TAGS = {"script", "style", "noscript", "svg"}

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
I18N = os.path.join(ROOT, "_i18n")


def rd(p): return open(os.path.join(ROOT, p), encoding="utf-8").read()
def wr(p, s):
    full = os.path.join(ROOT, p); os.makedirs(os.path.dirname(full), exist_ok=True)
    open(full, "w", encoding="utf-8").write(s)


def page_url(folder, page):
    """Public URL path of a page in a language folder ('' = English)."""
    d = posixpath.dirname(page)
    path = "/" + (folder + "/" if folder else "") + (d + "/" if d else "")
    return path


def rel(from_page_path, to_url_path):
    """Relative link from a page file (e.g. 'es/games/x/index.html') to a URL path (e.g. '/fr/games/x/')."""
    base = "/" + posixpath.dirname(from_page_path)
    r = posixpath.relpath(to_url_path.rstrip("/") or "/", base if base != "/" else "/")
    if to_url_path.endswith("/"):
        r = "./" if r == "." else r + "/"
    return r


# ---------- normalising strings ----------
NOWRAP_RE = re.compile(r'<span class="nowrap">([^<]+)</span>')

def norm(html):
    s = NOWRAP_RE.sub(lambda m: "{{" + m.group(1) + "}}", html)
    return re.sub(r"\s+", " ", s).strip()

NAME_RE = re.compile(r"(?<![\w{-])(Top Football Manager|Perfect Kick 2|Perfect Kick(?! 2)|Super Goal|Soccer Legend|Soccer League|Soccer Strike)(?![\w}-])")

def brace(s):
    """Mark every game name as {{Name}} so one translation serves plain text, attributes and HTML."""
    return NAME_RE.sub(lambda m: "{{" + m.group(1) + "}}", s)

def unbrace(s):
    return re.sub(r"\{\{([^}]+)\}\}", r"\1", s)

def denorm(s):
    return re.sub(r"\{\{([^}]+)\}\}", lambda m: f'<span class="nowrap">{m.group(1)}</span>', s)

def needs_translation(s):
    if not s or s in KEEP: return False
    plain = re.sub(r"\{\{[^}]+\}\}", "", re.sub(r"<[^>]+>", "", s)).strip()
    if not re.search(r"[A-Za-z]{2,}", plain): return False
    if re.fullmatch(r"[\w.+-]+@[\w.-]+", plain): return False
    return True


# ---------- walking a page ----------
def text_blocks(soup):
    """Outermost elements in <body> that have their own text. Yields elements."""
    out = []
    def walk(el):
        for ch in el.children:
            if isinstance(ch, Comment) or not getattr(ch, "name", None):
                continue
            if ch.name in SKIP_TAGS or ch.name == "time":
                continue
            if set(ch.get("class") or []) & {"lang-switch", "footer-lang"}:
                continue
            own = any(isinstance(c, NavigableString) and not isinstance(c, Comment) and c.strip() for c in ch.children)
            # a block that only wraps a game name is never translated
            if own and not (ch.name == "span" and "nowrap" in (ch.get("class") or [])):
                out.append(ch)
            else:
                walk(ch)
    walk(soup.body)
    return out


def ld_strings(obj, found):
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k in LD_TEXT_KEYS and isinstance(v, str): found.append(v)
            elif k == "genre" and isinstance(v, list): found.extend(x for x in v if isinstance(x, str))
            else: ld_strings(v, found)
    elif isinstance(obj, list):
        for v in obj: ld_strings(v, found)


def collect(page):
    soup = BeautifulSoup(rd(page), "html.parser")
    keys = []
    if soup.title: keys.append(norm(soup.title.string or ""))
    for m in soup.find_all("meta"):
        k = m.get("name") or m.get("property")
        if k in META_KEYS and m.get("content"): keys.append(norm(m["content"]))
    for sc in soup.find_all("script", type="application/ld+json"):
        found = []; ld_strings(json.loads(sc.string), found); keys += [norm(x) for x in found]
    for el in text_blocks(soup):
        keys.append(norm(el.decode_contents()))
    for el in soup.body.find_all(True):
        if el.find_parent(class_=["lang-switch", "footer-lang"]) or "lang-switch" in (el.get("class") or []): continue
        for a in TEXT_ATTRS:
            if el.get(a): keys.append(norm(el[a]))
    return [brace(k) for k in keys if needs_translation(k)]


# ---------- language links on every page ----------
GLOBE = ('<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="1.8" '
         'd="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z"/></svg>')
LANG_LABEL = {"": "Language", "es": "Idioma", "pt": "Idioma", "fr": "Langue", "de": "Sprache", "ar": "اللغة", "tr": "Dil", "zh": "语言", "ja": "言語"}

def short(code): return {"zh-Hans": "中文", "ja": "日本語", "ar": "عربي"}.get(code, code.upper())

def switcher(folder, page):
    me = f"{folder}/{page}" if folder else page
    cur = next(l for l in ALL if l[0] == folder)
    items = []
    for f, code, native, _ in ALL:
        here = ' aria-current="page"' if f == folder else ""
        items.append(f'<li><a href="{rel(me, page_url(f, page))}" hreflang="{code}" lang="{code}"{here}>{native}</a></li>')
    return (f'<details class="lang-switch"><summary aria-label="{LANG_LABEL[folder]}: {cur[2]}">{GLOBE}<span>{short(cur[1])}</span></summary>'
            f'<ul role="list">{"".join(items)}</ul></details>\n')

def footer_col(folder, page):
    me = f"{folder}/{page}" if folder else page
    items = "".join(f'<li><a href="{rel(me, page_url(f, page))}" hreflang="{code}" lang="{code}"{" aria-current=\"page\"" if f == folder else ""}>{native}</a></li>'
                    for f, code, native, _ in ALL)
    return f'<div class="footer-col footer-lang">\n<h4>{LANG_LABEL[folder]}</h4>\n<ul role="list">{items}</ul>\n</div>\n'

def head_links(page):
    out = [f'<link rel="alternate" hreflang="{code}" href="{SITE}{page_url(f, page)}"/>' for f, code, _, _ in ALL]
    out.append(f'<link rel="alternate" hreflang="x-default" href="{SITE}{page_url("", page)}"/>')
    return "\n".join(out) + "\n"

def add_language_links(html, folder, page):
    html = re.sub(r'<link rel="alternate" hreflang="[^"]*" href="[^"]*"/>\n?', "", html)
    html = re.sub(r'(<link[^>]*rel="canonical"[^>]*>\n?)', lambda m: m.group(1) + ("" if m.group(1).endswith("\n") else "\n") + head_links(page), html, count=1)
    html = re.sub(r'<details class="lang-switch">.*?</details>\n?', "", html, flags=re.S)
    html = re.sub(r'(<button[^>]*id="hamburger"[^>]*>)', lambda m: switcher(folder, page) + m.group(1), html, count=1)
    html = re.sub(r'<div class="footer-col footer-lang">.*?</div>\n', "", html, flags=re.S)
    html = re.sub(r'</div>(\s*)<div class="footer-bottom">', lambda m: footer_col(folder, page) + "</div>" + m.group(1) + '<div class="footer-bottom">', html, count=1)
    # og:locale
    html = re.sub(r'<meta[^>]*property="og:locale(?::alternate)?"[^>]*>\n?', "", html)
    cur = next(l for l in ALL if l[0] == folder)
    loc = f'<meta property="og:locale" content="{cur[3]}"/>\n' + "".join(f'<meta property="og:locale:alternate" content="{l[3]}"/>\n' for l in ALL if l[0] != folder)
    html = re.sub(r'(<meta[^>]*property="og:type"[^>]*>\n?)', lambda m: m.group(1) + ("" if m.group(1).endswith("\n") else "\n") + loc, html, count=1)
    return html


# ---------- dates ----------
MONTHS = {  # short month names for update dates
    "es": "ene feb mar abr may jun jul ago sept oct nov dic",
    "pt": "jan fev mar abr mai jun jul ago set out nov dez",
    "fr": "janv. févr. mars avr. mai juin juil. août sept. oct. nov. déc.",
    "de": "Jan. Feb. März Apr. Mai Juni Juli Aug. Sept. Okt. Nov. Dez.",
    "ar": "يناير فبراير مارس أبريل مايو يونيو يوليو أغسطس سبتمبر أكتوبر نوفمبر ديسمبر",
    "tr": "Oca Şub Mar Nis May Haz Tem Ağu Eyl Eki Kas Ara",
}
def fmt_date(iso, code):
    y, m, d = (int(x) for x in iso[:10].split("-"))
    if code in ("zh-Hans", "ja"): return f"{y}年{m}月{d}日"
    name = MONTHS[code].split()[m - 1]
    if code == "de": return f"{d}. {name} {y}"
    return f"{d} {name} {y}"


# ---------- translating a page ----------
TRANSLATED_URLS = {page_url("", p) for p in PAGES}

def remap_url(u, src_page, folder):
    if not u or re.match(r"^(?:[a-z]+:|//|#|data:)", u, re.I):
        return u
    path, frag = (u.split("#", 1) + [""])[:2] if "#" in u else (u, "")
    path, query = (path.split("?", 1) + [""])[:2] if "?" in path else (path, "")
    if path.startswith("/"):
        absu = path
    else:
        absu = posixpath.normpath(posixpath.join("/" + posixpath.dirname(src_page), path or "."))
        if (path.endswith("/") or path in ("", ".")) and absu != "/": absu += "/"
    target = re.sub(r"index\.html$", "", absu)
    me = f"{folder}/{src_page}"
    if target in TRANSLATED_URLS:
        out = rel(me, f"/{folder}{target}")
        if path.endswith("index.html"): out = (out if out.endswith("/") else out + "/") + "index.html" if out not in ("./",) else "index.html"
    elif path.startswith("/"):
        out = path
    else:
        out = posixpath.relpath(absu, "/" + posixpath.dirname(me))
        if absu.endswith("/") and not out.endswith("/"): out += "/"
    if query: out += "?" + query
    if frag: out += "#" + frag
    if u.startswith("#"): return u
    return out

def remap_srcset(v, src_page, folder):
    if v.strip().startswith("data:"): return v
    parts = []
    for item in v.split(","):
        bits = item.strip().split()
        if bits: bits[0] = remap_url(bits[0], src_page, folder)
        parts.append(" ".join(bits))
    return ", ".join(parts)


def translate_page(page, lang, T, missing):
    folder, code = lang[0], lang[1]
    html = rd(page)
    soup = BeautifulSoup(html, "html.parser")

    def tr(s):
        k = norm(s)
        if not needs_translation(k): return None
        had_spans = "{{" in k
        b = brace(k)
        if b in T:
            return denorm(T[b]) if had_spans else unbrace(T[b])
        missing.add(b); return None

    soup.html["lang"] = code
    if code == "ar": soup.html["dir"] = "rtl"
    if soup.title and soup.title.string:
        t = tr(soup.title.string)
        if t: soup.title.string = BeautifulSoup(t, "html.parser").get_text()
    for m in soup.find_all("meta"):
        k = m.get("name") or m.get("property")
        if k in META_KEYS and m.get("content"):
            t = tr(m["content"])
            if t: m["content"] = BeautifulSoup(t, "html.parser").get_text()
        if k in ("og:url", "twitter:url"):
            m["content"] = SITE + page_url(folder, page)
    for el in soup.find_all("link", hreflang=True): el.decompose()
    for el in soup.find_all("meta", property=re.compile(r"^og:locale")): el.decompose()
    canon = soup.find("link", rel="canonical")
    if canon: canon["href"] = SITE + page_url(folder, page)
    for sc in soup.find_all("script", type="application/ld+json"):
        data = json.loads(sc.string)
        def fix(o, parent_type=None):
            if isinstance(o, dict):
                typ = o.get("@type")
                for k, v in list(o.items()):
                    if k in LD_TEXT_KEYS and isinstance(v, str):
                        t = tr(v)
                        if t: o[k] = BeautifulSoup(t, "html.parser").get_text()
                    elif k == "genre" and isinstance(v, list):
                        o[k] = [BeautifulSoup(tr(x) or x, "html.parser").get_text() for x in v]
                    elif k in ("url", "item") and isinstance(v, str) and v.startswith(SITE) and typ not in ("Organization",):
                        p = v[len(SITE):] or "/"
                        if p in TRANSLATED_URLS: o[k] = SITE + "/" + folder + p
                    else:
                        fix(v, typ)
                if typ in ("WebSite", "WebPage", "CollectionPage", "FAQPage") or (isinstance(typ, list) and "VideoGame" in typ):
                    o["inLanguage"] = code
            elif isinstance(o, list):
                for v in o: fix(v, parent_type)
        fix(data)
        sc.string = "\n" + json.dumps(data, ensure_ascii=False, indent=2) + "\n"
    for el in soup.find_all("time"):
        if el.get("datetime"): el.string = fmt_date(el["datetime"], code)
    for el in text_blocks(soup):
        t = tr(el.decode_contents())
        if t is not None:
            el.clear()
            for node in list(BeautifulSoup(t, "html.parser").contents):
                el.append(node)
    for el in soup.body.find_all(True):
        if el.find_parent(class_=["lang-switch", "footer-lang"]) or "lang-switch" in (el.get("class") or []): continue
        for a in TEXT_ATTRS:
            if el.get(a):
                t = tr(el[a])
                if t: el[a] = BeautifulSoup(t, "html.parser").get_text()
    # links and assets
    for el in soup.find_all(True):
        for a in ("href", "src", "action", "poster"):
            if el.get(a) and not (el.name == "link" and el.get("rel") and ("canonical" in el["rel"] or "alternate" in el["rel"])):
                el[a] = remap_url(el[a], page, folder)
        if el.get("srcset"): el["srcset"] = remap_srcset(el["srcset"], page, folder)
        if el.get("style") and "url(" in el["style"]:
            el["style"] = re.sub(r"url\((['\"]?)([^'\")]+)\1\)", lambda m: f"url({m.group(1)}{remap_url(m.group(2), page, folder)}{m.group(1)})", el["style"])
    out = str(soup)
    if not out.lstrip().lower().startswith("<!doctype"):
        out = "<!DOCTYPE html>\n" + out
    return add_language_links(out, folder, page)


def sitemap():
    sm = rd("sitemap.xml")
    entries = re.findall(r"<url>.*?</url>", sm, flags=re.S)
    keep = []
    for e in entries:
        loc = re.search(r"<loc>([^<]+)</loc>", e).group(1)
        p = loc[len(SITE):] or "/"
        if re.match(r"^/(" + "|".join(l[0] for l in LANGS) + r")/", p): continue  # rebuilt below
        keep.append((p, e))
    out = []
    for p, e in keep:
        e = re.sub(r"\s*<xhtml:link[^>]*/>", "", e)
        page = next((pg for pg in PAGES if page_url("", pg) == p), None)
        if page is None:
            out.append(e); continue
        alts = "".join(f'\n    <xhtml:link rel="alternate" hreflang="{code}" href="{SITE}{page_url(f, page)}"/>' for f, code, _, _ in ALL)
        alts += f'\n    <xhtml:link rel="alternate" hreflang="x-default" href="{SITE}{page_url("", page)}"/>'
        for f, code, _, _ in ALL:
            le = e.replace(f"<loc>{SITE}{p}</loc>", f"<loc>{SITE}{page_url(f, page)}</loc>" + alts)
            out.append(le)
    head = sm[:sm.index("<url>")]
    if "xmlns:xhtml" not in head:
        head = head.replace('<urlset ', '<urlset xmlns:xhtml="http://www.w3.org/1999/xhtml" ', 1)
    tail = sm[sm.rindex("</url>") + len("</url>"):]
    wr("sitemap.xml", head + "\n  ".join(out) + tail)


def main():
    cmd = sys.argv[1] if len(sys.argv) > 1 else "build"
    if cmd == "extract":
        seen, keys = set(), []
        for p in PAGES:
            for k in collect(p):
                if k not in seen: seen.add(k); keys.append(k)
        wr("_i18n/strings.json", json.dumps(keys, ensure_ascii=False, indent=1))
        print(len(keys), "strings")
        return
    langs = LANGS
    if len(sys.argv) > 2: langs = [l for l in LANGS if l[0] in sys.argv[2:]]
    if cmd == "import":
        # _i18n/src/<lang>.*.tsv: "<index>\t<translation>" lines, indexes from _i18n/strings.json
        import glob
        keys = json.load(open(os.path.join(I18N, "strings.json"), encoding="utf-8"))
        for l in langs:
            files = sorted(glob.glob(os.path.join(I18N, "src", l[0] + ".*.tsv")))
            if not files: continue
            path = os.path.join(I18N, l[0] + ".json")
            T = json.load(open(path, encoding="utf-8")) if os.path.exists(path) else {}
            for f in files:
                for line in open(f, encoding="utf-8"):
                    if not line.strip(): continue
                    i, t = line.rstrip("\n").split("\t", 1)
                    t = t.strip()
                    if l[0] == "fr":  # French spacing: no line break before ? ! : ; or inside « »
                        t = re.sub(r" ([?!;])", "\u202f\\1", t)
                        t = re.sub(r" :", "\u00a0:", t).replace("« ", "«\u00a0").replace(" »", "\u00a0»")
                    T[keys[int(i)]] = t
            json.dump(T, open(path, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
            print(l[0], len(T))
        return
    if cmd == "check":
        keys = json.load(open(os.path.join(I18N, "strings.json"), encoding="utf-8"))
        for l in langs:
            path = os.path.join(I18N, l[0] + ".json")
            T = json.load(open(path, encoding="utf-8")) if os.path.exists(path) else {}
            miss = [k for k in keys if k not in T]
            print(l[0], "missing", len(miss))
            bad = [k for k in keys if k in T and sorted(re.findall(r"\{\{[^}]+\}\}", k)) != sorted(re.findall(r"\{\{[^}]+\}\}", T[k]))]
            if bad: print("  game-name mismatch:", bad[:5])
        return
    if cmd == "build":
        for p in PAGES:
            wr(p, add_language_links(rd(p), "", p))
        for l in langs:
            T = json.load(open(os.path.join(I18N, l[0] + ".json"), encoding="utf-8"))
            missing = set()
            for p in PAGES:
                wr(f"{l[0]}/{p}", translate_page(p, l, T, missing))
            if missing: print(l[0], "untranslated:", len(missing), list(missing)[:5])
        sitemap()
        print("built", len(langs), "languages x", len(PAGES), "pages")


if __name__ == "__main__":
    main()

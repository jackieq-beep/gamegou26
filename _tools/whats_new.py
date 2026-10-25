#!/usr/bin/env python3
"""Writes the What's New section (homepage #updates) and the Latest update card on each game page.

Edit UPDATES below when the stores publish new versions, run this from the repo root, then
`python3 _tools/build_i18n.py extract`, add any new strings to _i18n/<lang>.json, and `build`.
"""
import json, re

def rd(p): return open(p, encoding="utf-8").read()
def wr(p, s): open(p, "w", encoding="utf-8").write(s)
def nw(n): return f'<span class="nowrap">{n}</span>'

NAMES = {"top-football-manager": "Top Football Manager", "super-goal": "Super Goal", "soccer-legend": "Soccer Legend",
         "soccer-league": "Soccer League", "perfect-kick": "Perfect Kick", "perfect-kick-2": "Perfect Kick 2", "soccer-strike": "Soccer Strike"}
STORES = {
    "top-football-manager": ("https://play.google.com/store/apps/details?id=com.gamegou.football", "https://apps.apple.com/app/top-football-manager-2026/id1068396437"),
    "super-goal": ("https://play.google.com/store/apps/details?id=com.soccer.football.kick", "https://apps.apple.com/app/super-goal-fun-soccer-game/id1612182545"),
    "soccer-legend": ("https://play.google.com/store/apps/details?id=score.footballgame.kick.soccerlegend", None),
    "soccer-league": ("https://play.google.com/store/apps/details?id=com.PerfectKick.Russia2018", None),
    "perfect-kick": ("https://play.google.com/store/apps/details?id=com.gamegou.PerfectKick.google", "https://apps.apple.com/app/perfect-kick/id539958397"),
    "perfect-kick-2": ("https://play.google.com/store/apps/details?id=com.gamegou.perfectkick2", "https://apps.apple.com/app/perfect-kick-2/id1475459866"),
    "soccer-strike": ("https://play.google.com/store/apps/details?id=soccer.strike.football.footballgames", "https://apps.apple.com/app/soccer-strike-multiplayer/id6471042651"),
}
THUMB = {"top-football-manager": "top-football-manager-gamegou-card-mobile.webp", "super-goal": "super-goal-gamegou-card-mobile.webp",
         "soccer-legend": "soccer-legend-gamegou-card-mobile.webp", "soccer-league": "soccer-league-gamegou-long-range-shot-gameplay-mobile.webp",
         "perfect-kick": "perfect-kick-gamegou-card-mobile.webp", "perfect-kick-2": "perfect-kick-2-card-mobile.webp",
         "soccer-strike": "soccer-strike-gamegou-card-mobile.webp"}

# Store release notes checked 2026-10-24. (store, ISO date, short date, version or None)
UPDATES = {
    "soccer-legend": dict(headline="Halloween update: 50 new levels",
        notes=["New Harvest outfits for your star.", "Fixes and improvements."],
        releases=[("play", "2026-10-22", "22 Oct 2026", None)]),
    "super-goal": dict(headline="New achievements to unlock",
        notes=["Fixes and improvements on Android and iPhone."],
        releases=[("play", "2026-10-22", "22 Oct 2026", None), ("apple", "2026-09-15", "15 Sep 2026", "1.7.3")]),
    "soccer-strike": dict(headline="Monthly Card and Level Packs",
        notes=["Smoother, more stable matches."],
        releases=[("apple", "2026-08-31", "31 Aug 2026", "1.3.16"), ("play", "2026-08-21", "21 Aug 2026", None)]),
    "top-football-manager": dict(headline="Triple Crown season event",
        notes=["New Emergency Signing and Emergency Reinforcement bundles.",
               "Teamwork between players from the same country or region now works differently.",
               "A cleaner interface.",
               "Payment fix for the Emergency Reinforcement bundle on iPhone."],
        releases=[("apple", "2026-08-28", "28 Aug 2026", "3.1.17"), ("play", "2026-08-04", "4 Aug 2026", None)]),
    "perfect-kick": dict(headline="Performance update",
        notes=["Bug fixes for smoother play."],
        releases=[("play", "2026-08-26", "26 Aug 2026", None)]),
    "perfect-kick-2": dict(headline="The Nutcracker set arrives",
        notes=["Fewer crashes and other fixes."],
        releases=[("apple", "2026-05-25", "25 May 2026", "2.0.64"), ("play", "2026-05-05", "5 May 2026", None)]),
    "soccer-league": dict(headline="Performance update",
        notes=["Upgraded game engine."],
        releases=[("play", "2026-05-05", "5 May 2026", None)]),
}
FEATURED = "soccer-legend"
FEATURE_ART = ("assets/images/games/soccer-legend/soccer-legend-gamegou-power-shot-stadium-fireworks.webp",
               "assets/images/games/soccer-legend/soccer-legend-gamegou-power-shot-stadium-fireworks-mobile.webp")
ORDER = sorted(UPDATES, key=lambda g: max(r[1] for r in UPDATES[g]["releases"]), reverse=True)

APPLE_D = "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
def icon(kind, cls="update-icon"):
    if kind == "apple":
        return f'<svg class="{cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="{APPLE_D}"/></svg>'
    return (f'<svg class="{cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">'
            '<path fill="#4285F4" d="M1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924z"/>'
            '<path fill="#34A853" d="M13.544 10.989l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973z"/>'
            '<path fill="#FBBC04" d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594z"/>'
            '<path fill="#EA4335" d="M13.544 13.056l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/></svg>')
STORE_NAME = {"play": "Google Play", "apple": "App Store"}

def meta(g):
    out = []
    for kind, iso, short, ver in UPDATES[g]["releases"]:
        v = f'<span class="update-ver">v{ver}</span>' if ver else ""
        out.append(f'<li>{icon(kind)}<span class="visually-hidden">{STORE_NAME[kind]}</span><time datetime="{iso}">{short}</time>{v}</li>')
    return '<ul class="update-meta" role="list">' + "".join(out) + "</ul>"

def notes(g):
    return '<ul class="update-notes">' + "".join(f"<li>{n}</li>" for n in UPDATES[g]["notes"]) + "</ul>"

def get_links(g):
    play, apple = STORES[g]
    links = [f'<a class="update-store-link" data-track="store_google_play" href="{play}" rel="noopener noreferrer" target="_blank">{icon("play")}<span>Google Play</span></a>']
    if apple:
        links.append(f'<a class="update-store-link" data-track="store_app_store" href="{apple}" rel="noopener noreferrer" target="_blank">{icon("apple")}<span>App Store</span></a>')
    return f'<div class="update-get"><span class="update-get-label">Update now</span>{"".join(links)}</div>'

def section():
    f = FEATURED
    feat = (f'<article class="update-feature">'
            f'<a class="update-feature-art" href="games/{f}/#latest-update" tabindex="-1" aria-hidden="true">'
            f'<picture><source media="(max-width: 768px)" srcset="{FEATURE_ART[1]}"><img alt="" src="{FEATURE_ART[0]}" loading="lazy" decoding="async" width="810" height="1440"></picture></a>'
            f'<div class="update-feature-body"><p class="update-game"><a href="games/{f}/#latest-update">{nw(NAMES[f])}</a></p>'
            f'<h3>{UPDATES[f]["headline"]}</h3>{meta(f)}{notes(f)}{get_links(f)}</div></article>')
    rows = []
    for g in ORDER:
        if g == f: continue
        rows.append(f'<li class="update-row">'
                    f'<a class="update-thumb" href="games/{g}/#latest-update" tabindex="-1" aria-hidden="true">'
                    f'<img alt="" src="assets/images/games/{g}/{THUMB[g]}" loading="lazy" decoding="async" width="600" height="338"></a>'
                    f'<div class="update-body"><p class="update-game"><a href="games/{g}/#latest-update">{nw(NAMES[g])}</a></p>'
                    f'<h3>{UPDATES[g]["headline"]}</h3>{meta(g)}{notes(g)}{get_links(g)}</div></li>')
    return ('<section aria-labelledby="updates-heading" class="section updates-section" id="updates">\n<div class="container">\n'
            '<h2 class="section-title" id="updates-heading">What\'s <span>New</span></h2>\n'
            '<p class="section-desc">New levels, new events, new kit. Here\'s what just landed.</p>\n'
            + feat + '\n<ol class="updates-list" role="list">\n' + "\n".join(rows) + '\n</ol>\n</div>\n</section>\n')

def card(g):
    return (f'<article class="game-seo-card game-update-card" id="latest-update">\n'
            f'<div class="section-label">Latest update</div>\n'
            f'<h2>{UPDATES[g]["headline"]}</h2>\n{meta(g)}\n{notes(g)}\n{get_links(g)}\n</article>')

# homepage
p = "index.html"; s = rd(p)
s, n = re.subn(r'<section aria-labelledby="updates-heading" class="section updates-section" id="updates">.*?</section>\n', lambda m: section(), s, flags=re.S)
assert n == 1
wr(p, s)

# game pages
for g in UPDATES:
    p = f"games/{g}/index.html"; s = rd(p)
    s, n = re.subn(r'<article class="game-seo-card game-update-card" id="latest-update">.*?</article>', lambda m: card(g), s, flags=re.S)
    assert n == 1, g
    def fix_ld(m):
        d = json.loads(m.group(1))
        if isinstance(d.get("@type"), list) and "MobileApplication" in d["@type"]:
            d["dateModified"] = max(r[1] for r in UPDATES[g]["releases"])
            vers = [r[3] for r in UPDATES[g]["releases"] if r[3]]
            if vers: d["softwareVersion"] = vers[0]
            d["releaseNotes"] = UPDATES[g]["headline"]
            return '<script type="application/ld+json">\n' + json.dumps(d, ensure_ascii=False, indent=2) + '\n</script>'
        return m.group(0)
    s = re.sub(r'<script type="application/ld\+json">(.*?)</script>', fix_ld, s, flags=re.S)
    wr(p, s)
print("ok")

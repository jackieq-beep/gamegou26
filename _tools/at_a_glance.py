#!/usr/bin/env python3
"""Writes the "At a glance" facts line on each game page (replaces the old "Why players keep coming back" card).

Facts come from the stores (see claude/site-build-notes.md). Edit FACTS, run from the repo root, then
`python3 _tools/build_i18n.py extract`, add new strings to _i18n/<lang>.json, and `build`.
Each fact is (value, label): value is shown in white, label in grey; label may be "".
"""
import re

def rd(p): return open(p, encoding="utf-8").read()
def wr(p, s): open(p, "w", encoding="utf-8").write(s)

NAMES = {"top-football-manager": "Top Football Manager", "super-goal": "Super Goal", "soccer-legend": "Soccer Legend",
         "soccer-league": "Soccer League", "perfect-kick": "Perfect Kick", "perfect-kick-2": "Perfect Kick 2", "soccer-strike": "Soccer Strike"}
STAR = '<small>★</small>'
FACTS = {
    "top-football-manager": ([("50M+", "downloads"), ("Licensed club kits", ""), ("20", "languages"), ("Since 2017", "")],
                             "Google Play and App Store, October 2026."),
    "super-goal": ([("50M+", "downloads"), ("4.7" + STAR, "App Store rating"), ("Plays offline", ""), ("Free", "")],
                   "Google Play and App Store, October 2026. App Store rating from about 22,000 reviews."),
    "soccer-legend": ([("4.7" + STAR, "rating"), ("1M+", "downloads"), ("Plays offline", ""), ("Free", "")],
                      "Google Play, October 2026. Rating from 67,000+ reviews."),
    "soccer-league": ([("100K+", "downloads"), ("Live multiplayer", ""), ("No in-app purchases", ""), ("Free", "")],
                      "Google Play, October 2026."),
    "perfect-kick": ([("4.4" + STAR, "rating"), ("10M+", "downloads"), ("Google Play Best of 2015", ""), ("Since 2013", "")],
                     "Google Play, October 2026. Rating from 680,000+ reviews."),
    "perfect-kick-2": ([("4.7" + STAR, "App Store rating"), ("10M+", "downloads"), ("Matches under 3 minutes", ""), ("Free", "")],
                       "Google Play and App Store, October 2026. App Store rating from nearly 20,000 reviews."),
    "soccer-strike": ([("1M+", "downloads"), ("Live multiplayer", ""), ("Club and country", ""), ("Free", "")],
                      "Google Play, October 2026."),
}

def card(g):
    items, source = FACTS[g]
    lis = "".join(f'<li><span class="v{" num" if v[0].isdigit() else ""}">{v}</span>' + (f'<span class="k">{k}</span>' if k else "") + "</li>" for v, k in items)
    return (f'<article class="game-seo-card game-glance-card">\n'
            f'<h2 class="visually-hidden"><span class="nowrap">{NAMES[g]}</span> at a glance</h2>\n'
            f'<ul class="facts-line" role="list">{lis}</ul>\n'
            f'<p class="facts-note">{source}</p>\n'
            f'</article>\n')

OLD = re.compile(r'<article class="game-seo-card">\s*<div class="section-label">Why players like it</div>.*?</article>\n?', re.S)
NEW = re.compile(r'<article class="game-seo-card game-glance-card">.*?</article>\n?', re.S)
for g in FACTS:
    p = f"games/{g}/index.html"; s = rd(p)
    s, n = OLD.subn(lambda m: card(g), s, count=1)
    if not n:
        s, n = NEW.subn(lambda m: card(g), s, count=1)
    assert n == 1, g
    s = s.replace('aria-labelledby="why-players-heading" class="section game-seo-section"', 'aria-label="At a glance and latest update" class="section game-seo-section"')
    wr(p, s)
print("ok")

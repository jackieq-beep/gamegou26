# Gamegou Website

This is a static, GitHub Pages friendly website for Gamegou and its mobile football game portfolio.

## Professional file structure

```text
assets/
  css/
    main.css
    main.min.css
  js/
    main.js
  images/
    games/
      perfect-kick/
      perfect-kick-2/
      soccer-league/
      soccer-legend/
      soccer-strike/
      super-goal/
      top-football-manager/
    icons/
    logo/
    social/
games/
  index.html
  perfect-kick/index.html
  perfect-kick-2/index.html
  soccer-league/index.html
  soccer-legend/index.html
  soccer-strike/index.html
  super-goal/index.html
  top-football-manager/index.html
privacy/index.html
terms/index.html
index.html
robots.txt
sitemap.xml
.nojekyll
```

## What was optimized

1. Duplicate root image files were removed.
2. Images were moved into organized folders by purpose and by game.
3. CSS and JavaScript were moved into `/assets`.
4. The broken `gamegou-g-icon.png` reference was fixed.
5. Privacy Policy and Terms of Service now have dedicated static pages.
6. Sitemap URLs now point to real pages instead of hash fragments.
7. Google Fonts are loaded once from HTML instead of duplicated in CSS.
8. Responsive `srcset` attributes were added where mobile WebP images exist.
9. A `.nojekyll` file was added for cleaner GitHub Pages deployment.

## Deployment

Upload the full contents of this folder to the root of the GitHub repository. Do not upload only selected files, because the HTML pages depend on the organized `/assets`, `/games`, `/privacy`, and `/terms` folders.

After publishing, submit `https://www.gamegou.com/sitemap.xml` in Google Search Console.

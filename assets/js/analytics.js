/* Gamegou visitor analytics (Google Analytics 4)
 *
 * To switch on: paste your Google Analytics measurement ID below, e.g. 'G-AB12CD34EF'.
 * While it is empty, this file does nothing.
 *
 * Analytics only starts after a visitor taps OK on the cookie notice. Pages that
 * don't have the notice get the same one added automatically.
 * Store button taps are sent as a "store_click" event (store: google_play or app_store).
 */
(function () {
  var GA_ID = '';
  if (!GA_ID) return;

  var KEY = 'gamegou_cookie_consent_v1';
  var loaded = false;

  function load() {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    document.head.appendChild(s);
  }

  function accepted() {
    try { return localStorage.getItem(KEY) === 'accepted'; } catch (e) { return false; }
  }

  function addNotice() {
    if (document.getElementById('cookie-banner')) return;
    var policy = (document.querySelector('a[href*="privacy-policy"]') || {}).getAttribute
      ? document.querySelector('a[href*="privacy-policy"]').getAttribute('href') : '/privacy-policy/';
    var box = document.createElement('div');
    box.className = 'cookie-banner is-visible';
    box.id = 'cookie-banner';
    box.setAttribute('aria-label', 'Cookie notice');
    box.innerHTML =
      '<div class="cookie-banner-inner">' +
      '<p class="cookie-banner-copy">This website uses cookies to improve your experience. Read more in our <a href="' + policy + '">Privacy Policy</a>. By continuing to browse this site, you agree to this use.</p>' +
      '<div class="cookie-banner-actions">' +
      '<a class="cookie-banner-more" href="' + policy + '">More Information</a>' +
      '<button class="cookie-banner-ok" id="cookie-banner-ok" type="button">OK</button>' +
      '</div></div>';
    document.body.appendChild(box);
    document.body.classList.add('cookie-banner-visible');
    box.querySelector('#cookie-banner-ok').addEventListener('click', function () {
      box.classList.remove('is-visible');
      document.body.classList.remove('cookie-banner-visible');
      try { localStorage.setItem(KEY, 'accepted'); } catch (e) {}
    });
  }

  function start() {
    if (accepted()) { load(); }
    else {
      addNotice();
      document.addEventListener('click', function (e) {
        if (e.target && e.target.id === 'cookie-banner-ok') load();
      });
    }
    // Count store button taps on pages that don't run the main site script
    document.addEventListener('click', function (e) {
      if (typeof window.initAnalyticsTracking === 'function') return; // main script already counts these
      var a = e.target.closest && e.target.closest('a');
      if (!a || !window.gtag) return;
      var href = a.getAttribute('href') || '';
      var store = href.indexOf('play.google.com') > -1 ? 'google_play' : href.indexOf('apps.apple.com') > -1 ? 'app_store' : '';
      if (store) window.gtag('event', 'store_click', { store: store, page: location.pathname });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();

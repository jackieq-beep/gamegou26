/* Keep game names on one line.
   Every game name sits in <span class="nowrap">. If a name is wider than the space it is in
   (a long name in a big heading on a phone, say), the heading is shrunk just enough to fit.
   Re-checks on resize, when fonts finish loading and when the page adds new content. */
(function () {
  var root = document.documentElement;
  root.classList.add('fit-names');
  var queued = false;

  function blockOf(el) {
    var b = el.parentElement;
    while (b && getComputedStyle(b).display.indexOf('inline') === 0) b = b.parentElement;
    return b;
  }
  function contentRight(el) {
    var r = el.getBoundingClientRect(), cs = getComputedStyle(el);
    return r.right - parseFloat(cs.paddingRight) - parseFloat(cs.borderRightWidth);
  }

  function fit() {
    queued = false;
    var spans = document.querySelectorAll('.nowrap');
    var blocks = [];
    for (var i = 0; i < spans.length; i++) {
      var b = blockOf(spans[i]);
      if (b && blocks.indexOf(b) < 0) blocks.push(b);
    }
    // 1. undo earlier fitting so every block is measured at its natural size
    for (i = 0; i < blocks.length; i++) {
      if (blocks[i].hasAttribute('data-fit')) { blocks[i].style.fontSize = ''; blocks[i].removeAttribute('data-fit'); }
    }
    // 2. measure and shrink; repeat because shrinking one heading can narrow the layout around others
    var vw = root.clientWidth;
    for (var pass = 0; pass < 3; pass++) {
      var changes = [];
      for (i = 0; i < blocks.length; i++) {
        var blk = blocks[i];
        if (!blk.getClientRects().length) continue; // hidden
        var cs = getComputedStyle(blk), br = blk.getBoundingClientRect();
        var left = br.left + parseFloat(cs.paddingLeft) + parseFloat(cs.borderLeftWidth);
        // room for one name on its own line: the block's width, but never past its parent or the screen edge
        var limit = Math.min(contentRight(blk), vw - 12);
        if (blk.parentElement) limit = Math.min(limit, contentRight(blk.parentElement));
        var avail = limit - left, worst = 1, ss = blk.querySelectorAll('.nowrap');
        if (avail <= 0) continue;
        for (var j = 0; j < ss.length; j++) {
          var w = ss[j].getBoundingClientRect().width;
          if (w > avail + 0.5) worst = Math.min(worst, avail / w);
        }
        if (worst < 1 && worst > 0.2) changes.push([blk, parseFloat(cs.fontSize) * worst * 0.97]);
      }
      if (!changes.length) break;
      for (i = 0; i < changes.length; i++) {
        changes[i][0].style.fontSize = changes[i][1].toFixed(2) + 'px';
        changes[i][0].setAttribute('data-fit', '');
      }
    }
  }
  function queue() { if (!queued) { queued = true; requestAnimationFrame(fit); } }

  fit();
  addEventListener('resize', queue);
  addEventListener('load', queue);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(queue);
  if (window.MutationObserver) {
    new MutationObserver(function (list) {
      for (var k = 0; k < list.length; k++) if (list[k].type === 'childList' && list[k].addedNodes.length) { queue(); return; }
    }).observe(document.body, { childList: true, subtree: true });
  }
})();

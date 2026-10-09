document.addEventListener('click', function(e) {
  var btn = e.target.closest('#copy-page-btn');
  if (!btn) return;

  var svg = btn.querySelector('svg');
  var orig = svg.innerHTML;
  var origLabel = btn.getAttribute('aria-label') || 'Copy page as Markdown';
  var origTitle = btn.getAttribute('title') || 'Copy page as Markdown';
  var check = '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>';
  var x = '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>';

  fetch(btn.dataset.url)
    .then(function(r) { return r.text(); })
    .then(function(t) {
      navigator.clipboard.writeText(t);
      svg.innerHTML = check;
      btn.setAttribute('aria-label', 'Copied page as Markdown');
      btn.setAttribute('title', 'Copied page as Markdown');
      setTimeout(function() {
        svg.innerHTML = orig;
        btn.setAttribute('aria-label', origLabel);
        btn.setAttribute('title', origTitle);
      }, 1500);
    })
    .catch(function() {
      svg.innerHTML = x;
      btn.setAttribute('aria-label', 'Failed to copy page');
      btn.setAttribute('title', 'Failed to copy page');
      setTimeout(function() {
        svg.innerHTML = orig;
        btn.setAttribute('aria-label', origLabel);
        btn.setAttribute('title', origTitle);
      }, 1500);
    });
});

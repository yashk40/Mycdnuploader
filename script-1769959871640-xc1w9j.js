(function() {
  // 1. Inject Tailwind CDN
  var script = document.createElement('script');
  script.src = 'https://cdn.tailwindcss.com';
  document.head.appendChild(script);

  // 2. Inject Custom CSS (animations, overrides)
  var style = document.createElement('style');
  style.innerHTML = "";
  document.head.appendChild(style);
})();
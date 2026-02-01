(function() {
  // 1. Inject Tailwind CDN (if not already present)
  if (!document.querySelector('script[src*="cdn.tailwindcss.com"]')) {
    var script = document.createElement('script');
    script.src = 'https://cdn.tailwindcss.com';
    script.onload = function() { console.log('NeuraCDN: Tailwind initialized'); };
    document.head.appendChild(script);
  }

})();
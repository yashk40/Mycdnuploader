(function () {

  if (window.__NEURA_TAILWIND_LOADED__) return;
  window.__NEURA_TAILWIND_LOADED__ = true;

  if (!document.querySelector('script[src*="cdn.tailwindcss.com"]')) {
    const script = document.createElement('script');
    script.src = 'https://cdn.tailwindcss.com';
    script.defer = true;

    script.onload = () => {
      console.log('NeuraCDN: Tailwind ready');
    };

    document.head.appendChild(script);
  }
})();
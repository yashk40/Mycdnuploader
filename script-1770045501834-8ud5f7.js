(function () {

  function loadTailwind() {
    if (window.tailwind) {
      document.documentElement.classList.remove("tw-loading");
      return;
    }
    setTimeout(loadTailwind, 50);
  }

  if (!document.querySelector('script[src*="cdn.tailwindcss.com"]')) {
    const s = document.createElement("script");
    s.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(s);
  }

  document.documentElement.classList.add("tw-loading");
  loadTailwind();
})();
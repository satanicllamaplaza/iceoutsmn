// loader.js ---------------------------------------------------------
(() => {
  // 1️⃣ Find the element that will receive the HTML fragment
  const target = document.getElementById('development_plan');
  if (!target) {
    console.error('❌ Element with id="dynamic-section" not found.');
    return;
  }

  // 2️⃣ Function that fetches the fragment and injects it
  async function loadFragment() {
    try {
      const response = await fetch('../development_plan.html', {
        cache: 'no-store'   // always get the latest version
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const html = await response.text();
      target.innerHTML = html;               // replace the placeholder
    } catch (err) {
      console.error('Failed to load development_plan.html:', err);
      target.innerHTML = `<p style="color:red;">
                Could not load the development plan.
            </p>`;
    }
  }

  // 3️⃣ Run it as soon as the script loads (page is already parsed)
  loadFragment();
})();

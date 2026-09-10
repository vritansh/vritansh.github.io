/* Lightweight enhancements only. Core content and navigation work without JavaScript. */
(() => {
  const links = Array.from(document.querySelectorAll('.navigation a'));
  const sections = links.map(link => document.getElementById(link.hash.slice(1)));
  let scheduled = false;

  function updateCurrentSection() {
    scheduled = false;
    let current = sections[0];
    const threshold = window.innerHeight * 0.28;
    for (const section of sections) {
      if (section && section.getBoundingClientRect().top <= threshold) current = section;
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
      current = sections[sections.length - 1];
    }
    for (const link of links) {
      if (current && link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }

  function scheduleUpdate() {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(updateCurrentSection);
    }
  }

  async function loadWriting() {
    const target = document.getElementById('writing-list');
    if (!target) return;

    try {
      const response = await fetch('content/writings.json', { cache: 'no-store' });
      if (!response.ok) throw new Error('Writing index unavailable');
      const entries = await response.json();
      const sorted = [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));

      if (!sorted.length) {
        target.innerHTML = '<p class="writing-fallback">New notes will appear here as they are published.</p>';
        return;
      }

      target.innerHTML = sorted.map(entry => `
        <article class="writing-item">
          <time class="writing-date" datetime="${entry.date}">${formatDate(entry.date)}</time>
          <div>
            <h3><a href="${entry.url}">${escapeHtml(entry.title)} <span aria-hidden="true">↗</span></a></h3>
            <p>${escapeHtml(entry.summary)}</p>
          </div>
          <span class="writing-type">${escapeHtml(entry.type || 'Note')}</span>
        </article>
      `).join('');
    } catch (error) {
      target.innerHTML = '<p class="writing-fallback">Browse current writing on <a href="https://medium.com/@vritansh14">Medium</a>.</p>';
    }
  }

  function formatDate(value) {
    const date = new Date(`${value}T00:00:00`);
    return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short' }).format(date);
  }

  function escapeHtml(value = '') {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('pageshow', scheduleUpdate);
  updateCurrentSection();
  loadWriting();
})();

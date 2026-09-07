(() => {
  const root = document.documentElement;
  const isZh = root.lang === 'zh-CN';
  const themeButton = document.querySelector('.theme-toggle');
  let savedTheme;
  try { savedTheme = localStorage.getItem('jinke-theme'); } catch (_) {}
  function applyTheme(theme) {
    root.dataset.theme = theme;
    themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
    themeButton.setAttribute('aria-label', isZh ? (theme === 'dark' ? '切换到浅色模式' : '切换到深色模式') : (theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'));
  }
  applyTheme(savedTheme === 'dark' ? 'dark' : 'light');
  themeButton.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('jinke-theme', next); } catch (_) {}
  });
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const publications = [...document.querySelectorAll('.publication')];
  function filterPapers(filter) {
    let count = 0;
    publications.forEach(paper => {
      paper.hidden = filter !== 'all' && !paper.dataset.category.split(' ').includes(filter);
      if (!paper.hidden) count++;
    });
    filterButtons.forEach(button => {
      const active = button.dataset.filter === filter;
      button.classList.toggle('selected', active);
      button.setAttribute('aria-pressed', String(active));
    });
    document.querySelector('.filter-status').textContent = isZh ? `显示 ${count} 篇论文` : `Showing ${count} publications`;
  }
  filterButtons.forEach(button => button.addEventListener('click', () => filterPapers(button.dataset.filter)));
  function revealHashTarget() {
    const target = document.getElementById(location.hash.slice(1));
    if (target && target.classList.contains('publication') && target.hidden) {
      filterPapers('all');
      target.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }
  document.querySelectorAll('.research-card').forEach(card => card.addEventListener('click', () => filterPapers('all')));
  window.addEventListener('hashchange', revealHashTarget);
  revealHashTarget();
  const languageLink = document.querySelector('.language');
  languageLink.addEventListener('click', () => { languageLink.href = (isZh ? 'index.html' : 'zh.html') + location.hash; });
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const sections = ['home', 'research', 'about', 'contact'].map(id => document.getElementById(id));
  let ticking = false;
  function updateNav() {
    let active = 'home';
    const threshold = window.innerHeight * .32;
    for (const section of sections) if (section.getBoundingClientRect().top <= threshold) active = section.id;
    navLinks.forEach(link => {
      const selected = link.getAttribute('href') === '#' + active;
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    ticking = false;
  }
  window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(updateNav); ticking = true; } }, { passive: true });
  window.addEventListener('resize', updateNav);
  updateNav();
})();

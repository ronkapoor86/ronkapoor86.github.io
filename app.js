(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;

  // Theme
  const toggle = $('[data-theme-toggle]');
  if (toggle) toggle.addEventListener('click', () => {
    const dark = root.dataset.theme
      ? root.dataset.theme === 'dark'
      : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  });

  const printBtn = $('[data-print]');
  if (printBtn) printBtn.addEventListener('click', () => window.print());

  // Expand a partition
  $$('[data-expand]').forEach((btn) => btn.addEventListener('click', () => {
    const part = btn.closest('[data-part]');
    const open = part.toggleAttribute('data-open');
    btn.setAttribute('aria-expanded', open);
    btn.textContent = open ? 'show fewer' : btn.dataset.label;
  }));
  $$('[data-expand]').forEach((b) => { b.dataset.label = b.textContent; });

  // Filter
  const log = $('.log');
  if (log) {
    const q = $('[data-q]');
    const recs = $$('.rec', log).map((el) => ({ el, text: el.textContent.toLowerCase(), co: el.dataset.co }));
    const countEl = $('[data-count]');
    const empty = $('[data-empty]');
    let co = 'all';
    const apply = () => {
      const term = q.value.trim().toLowerCase();
      const active = term !== '' || co !== 'all';
      log.toggleAttribute('data-filtering', active);
      let shown = 0;
      recs.forEach((r) => {
        const ok = (co === 'all' || r.co === co) && (term === '' || r.text.includes(term));
        r.el.hidden = !ok;
        if (ok) shown++;
      });
      $$('[data-part]', log).forEach((p) => {
        const n = $$('.rec:not([hidden])', p).length;
        p.hidden = n === 0;
      });
      $$('[data-topic]', log).forEach((t) => {
        const n = $$('.rec:not([hidden])', t).length;
        t.hidden = n === 0;
        $('[data-topic-count]', t).textContent = n;
      });
      countEl.textContent = shown;
      empty.hidden = shown !== 0;
    };
    q.addEventListener('input', apply);
    $$('[data-co-btn]').forEach((b) => b.addEventListener('click', () => {
      co = b.dataset.coBtn;
      $$('[data-co-btn]').forEach((x) => x.setAttribute('aria-pressed', x === b));
      apply();
    }));
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== q && !e.metaKey && !e.ctrlKey) {
        e.preventDefault(); q.focus(); q.scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Escape' && document.activeElement === q) {
        q.value = ''; apply(); q.blur();
      }
    });
  }

  // Hero: consume the log from the beginning, one record at a time
  const tail = $('[data-tail]');
  const feedEl = $('#feed');
  if (tail && feedEl && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const feed = JSON.parse(feedEl.textContent).reverse();
    let i = 0;
    const line = (n) => {
      const [date, topic, title] = feed[n];
      return `${topic}  ${title}`;
    };
    const type = (text, done) => {
      let c = 0;
      const step = () => {
        c = Math.min(text.length, c + 3);
        tail.textContent = text.slice(0, c);
        if (c < text.length) requestAnimationFrame(step); else done();
      };
      step();
    };
    const next = () => type(line(i), () => {
      i = (i + 1) % feed.length;
      setTimeout(next, i < 6 ? 500 : 1700);
    });
    next();
  }
})();

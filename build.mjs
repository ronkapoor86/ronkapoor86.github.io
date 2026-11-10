// Builds index.html and resume.html from src/. Run: node build.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { topics, gallery, person, picks } from './src/data.mjs';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const CO = { k: 'conduktor', c: 'celerdata' };
const pad = (n, w = 3) => String(n).padStart(w, '0');
const isExt = (u) => /^https?:/.test(u);
const linkAttrs = (u) => (isExt(u) ? ' target="_blank" rel="noopener"' : '');
const PREVIEW = 8;

const total = topics.reduce((a, t) => a + t.partitions.reduce((b, p) => b + p.rows.length, 0), 0);
const topicCount = (t) => t.partitions.reduce((b, p) => b + p.rows.length, 0);

function shell({ title, desc, body, page }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="noai, noimageai">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<script>try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}document.documentElement.classList.add('js')</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Martian+Mono:wdth,wght@75..112.5,300..800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="top">
  <a class="top-name" href="index.html">ron kapoor</a>
  <nav aria-label="Site">
    <a href="index.html#log"${page === 'index' ? '' : ''}>work</a>
    <a href="index.html#photos">photos</a>
    <a href="resume.html"${page === 'resume' ? ' aria-current="page"' : ''}>résumé</a>
    <button type="button" class="theme" data-theme-toggle aria-label="Switch between light and dark">invert</button>
  </nav>
</header>
<main id="main">
${body}
</main>
<footer class="foot">
  <dl class="status">
    <div><dt>consumer group</dt><dd>visitors</dd></div>
    <div><dt>lag</dt><dd>0, you are caught up</dd></div>
    <div><dt>produce a message</dt><dd><a href="mailto:${person.email}">${person.email}</a></dd></div>
    <div><dt>elsewhere</dt><dd><a href="${person.linkedin}" target="_blank" rel="noopener">LinkedIn</a>, <a href="${person.github}" target="_blank" rel="noopener">GitHub</a></dd></div>
  </dl>
</footer>
<script src="app.js" defer></script>
</body>
</html>
`;
}

function row(r, hidden, showRole) {
  const [date, title, role, co, url, note] = r;
  const t = url
    ? `<a href="${esc(url)}"${linkAttrs(url)}>${esc(title)}</a>`
    : `<span>${esc(title)}</span>`;
  const sub = [showRole ? role.charAt(0).toUpperCase() + role.slice(1) + '.' : '', note || ''].filter(Boolean).join(' ');
  return `<li class="rec"${hidden ? ' data-more' : ''} data-co="${CO[co]}">
  <time class="rec-date">${esc(date)}</time>
  <span class="rec-main">${t}${sub ? `<span class="rec-note">${esc(sub)}</span>` : ''}</span>
  <span class="rec-co">${CO[co]}</span>
</li>`;
}

const ROLE_TOPICS = new Set(['community', 'talks-and-workshops']);
function topicHtml(t) {
  const parts = t.partitions.map((p, pi) => {
    const n = p.rows.length;
    const rows = p.rows.map((r, i) => row(r, n > PREVIEW + 4 && i >= PREVIEW, ROLE_TOPICS.has(t.id) && new Set(p.rows.map((x) => x[2])).size > 1)).join('\n');
    const more = n > PREVIEW + 4
      ? `<button type="button" class="more" data-expand aria-expanded="false">show all ${n} records</button>`
      : '';
    return `<section class="part" data-part>
  <h3 class="part-head"><span class="part-id">partition ${pi}</span><span class="part-name">${esc(p.name)}</span>${ROLE_TOPICS.has(t.id) && new Set(p.rows.map((x) => x[2])).size === 1 ? `<span class="part-role">${esc(p.rows[0][2])}</span>` : ''}<span class="part-n" data-part-count>${n} records</span></h3>
  <ul class="recs">
${rows}
  </ul>
  ${more}
</section>`;
  }).join('\n');
  return `<section class="topic${t.partitions.every((p) => p.rows.every((r) => !r[0])) ? ' topic-nodate' : ''}" id="${t.id}" data-topic>
  <header class="topic-head">
    <h2>${t.id}</h2>
    <p class="topic-n"><span data-topic-count>${topicCount(t)}</span> records</p>
  </header>
  <p class="topic-blurb">${esc(t.blurb)}</p>
${parts}
</section>`;
}

// Records for the hero consumer line
const feed = [];
topics.forEach((t) => t.partitions.forEach((p) => p.rows.forEach((r) => feed.push([r[0], t.id, r[1]]))));

const strip = topics.map((t) => `<a class="cell" href="#${t.id}"><span class="cell-n">${topicCount(t)}</span><span class="cell-name">${t.id.replace(/-and-/g, ' + ').replace(/-/g, ' ')}</span></a>`).join('\n');

const startHtml = topics.map((t) => {
  const items = (picks[t.id] || []).map((start) => {
    for (const p of t.partitions) {
      const r = p.rows.find((x) => x[1].startsWith(start));
      if (r) return r[4] ? `<li><a href="${esc(r[4])}"${linkAttrs(r[4])}>${esc(r[1])}</a></li>` : `<li>${esc(r[1])}</li>`;
    }
    throw new Error(`pick not found: ${t.id} / ${start}`);
  }).join('');
  return `<div><dt><a href="#${t.id}">${t.id}</a></dt><dd><ul>${items}</ul></dd></div>`;
}).join('\n');

const galleryHtml = gallery.map((g, i) => {
  const media = g.video
    ? `<video controls preload="none" poster="img/${g.poster}"><source src="img/${g.video}" type="video/mp4"></video>`
    : `<a class="frame-img" href="img/${g.src}"><img src="img/${g.src}" alt="${esc(g.cap)}" loading="lazy"></a>`;
  return `<figure class="frame${g.video ? ' frame-video' : ''}">
  ${media}
  <figcaption><span class="frame-no">frame ${pad(i + 1, 2)}</span><time>${g.date}</time><span class="frame-cap">${esc(g.cap)}</span></figcaption>
</figure>`;
}).join('\n');

const indexBody = `
<section class="hero">
  <h1 class="name">Ron Kapoor</h1>
  <p class="lede">I'm a software engineer who became the technical voice of infrastructure companies: developer relations, product marketing and GTM.</p>
  <div class="tail" aria-hidden="true">
    <p class="tail-cmd">$ consume --topic ron.work --from-beginning</p>
    <p class="tail-out"><span data-tail>${feed[0][1]}  ${esc(feed[0][2])}</span><span class="cursor"></span></p>
  </div>
  <nav class="strip" aria-label="Topics">
${strip}
  </nav>
</section>

<section class="about">
  <dl class="meta">
    <div><dt>contact</dt><dd><a href="mailto:${person.email}">${person.email}</a>, <a href="${person.linkedin}" target="_blank" rel="noopener">LinkedIn</a>, <a href="${person.github}" target="_blank" rel="noopener">GitHub</a></dd></div>
    <div><dt>résumé</dt><dd><a href="resume.html">Read it here</a></dd></div>
  </dl>
  <div class="prose">
    <p>I started as a developer at Jefferies, building data platforms and APIs for trading desks. At CelerData, I combined hands-on engineering contributions to StarRocks with developer relations, technical education and open-source community building. At Conduktor, I brought together product marketing, GTM and developer advocacy, repositioning the company, leading product launches and building its technical content and demo engine.</p>
    <p>Across these roles, I've worked at the intersection of engineering, product, marketing and business, understanding both the people building with technology and the commercial realities of getting infrastructure products adopted.</p>
    <p>Everything I have shipped is below, kept the way Kafka keeps things: as a log. ${total} records across ${topics.length} topics.</p>
  </div>
</section>

<section class="start" id="start-here">
  <header class="topic-head">
    <h2>start-here</h2>
    <p class="topic-n">if you have a minute</p>
  </header>
  <p class="topic-blurb">Cherry-picked from each topic. The full log follows.</p>
  <dl class="picks">
${startHtml}
  </dl>
</section>

<section class="log" id="log">
  <div class="filter" data-filter-bar>
    <label for="q">filter</label>
    <input id="q" type="search" placeholder="type to search ${total} records, or press /" autocomplete="off" spellcheck="false" data-q>
    <div class="who" role="group" aria-label="Company">
      <button type="button" data-co-btn="all" aria-pressed="true">all</button>
      <button type="button" data-co-btn="conduktor" aria-pressed="false">conduktor</button>
      <button type="button" data-co-btn="celerdata" aria-pressed="false">celerdata</button>
    </div>
    <p class="count" aria-live="polite"><span data-count>${total}</span> of ${total} records</p>
  </div>
  <p class="empty" data-empty hidden>No records match. Clear the filter to see all ${total}.</p>
${topics.map(topicHtml).join('\n')}
</section>

<section class="photos" id="photos">
  <header class="topic-head">
    <h2>photos</h2>
    <p class="topic-n">${gallery.length} frames</p>
  </header>
  <p class="topic-blurb">Meetups, conferences and one karaoke night. Printed in one ink; hover or tap for colour.</p>
  <div class="sheet">
${galleryHtml}
  </div>
</section>
<script type="application/json" id="feed">${JSON.stringify(feed).replace(/</g, '\\u003c')}</script>
`;

// Résumé: small Markdown subset
function inline(s) {
  return esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}
function resumeHtml(md) {
  const lines = md.split('\n');
  let out = '';
  let inList = false;
  const close = () => { if (inList) { out += '</ul>\n'; inList = false; } };
  const evidence = {
    Conduktor: [['positioning', 'positioning-and-messaging'], ['launches', 'product-launches'], ['writing', 'technical-writing'], ['video', 'video-and-demos'], ['community', 'community'], ['tools', 'tools-and-automation']],
    CelerData: [['meetups', 'community'], ['talks', 'talks-and-workshops'], ['videos', 'video-and-demos'], ['case studies', 'customer-stories']],
  };
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (l.startsWith('# ') || l.startsWith('Web résumé draft') || l.includes('linkedin.com/in/ron-kapoor')) continue;
    if (l.startsWith('## ')) { close(); out += `<h2>${esc(l.slice(3).toLowerCase())}</h2>\n`; continue; }
    if (l.startsWith('### ')) {
      close();
      const [org, role] = l.slice(4).split(' | ');
      let meta = '';
      if (lines[i + 1] && lines[i + 1].trim() && !lines[i + 1].startsWith('-')) { meta = lines[i + 1].replace(/ · /g, ', '); i++; }
      out += `<header class="job"><h3>${esc(org)}</h3><p class="job-role">${esc(role || '')}</p><p class="job-meta">${esc(meta)}</p></header>\n`;
      const key = Object.keys(evidence).find((k) => org.startsWith(k));
      if (key) out += `<p class="job-links">See the work: ${evidence[key].map(([n, id]) => `<a href="index.html#${id}">${n}</a>`).join(', ')}</p>\n`;
      continue;
    }
    if (l.startsWith('- ')) { if (!inList) { out += '<ul>\n'; inList = true; } out += `<li>${inline(l.slice(2))}</li>\n`; continue; }
    if (l.trim()) { close(); out += `<p>${inline(l)}</p>\n`; }
  }
  close();
  return out;
}

const resumeBody = `
<section class="hero hero-small">
  <h1 class="name">Résumé</h1>
  <p class="lede">Ron Kapoor. <a href="mailto:${person.email}">${person.email}</a>, <a href="${person.linkedin}" target="_blank" rel="noopener">LinkedIn</a>, <a href="${person.github}" target="_blank" rel="noopener">GitHub</a>. <button type="button" class="linklike" data-print>Print or save as PDF</button></p>
</section>
<article class="resume">
${resumeHtml(readFileSync(new URL('./src/resume.md', import.meta.url), 'utf8'))}
</article>
`;

writeFileSync(new URL('./index.html', import.meta.url), shell({
  title: 'Ron Kapoor: product marketing, developer relations, GTM engineering',
  desc: `Everything Ron Kapoor has shipped at Conduktor and CelerData: ${total} records across positioning, launches, writing, video, talks, community and tools.`,
  body: indexBody, page: 'index',
}));
writeFileSync(new URL('./resume.html', import.meta.url), shell({
  title: 'Ron Kapoor: résumé',
  desc: 'Résumé of Ron Kapoor: product marketing and GTM at Conduktor, developer relations at CelerData, data platform engineering at Jefferies.',
  body: resumeBody, page: 'resume',
}));
console.log(`built: ${total} records, ${topics.length} topics, ${gallery.length} frames`);

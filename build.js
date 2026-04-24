#!/usr/bin/env node
/**
 * The Curve Ahead — static site builder
 * Reads site.json + templates/ + posts/ and writes the site to dist/
 * No dependencies beyond Node built-ins.
 */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const site = JSON.parse(fs.readFileSync(path.join(ROOT, 'site.json'), 'utf8'));

// ---- utils ----
const read = (p) => fs.readFileSync(p, 'utf8');
const write = (p, content) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content);
};
const tpl = (str, vars) =>
  Object.keys(vars).reduce(
    (s, k) => s.split('{{' + k + '}}').join(vars[k] == null ? '' : String(vars[k])),
    str
  );
const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const formatDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return `${months[m-1]} ${d}, ${y}`;
};

// ---- copy assets ----
function copyDir(src, dst) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

// ---- clean dist ----
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });

// ---- sort posts newest first ----
const posts = [...site.posts].sort((a, b) => b.date.localeCompare(a.date));

// ---- collect tags ----
const allTags = new Set();
const postsByTag = {};
posts.forEach((p) => {
  (p.tags || []).forEach((t) => {
    allTags.add(t);
    (postsByTag[t] = postsByTag[t] || []).push(p.slug);
  });
});
const tagList = Array.from(allTags).sort();

// ---- build shared fragments ----
const common = {
  SITE_TITLE: escapeHtml(site.site.title),
  SITE_SUBTITLE: escapeHtml(site.site.subtitle),
  TAGLINE: escapeHtml(site.site.tagline),
  AUTHOR: escapeHtml(site.site.author),
  EMAIL: escapeHtml(site.site.email),
  LINKEDIN: site.site.linkedin,
  SRA_URL: site.site.sra_url,
  SUBSCRIBE_HEADING: escapeHtml(site.site.subscribe_heading),
  ML_FORM_ID: site.site.mailerlite_form_id,
  ML_ACCOUNT: site.site.mailerlite_account_id,
  YEAR: new Date().getFullYear()
};

const testimonialsHtml = site.testimonials.map((t) => `
      <div class="testimonial">
        <div class="testimonial-inner">
          <blockquote>${escapeHtml(t.quote)}</blockquote>
          <div class="attrib">${escapeHtml(t.attribution)}</div>
        </div>
      </div>`).join('\n');

const logosHtml = site.logos.map((file) =>
  `<img src="assets/logos/${file}" alt="${path.parse(file).name}">`
).join('\n      ');

const logosHtmlSubdir = site.logos.map((file) =>
  `<img src="../assets/logos/${file}" alt="${path.parse(file).name}">`
).join('\n      ');

// ---- homepage ----
const tagButtons = [
  `<button type="button" class="active" data-tag="all">All</button>`,
  ...tagList.map((t) =>
    `<button type="button" data-tag="${escapeHtml(t)}">${escapeHtml(t)}</button>`)
].join('\n      ');

const postCards = posts.map((p) => {
  const tags = (p.tags || []).map((t) => `<span class="tag-pill">${escapeHtml(t)}</span>`).join(' ');
  return `
      <article class="post-card" data-slug="${escapeHtml(p.slug)}">
        <h2><a href="${escapeHtml(p.slug)}/">${escapeHtml(p.title)}</a></h2>
        <div class="post-meta">
          <span class="date">${formatDate(p.date)}</span>
          <span class="tags">${tags}</span>
        </div>
        <p class="excerpt">${escapeHtml(p.excerpt)}</p>
        <a class="read-more" href="${escapeHtml(p.slug)}/">Read more →</a>
      </article>`;
}).join('\n');

const indexTpl = read(path.join(ROOT, 'templates/index.html'));
const indexHtml = tpl(indexTpl, {
  ...common,
  TAG_BUTTONS: tagButtons,
  POST_CARDS: postCards,
  TESTIMONIALS: testimonialsHtml,
  LOGOS: logosHtml,
  POSTS_BY_TAG_JSON: JSON.stringify(postsByTag)
});
write(path.join(DIST, 'index.html'), indexHtml);

// ---- individual post pages ----
const postTpl = read(path.join(ROOT, 'templates/post.html'));
posts.forEach((p) => {
  const body = read(path.join(ROOT, 'posts', p.file));
  const tags = (p.tags || []).map((t) => `<span class="tag-pill">${escapeHtml(t)}</span>`).join(' ');
  const html = tpl(postTpl, {
    ...common,
    POST_TITLE: escapeHtml(p.title),
    POST_EXCERPT: escapeHtml(p.excerpt),
    POST_DATE: formatDate(p.date),
    POST_TAGS: tags,
    POST_BODY: body
  });
  write(path.join(DIST, p.slug, 'index.html'), html);
});

// ---- about page ----
const aboutTpl = read(path.join(ROOT, 'templates/about.html'));
const aboutHtml = tpl(aboutTpl, {
  ...common,
  TESTIMONIALS: testimonialsHtml,
  LOGOS: logosHtmlSubdir
});
write(path.join(DIST, 'about', 'index.html'), aboutHtml);

// ---- copy assets ----
copyDir(path.join(ROOT, 'assets'), path.join(DIST, 'assets'));

// ---- summary ----
console.log(`Built site to ${path.relative(ROOT, DIST)}/`);
console.log(`  ${posts.length} posts`);
console.log(`  ${tagList.length} tags: ${tagList.join(', ')}`);
console.log(`  about + index + ${posts.length} post pages`);

# The Curve Ahead — Complete Build Spec for Claude Code

This is the complete specification for rebuilding advisoryguy.com as a static site. Everything Claude Code needs is in this document.

---

## Overview

Replace the WordPress site at advisoryguy.com with a static site deployed to Hostinger via GitHub Actions. The site is a personal blog called "The Curve Ahead" by Inderpal Singh. The design replicates the current site's aesthetic exactly. The architecture uses a JSON file as the content store, HTML templates, and a Node.js build script.

---

## Site Identity

- **Blog name:** The Curve Ahead
- **Subtitle:** AI in Industry: From Strategy to Impact
- **Author:** Inderpal Singh
- **Tagline:** "Where AI meets the way companies work."
- **Email:** inderpal@singhventures.com
- **LinkedIn:** https://www.linkedin.com/in/inderpalsingh/
- **Firm:** Silver Ridge Advisors — https://www.silverridgeadvisors.com/transformation

---

## Design Requirements

Replicate the current advisoryguy.com design exactly. Do NOT guess — visit the live site first and sample every value.

### Step 1: Inspect the current site

Before writing any CSS, visit advisoryguy.com and document:
- Exact background color (warm light gray, NOT white)
- Post card background color and border/shadow treatment
- Teal/turquoise accent color used on "READ MORE" links
- Header fonts: the site uses **Garamond** (confirmed from WordPress font embedding) for headers and a clean sans-serif (likely Open Sans) for body text
- Font sizes, line heights, and spacing for: site title, subtitle, tagline, post titles, post excerpts, dates, body text
- Logo bar layout: horizontal flex, spacing, image sizes
- Overall max-width of the content area
- Mobile responsive behavior

### Design elements to preserve

- Warm light gray page background
- Post cards: lighter background, subtle border or shadow, left accent border in teal/turquoise
- Serif font (Garamond) for the site title ("The Curve Ahead"), post titles, and pull quotes
- Sans-serif font (Open Sans) for body text, tagline, metadata, navigation
- Teal/turquoise color for "READ MORE" links and interactive elements
- Generous whitespace and clean vertical rhythm
- Logo bar as a centered horizontal row of logo images
- Responsive: mobile-first, content collapses cleanly on small screens

---

## Header Layout

```
The Curve Ahead                    [in bold dark Garamond, large]
AI in Industry: From Strategy to Impact    [in lighter gray Garamond, smaller]

Where AI meets the way companies work.     [tagline, sans-serif, small]
```

---

## Navigation

Minimal nav bar, same typography as the rest of the site:

- **Writing** → homepage (blog feed)
- **About** → /about/
- **Subscribe** → scrolls to MailerLite signup form on current page

Three items only. No "Services," no "Contact" as separate pages.

---

## Homepage Structure (top to bottom)

1. **Nav bar**
2. **Header** (blog name, subtitle, tagline)
3. **Blog post feed** — all posts, reverse chronological. Each post card shows:
   - Title (Garamond, linked)
   - Date
   - Tags (small teal pills, clickable for filtering)
   - Two-line excerpt
   - "READ MORE" link in teal/turquoise, uppercase
4. **Tag filter row** — above the post feed, a horizontal row of all available tags as filter buttons. "All" selected by default. Clicking a tag shows only matching posts. Client-side JavaScript, no server needed.
5. **Logo bar** — McKinsey, Bridgewater, Microsoft, WWE, IDEO, Zelus Analytics, Teamworks (download images from current site)
6. **Testimonials** — static pull quotes (see Testimonials section below)
7. **Bio section** (see Bio section below)
8. **MailerLite signup form** — heading: "Get the next one to your inbox"
9. **Footer** — minimal: email, LinkedIn icon

---

## Blog Post Page Structure

Each individual post page:

1. Nav bar
2. Post title (Garamond, large)
3. Date and tags
4. Post body (the HTML fragment from the posts/ directory)
5. MailerLite signup form
6. Footer

---

## About Page

URL: /about/

### Content:

# About

I've spent most of my career inside organizations that were trying to change how they work. The thread through all of it has been understanding how operations run and rebuilding the parts that don't. I've cared about making things run well since before it was a career — it's just how I think.

From the inside: I was a Program Manager at Microsoft, where I earned a patent and shipped products across Windows and Office. I worked in the Office of the CEOs at Bridgewater Associates, handpicked to drive special initiatives during a period of rapid growth. At HSBC, I led a 6,100-person restructuring during the financial crisis, promoted to Senior Vice President for how I managed the organization through it.

From the outside: I was a consultant at McKinsey, ranked in the top 15% of my peer group for problem solving and executive presence. Through Northshore Partners, I served as Head of Transformation at WWE, founding Chief Product and Technology Officer at the XFL, and delivered transformation programs for IDEO, Bridgewater, SY Partners, and others. Every client came back for more.

More recently I helped build Zelus Analytics, a sports AI platform, from early stage through its acquisition by Teamworks. I tripled revenue, led fundraising rounds, and managed the strategic exit. That experience — watching AI go from a pitch deck to a product that teams depended on — shaped how I think about AI implementation everywhere else.

I lead the transformation practice at Silver Ridge Advisors. I write here about what I'm learning.

inderpal@singhventures.com

---

### What we do

People show up at different points:

*Haven't started.* Leadership knows AI matters but doesn't know where to begin. The technology isn't the problem — it's knowing which processes to target, whether the data is ready, and how to avoid a twelve-month IT project that produces a slide deck. We run a diagnostic that answers those questions in two to six weeks.

*Stuck in pilot.* There's a proof of concept that impressed some people in a demo, but nobody's comfortable rolling it into production. Usually the blockers are governance, data quality, or the fact that someone needs to change how they work. We help bridge that gap.

*Doing some, need help with the rest.* Some workflows are automated. Others aren't. The team that built the first ones is stretched thin. We bring capacity and pattern recognition from having done this across twenty-plus organizations.

If any of that sounds familiar: inderpal@singhventures.com

See the full case portfolio at [silverridgeadvisors.com/transformation](https://www.silverridgeadvisors.com/transformation).

---

### About page testimonials

Display all four testimonials as static pull quotes on the About page (same style as homepage):

[See Testimonials section below for full quotes]

### About page logo bar

Same logo bar as homepage. Repeat it here.

---

## Testimonials

Static pull quotes. No carousel, no sliding. Each quote gets its own card/row with a large opening quotation mark in the teal/purple accent color (match the style shown in the SRA site screenshot: curved left bracket or large quotation mark as a visual accent).

### Quote 1
> "I truly value their expertise and unique combination of business and technical knowledge. They are trusted and valued partners to me, and I have recommended them to other clients where they have also received accolades. They have my highest recommendation."
>
> **— Chief Technology Officer, IDEO**

### Quote 2
> "The vision, thought leadership and goal-oriented thinking was a clear differentiation. They were a true extension of our firm."
>
> **— Management Technology Leader, Bridgewater Associates**

### Quote 3
> "They provided much needed leadership across the technology organization. A well respected and driven voice amongst our leadership team."
>
> **— Chief Technology Officer, WWE**

### Quote 4
> "We really recommend them for any strategic work. They built something that was immediately actionable for us. The future strategy of our institution is based upon their work."
>
> **— Executive Director, CCA**

---

## Bio Section (homepage)

Shorter version of the About page bio, displayed below the testimonials on the homepage:

I've spent most of my career inside organizations that were trying to change how they work — sometimes from the inside (Microsoft, Bridgewater, HSBC), sometimes from the outside (McKinsey, IDEO, WWE, XFL). The thread through all of it has been understanding how operations run and rebuilding the parts that don't.

More recently I helped build Zelus Analytics, a sports AI platform, from early stage through its acquisition by Teamworks. That experience — watching AI go from a pitch deck to a product that teams depended on — shaped how I think about AI implementation everywhere else.

I lead the transformation practice at Silver Ridge Advisors. I write here about what I'm learning.

inderpal@singhventures.com

---

## Existing Blog Posts

Two existing posts. Both get a light refresh and new dates for the relaunch:

### Post 1
- **Title:** The Rise of the AI Co-Pilot in Sports
- **Slug:** rise-of-ai-copilot-in-sports
- **New date:** 2026-02-15
- **Tags:** sports, AI copilots
- **Source:** Extract full HTML body from current WordPress post at advisoryguy.com

### Post 2
- **Title:** From Data Streams to Smarter Teams, the Fourth Wave
- **Slug:** from-data-streams-to-smarter-teams
- **New date:** 2026-03-15
- **Tags:** sports, AI strategy
- **Source:** Extract full HTML body from current WordPress post at advisoryguy.com

Claude Code: extract the full post content from the live WordPress site, clean up any WordPress-specific markup, and save as HTML fragments in the posts/ directory.

---

## Tags

Tags are freeform. No fixed taxonomy. They emerge from whatever is being written about. The two existing posts use "sports," "AI copilots," and "AI strategy" as starting tags.

When new posts are written, assign tags that fit. Examples of tags that might emerge: "manufacturing," "finance," "governance," "field notes," "enterprise systems," "operating model."

Implementation:
- Tags stored as an array of strings in site.json for each post
- Displayed as small teal pill/label elements below each post title
- Clickable — clicking a tag filters the homepage feed to show only matching posts
- A horizontal row of all available tags appears above the post feed as filter buttons
- "All" is the default state

---

## MailerLite Email Integration

Provider: MailerLite
Account ID: 1511033
Embedded form data-form ID: lriWHw

### Subscriber groups in MailerLite:
- **VC** — venture capital contacts (personal newsletter)
- **Enterprise** — enterprise contacts (personal newsletter)
- **The Curve Ahead** — blog subscribers (this is the group new signups from the site go into)

### Implementation:

**A. Add to the `<head>` of every page (index, post, about):**

```html
<!-- MailerLite Universal -->
<script>
    (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '1511033');
</script>
<!-- End MailerLite Universal -->
```

**B. Add the form embed where the signup section appears:**

```html
<div class="ml-embedded" data-form="lriWHw"></div>
```

**C. Section heading above the form:**

```html
<h2>Get the next one to your inbox</h2>
```

The MailerLite JS handles all form styling, validation, submission, and group routing. Do not try to style the form manually — MailerLite injects its own styles.

---

## Architecture

```
the-curve-ahead/
  site.json              # All post metadata + site config
  posts/                 # One HTML fragment per post (body content only)
    rise-of-ai-copilot-in-sports.html
    from-data-streams-to-smarter-teams.html
  templates/
    index.html           # Homepage template
    post.html            # Individual post page template
    about.html           # About page template
  assets/
    style.css            # Single stylesheet
    logos/               # Logo images (downloaded from current site)
    images/              # Any other images from blog posts
  build.js               # Build script (Node.js, no dependencies beyond built-ins)
  dist/                  # Output directory — this gets deployed to Hostinger
  .github/
    workflows/
      deploy.yml         # GitHub Actions deployment
  package.json           # Minimal, just for the build script if needed
```

---

## site.json Structure

```json
{
  "site": {
    "title": "The Curve Ahead",
    "subtitle": "AI in Industry: From Strategy to Impact",
    "author": "Inderpal Singh",
    "tagline": "Where AI meets the way companies work.",
    "email": "inderpal@singhventures.com",
    "linkedin": "https://www.linkedin.com/in/inderpalsingh/",
    "sra_url": "https://www.silverridgeadvisors.com/transformation",
    "subscribe_heading": "Get the next one to your inbox",
    "mailerlite_form_id": "lriWHw",
    "mailerlite_account_id": "1511033"
  },
  "posts": [
    {
      "slug": "rise-of-ai-copilot-in-sports",
      "title": "The Rise of the AI Co-Pilot in Sports",
      "date": "2026-02-15",
      "excerpt": "Claude Code and Codex are changing how developers write code. Microsoft 365 Copilot and Google's Gemini in Workspace are aiming to transform how we all handle productivity.",
      "tags": ["sports", "AI copilots"],
      "file": "rise-of-ai-copilot-in-sports.html"
    },
    {
      "slug": "from-data-streams-to-smarter-teams",
      "title": "From Data Streams to Smarter Teams, the Fourth Wave",
      "date": "2026-03-15",
      "excerpt": "Sports will hit differently in the next five years. AI, which has long been an abstract talking point, is becoming increasingly tangible.",
      "tags": ["sports", "AI strategy"],
      "file": "from-data-streams-to-smarter-teams.html"
    }
  ],
  "testimonials": [
    {
      "quote": "I truly value their expertise and unique combination of business and technical knowledge. They are trusted and valued partners to me, and I have recommended them to other clients where they have also received accolades. They have my highest recommendation.",
      "attribution": "Chief Technology Officer, IDEO"
    },
    {
      "quote": "The vision, thought leadership and goal-oriented thinking was a clear differentiation. They were a true extension of our firm.",
      "attribution": "Management Technology Leader, Bridgewater Associates"
    },
    {
      "quote": "They provided much needed leadership across the technology organization. A well respected and driven voice amongst our leadership team.",
      "attribution": "Chief Technology Officer, WWE"
    },
    {
      "quote": "We really recommend them for any strategic work. They built something that was immediately actionable for us. The future strategy of our institution is based upon their work.",
      "attribution": "Executive Director, CCA"
    }
  ],
  "logos": [
    "mckinsey.png",
    "bridgewater.png",
    "microsoft.png",
    "wwe.jpg",
    "zelus.png",
    "teamworks.png",
    "xfl.jpg"
  ]
}
```

---

## build.js Behavior

1. Read site.json
2. Read each template from templates/
3. For the homepage (index.html):
   - Inject site title, subtitle, tagline, author
   - For each post in posts array (sorted by date descending): read the excerpt, generate a post card with title, date, tags, excerpt, and "READ MORE" link
   - Collect all unique tags across all posts, generate the tag filter row
   - Inject the tag filter JavaScript
   - Inject testimonials
   - Inject bio section
   - Inject MailerLite form embed
   - Inject logo bar
   - Write to dist/index.html
4. For each post:
   - Read the HTML fragment from posts/{file}
   - Inject into post.html template with title, date, tags, nav, MailerLite form, footer
   - Write to dist/{slug}/index.html
5. For the about page:
   - about.html is mostly static content but uses the same nav, footer, and MailerLite integration
   - Write to dist/about/index.html
6. Copy assets/ to dist/assets/
7. Generate a simple tag-to-posts mapping as inline JSON in the homepage for the filter JavaScript

### Tag filtering JavaScript

Embedded in the homepage. Simple behavior:
- On page load, all posts visible
- Clicking a tag button adds an "active" class, hides posts that don't include that tag
- Clicking "All" shows everything
- Clicking the same tag again deselects it (shows all)
- No page reload, no server calls

---

## Deployment

### GitHub Actions Workflow (deploy.yml)

```yaml
name: Deploy to Hostinger

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Build site
        run: node build.js

      - name: Upload to Hostinger via FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./dist/
          server-dir: /public_html/
          exclude: |
            **/.git*
            **/.git*/**
            .github/**
```

The only difference from the ADLD deploy.yml: the Node.js setup step and the `node build.js` step run before FTP upload, and `local-dir` points to `./dist/` instead of the repo root.

### GitHub Secrets needed:
- FTP_SERVER (should already be set if using same Hostinger account as ADLD)
- FTP_USERNAME (may be different — advisoryguy.com has its own FTP user on Hostinger)
- FTP_PASSWORD

---

## To Publish a New Post

1. Write the post body as an HTML fragment in posts/my-new-post.html (just the article content — no head, nav, or footer)
2. Add an entry to site.json with slug, title, date, excerpt, tags, file
3. Git commit and push to main
4. GitHub Actions runs build.js and deploys automatically

Claude Code can do all four steps. The content production workflow:
- At the end of each week, Claude searches recent chats and surfaces 2-3 moments that could be posts
- Inderpal picks one
- Claude drafts it, formats as HTML fragment, updates site.json, commits and pushes
- GitHub Actions builds and deploys

---

## Migration Checklist

- [ ] Download all logo images from current WordPress site
- [ ] Download any images used in the two existing blog posts
- [ ] Extract the full HTML content of both existing blog posts from WordPress
- [ ] Sample exact hex colors, fonts, spacing, and accent colors from current site
- [ ] Set up the GitHub repo with the architecture above
- [ ] Build CSS matching current site
- [ ] Build all templates
- [ ] Write build.js
- [ ] Implement tag filtering
- [ ] Set up deploy.yml
- [ ] Configure GitHub Secrets for FTP (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD)
- [ ] Test locally (run build.js, open dist/index.html in browser)
- [ ] Push to GitHub, verify deployment
- [ ] Verify MailerLite form works on live site
- [ ] Verify both existing posts render correctly
- [ ] Update WordPress DNS or hosting settings if needed (point advisoryguy.com to Hostinger if not already)

---

## What NOT to Build

- No CMS, no admin panel
- No server-side rendering
- No database
- No static site generator framework (Hugo, 11ty, Jekyll)
- No React, no build toolchain beyond the one build.js script
- No comments system
- No analytics (can add Plausible or Fathom later if desired)
- Do not style the MailerLite form — let MailerLite JS handle it
- Do not use the word "actually" in any copy anywhere

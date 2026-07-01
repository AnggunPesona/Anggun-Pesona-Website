# Anggun Pesona Website

## Overview
Static website for Anggun Pesona, a curated footwear brand based in Brunei. Hosted on GitHub Pages at anggunpesona.github.io. The site features pre-order and in-stock product catalogues, a bridal concierge service, and a reviews page.

## Tech Stack
- Plain HTML/CSS/JS (no framework)
- Google Sheets as product data backend (fetched client-side)
- GitHub Pages for hosting
- Repo: https://github.com/AnggunPesona/anggunpesona.github.io (renamed from Anggun-Pesona-Website, 2026-07-01)

## Key Files
- `index.html` — Home page (SPA-style root)
- `preorders/index.html` — Pre-orders catalogue + product detail view
- `instocks/index.html` — In-stocks catalogue + product detail view
- `bridal/index.html` — Bridal concierge page
- `reviews/index.html` — Customer reviews
- `about/index.html` — About page
- `styles.css` — All styles
- `script.js` — All JS logic (product loading, filtering, detail views, WhatsApp integration)
- `admin.html` — Admin dashboard for managing products/enquiries

## Architecture Notes
- Each catalogue page (preorders, instocks) has two sibling divs inside a `.page` wrapper: `.page-catalog` (grid view) and `#page-detail` (detail view). The JS toggles between them via `display:none/block` and adds `.detail-active` to the `.page` wrapper.
- Product data is fetched from Google Sheets via public CSV export. Config (sheet IDs, WhatsApp number, Instagram handle) lives in `script.js` under `CONFIG`.
- Pre-orders don't track stock quantities the same way as in-stocks — qty badges and "Sold Out" labels should not appear on pre-order items.
- The nav is fixed-position (68px height + 26px scallop edge). Pages use `padding-top: 68px` to compensate.

## Recent Changes (May 2026)
- Fixed product detail page spacing: `#page-detail` was incorrectly placed outside the `.page` wrapper due to an extra `</div>` closing tag, causing a large empty gap at the top of detail pages (the `.page` kept `min-height: 100vh` while its content was hidden).
- Removed "Sold Out" badge from pre-order product cards in the grid view since pre-orders don't track inventory the same way.

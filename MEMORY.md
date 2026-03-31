# MEMORY.md

## Last Session
- Built the initial portfolio site with hero, alternating project cards, animated grid background, navbar, and footer
- Two projects have real assets (VOID Scroll + Atelier) with thumbnails and hover videos
- Four remaining projects use Unsplash placeholder images (Nom Kitchen, Artisan Collective, Pulse Health, Vox Media Hub)

## Pending Items
- [ ] Replace 3 placeholder projects with real websites (MOCK WEB 3, APEX-COLLISION, Hidalgo Website)
- [ ] Need preview images (screenshots) for each new site
- [ ] Need MP4 hover demo videos for each new site
- [ ] Deploy the 3 new sites to Vercel for live URLs

## Active Decisions & Context
- Portfolio uses Next.js 16 + Tailwind CSS 4 + Framer Motion
- Project cards alternate left/right with square preview panels
- Hover plays MP4 video over the static thumbnail
- Assets live in /public/videos/ (both .jpg thumbs and .mp4 files)

## Known Gotchas
- Atelier project is missing its atelier.mp4 video file (has poster but no video)
- Next.js 16 has breaking changes from training data - check docs before writing code

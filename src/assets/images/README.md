# Images

Photos go here. Astro optimizes everything in this folder at build time
(resizes it, converts it to WebP, and adds lazy loading).

| Folder      | What goes in it                                                    |
| ----------- | ------------------------------------------------------------------ |
| `brand/`    | Team logo, wordmark, and other brand graphics                      |
| `hero/`     | Large banner images for the top of pages                           |
| `team/`     | Group photos and member headshots (`team/2026/`, ...)             |
| `robots/`   | One folder per robot: `robots/2026-robot-name/`                    |
| `events/`   | Competitions and events by season: `events/2026/event-name/`      |
| `outreach/` | Demos, camps, community events                                     |
| `sponsors/` | Sponsor logos (SVG or PNG with a transparent background)          |
| `blog/`     | Images for blog posts, one folder per post: `blog/post-slug/`     |

Reference an image with its `~/assets/images/...` path, for example:

    image: ~/assets/images/robots/2026-robot-name/hero.jpg

Conventions:

- Lowercase names with dashes and no spaces: `st-louis-regional-pits.jpg`.
- Resize before committing: about 2400px on the long edge and under ~1 MB.
  Phone photos straight off the camera are 5–10 MB each and bloat the repo.
- Keep videos out of this folder; see `public/videos/`.

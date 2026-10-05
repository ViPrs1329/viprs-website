// Pages left over from the AstroWind template. We're keeping the files as a
// starting point for a future team store, but they're hidden from search
// engines: they're left out of the sitemap (astro.config.ts) and get a
// "noindex" tag (src/layouts/Layout.astro). They still work if you visit the URL.
//
// To make a page public again (e.g. when the store launches):
//   1. Replace its template content with real ViPrs content.
//   2. Remove its entry from the matching list below.
//   3. Link it from the header or footer in src/navigation.ts if needed.
//
// A store will also need real Terms (src/pages/terms.md: sales, shipping,
// returns) and an updated Privacy page (src/pages/privacy.mdx) covering any
// order or address info it collects.

// Whole sections: the page itself and everything under it.
const HIDDEN_SECTIONS = [
  '/about',
  '/contact',
  '/pricing',
  '/services',
  '/terms',
  '/homes',
  '/landing',
  // Blog list, categories and tags. Remove these if the team starts a real blog.
  '/blog',
  '/category',
  '/tag',
];

// Template blog posts (src/data/post/), which live at /<file name>.
// Real posts added later stay visible unless they're listed here.
const HIDDEN_POSTS = [
  '/astrowind-template-in-depth',
  '/get-started-website-with-astro-tailwind-css',
  '/how-to-customize-astrowind-to-your-brand',
  '/landing',
  '/markdown-elements-demo-post',
  '/useful-resources-to-create-websites',
];

/** Whether a URL path (e.g. "/pricing" or "/homes/saas/") is a hidden template page. */
export const isHiddenPage = (pathname: string): boolean => {
  const path = pathname.replace(/\/+$/, '') || '/';
  return (
    HIDDEN_POSTS.includes(path) || HIDDEN_SECTIONS.some((section) => path === section || path.startsWith(`${section}/`))
  );
};

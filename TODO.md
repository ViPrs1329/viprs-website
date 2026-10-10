# Website To-Do

Check items off (`- [x]`) as they're done, and move them to **Done** with the date.

## Now

- [ ] Write the Outreach page (`src/pages/outreach.astro`, currently says "Coming soon")
- [ ] Add real headshots to the Meet the Team page
- [ ] Add the rest of our sponsors (`src/data/sponsors.ts`, logos go in `src/assets/images/sponsors/`)
- [ ] Confirm the Privacy page is accurate: it says only coaches and student leaders see sign-ups, which go to the `TEAM_EMAIL` inbox (`src/data/contact.ts`)
- [ ] Add the YouTube link once the account is set up (`src/navigation.ts`, currently `#`)

## When we move to viprs.org

- [ ] Update `site:` in `src/config.yaml` (the sitemap line in `robots.txt` updates from this automatically)
- [ ] Add the new domain to the Adobe Fonts web project (kit `oby5yzu`) so the heading font loads there
- [ ] Set up Google Search Console for the new domain and update `googleSiteVerificationId` in `src/config.yaml`
- [ ] If the team email changes, update `TEAM_EMAIL` and create a new Web3Forms key with the new address (`src/data/contact.ts`)

## Future

- [ ] **Team store:** see the steps at the top of `src/utils/hiddenPages.ts`
  - [ ] Replace the template pricing/product pages with real store content
  - [ ] Write real Terms (sales, shipping, returns) in `src/pages/terms.md`
  - [ ] Update the Privacy page to cover order and address info
  - [ ] Consider a hosted store (Shopify, print-on-demand) so we never handle payment details ourselves
- [ ] **Analytics (optional):** if we turn on Google Analytics, update the Privacy page first, since it says there's none
- [ ] **Team blog/news (optional):** replace the demo posts in `src/data/post/` and un-hide `/blog`, `/category`, `/tag` in `src/utils/hiddenPages.ts`

## Every season

- [ ] Update the Robots page
- [ ] Update sponsor tiers
- [ ] Update team members and headshots
- [ ] Update the "Last updated" date on the Privacy page if how we handle info changed

## Done

- [x] Added Visitation Academy and Whitfield as Gold sponsors, with a dark-mode Viz logo (Oct 2026)
- [x] Replaced the template privacy policy with a real one and linked it in the footer (Oct 2026)
- [x] Hid unused template pages from search engines (Oct 2026)
- [x] Pointed the footer GitHub link at the ViPrs1329 organization (Oct 2026)
- [x] Removed the unused Decap CMS admin page (Oct 2026)
- [x] Added the sitemap to `robots.txt` (Oct 2026)
- [x] Added a competition pit photo to the home page Mission section (Oct 2026)
- [x] Added an In-Kind section to the Sponsors page with Onshape and Autodesk Fusion (Oct 2026)
- [x] Added Boeing (Silver) and Nidec (Bronze) to the Sponsors page (Oct 2026)
- [x] Added Bastian Solutions to the In-Kind section (Oct 2026)
- [x] Added donation ranges under the Gold, Silver, and Bronze tier titles (Oct 2026)
- [x] Added Haskell as a Silver sponsor (Oct 2026)
- [x] Put the navbar logo in a white circle (Oct 2026)
- [x] Switched headings to the Nasalization font via Adobe Fonts, and fixed the site fonts so Inter actually loads (Oct 2026)

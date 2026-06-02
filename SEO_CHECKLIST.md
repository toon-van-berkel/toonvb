# SEO Checklist

## Optimized

- Added a reusable Svelte 5 SEO head component for page titles, descriptions, canonical URLs, Open Graph tags, Twitter card tags, robots directives and JSON-LD.
- Added shared SEO helpers for canonical URL generation, Person schema, WebSite schema and BreadcrumbList schema.
- Added unique metadata for the homepage, About, Projects, Contact, Gallery, Vacations, Mallorca 2026, Travel, Photography, Music, Games, Anime, Anime detail, News and News article pages.
- Added `hreflang` alternates for English and Dutch language versions.
- Added structured data where it matches visible content: Person, WebSite, FAQPage, BreadcrumbList, Article and Review.
- Added a prerendered `/sitemap.xml` route with all important English and Dutch public URLs.
- Updated `robots.txt` to allow crawling and point to `https://toonvb.com/sitemap.xml`.
- Added explicit prerender entries so the static build emits HTML for the public language routes.
- Added a root `/` redirect to `/en-gb`.
- Removed duplicate global title, description and canonical tags from the language layout.
- Kept the Google tag in one central location in `src/app.html`.
- Improved server-rendered language selection so Dutch URLs render Dutch metadata and content in the initial HTML.
- Kept navigation and footer links as normal crawlable `<a href="">` links.
- Fixed the Mallorca date navigation links so they render real URLs instead of literal `{base}` strings.
- Made the menu icon decorative because the surrounding button already has an accessible label.
- Fixed absolute anime image URLs so they are not incorrectly prefixed with the SvelteKit base path.
- Added `noopener noreferrer` to the external Scouting Hartelgroep link.
- Added a noindex SEO head for the 404 page.

## Manual Content Review Still Needed

- Several placeholder pages still have thin content and should be expanded when real project details, visuals and links are available.
- Project pages need stronger project-specific details: problem, technologies, Toon van Berkel's role, result and links where accurate.
- Some existing Dutch content contains mojibake characters in source files and should be cleaned in a separate copy-edit pass.
- Replace or create a dedicated 1200x630 Open Graph image if `mainBanner.jpg` is not suitable for social previews.
- Review externally hosted images from `https://31nl.github.io/a/` for long-term availability, dimensions and compression.

## URLs To Submit Or Inspect

- `https://toonvb.com/en-gb`
- `https://toonvb.com/nl-nl`
- `https://toonvb.com/en-gb/Projects`
- `https://toonvb.com/en-gb/Aboutme`
- `https://toonvb.com/en-gb/Contact`
- `https://toonvb.com/en-gb/Vacations/Mallorca-2026`
- `https://toonvb.com/en-gb/News/05-05-2026_1835`
- `https://toonvb.com/sitemap.xml`
- `https://toonvb.com/robots.txt`

## Verification

- Implementation was checked against Google Search Central guidance for helpful, reliable, people-first content, SEO fundamentals, AI search features and Core Web Vitals.
- View page source and confirm each important URL has one `<title>`, one meta description and one canonical URL.
- Confirm translated pages include `rel="alternate"` links for `en-GB`, `nl-NL` and `x-default`.
- Visit `/sitemap.xml` and confirm it lists the public language URLs.
- Visit `/robots.txt` and confirm it allows crawling and references the sitemap.
- Test representative URLs in Google Rich Results Test and Schema Markup Validator.
- Run PageSpeed Insights on the homepage, Projects, About and Mallorca map pages.
- Use Google Search Console URL Inspection after deployment to confirm rendered HTML, indexability and canonical selection.
- Use Google Tag Assistant to confirm the Google tag `G-498Z4JVGVT` is detected once.

## Manual Decisions

- Decide whether consent mode or a cookie banner is required for analytics in the EEA.
- Decide whether canonical URLs should stay language-prefixed or whether the root URL should become the public canonical homepage.
- Decide whether uppercase route names such as `/Projects` and `/Aboutme` should be kept for URL stability or migrated to lowercase with redirects.

## Reference Docs

- Google Search Central: Creating helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Search Central: SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central: AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- Google Search Central: Core Web Vitals and Google Search: https://developers.google.com/search/docs/appearance/core-web-vitals

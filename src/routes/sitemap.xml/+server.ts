import { publicRoutes } from '$lib/seo/routes';
import { canonicalUrl } from '$lib/seo/site';

export const prerender = true;

export function GET() {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicRoutes
	.map(
		(route) => `	<url>
		<loc>${canonicalUrl(route.path)}</loc>
		<lastmod>${route.lastmod}</lastmod>
		<changefreq>${route.changefreq}</changefreq>
		<priority>${route.priority}</priority>
	</url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
}

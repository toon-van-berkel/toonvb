<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import Breadcrumbs from '$lib/pages/components/Breadcrumbs.svelte';
	import SeoHead from '$lib/seo/SeoHead.svelte';
	import { breadcrumbSchema, canonicalUrl } from '$lib/seo/site';
	import {
		currentLanguage,
		defaultLanguage,
		isSupportedLanguage
	} from '$lib/typescript/pref/language';
	import { content } from '$lib/typescript/content/pages/news/05-05-2026_1835';

	const activeLanguage = $derived(
		isSupportedLanguage(page.params.lang) ? page.params.lang : $currentLanguage
	);

	const pageContent = $derived(
		content[activeLanguage] ?? content[defaultLanguage]
	);
	const seoPath = $derived(`/${activeLanguage}/News/05-05-2026_1835`);
	const jsonLd = $derived([
		breadcrumbSchema([
			{ name: 'Home', path: `/${activeLanguage}` },
			{ name: activeLanguage === 'nl-nl' ? 'Nieuws' : 'News', path: `/${activeLanguage}/News` },
			{ name: pageContent.pageTitle, path: seoPath }
		]),
		{
			'@context': 'https://schema.org',
			'@type': 'Article',
			headline: pageContent.pageTitle,
			description: pageContent.description,
			url: canonicalUrl(seoPath),
			datePublished: '2026-05-05T18:35:00+02:00',
			dateModified: '2026-06-02T00:00:00+02:00',
			author: {
				'@type': 'Person',
				name: 'Toon van Berkel',
				url: 'https://toonvb.com/'
			}
		}
	]);
</script>

<SeoHead
	title={`${pageContent.pageTitle} | Toon van Berkel`}
	description={pageContent.description}
	path={seoPath}
	lang={activeLanguage}
	type="article"
	jsonLd={jsonLd}
/>

<main class="normalize article-page">
	<section>
		<Breadcrumbs
			items={[
				{ label: activeLanguage === 'nl-nl' ? 'Nieuws' : 'News', href: `${base}/${activeLanguage}/News` },
				{ label: pageContent.pageTitle }
			]}
		/>
		<h1>{pageContent.pageTitle}</h1>
		<p>{pageContent.description}</p>
	</section>

	<section>
		<h2>{pageContent.heading1}</h2>
		<p>{pageContent.text1}</p>
	</section>

	<section>
		<h2>{pageContent.heading2}</h2>
		<p>{pageContent.text2}</p>
	</section>

	<section>
		<h2>{pageContent.heading3}</h2>
		<p>{pageContent.text3}</p>

		<a href={pageContent.linkUrl} target="_blank" rel="noopener noreferrer">
			{pageContent.linkText}
		</a>
	</section>

	<section>
		<h2>{pageContent.heading4}</h2>
		<p>{pageContent.text4}</p>
	</section>
</main>

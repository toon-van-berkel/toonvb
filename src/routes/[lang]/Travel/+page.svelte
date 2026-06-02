<script lang="ts">
	import { page } from '$app/state';
	import Breadcrumbs from '$lib/pages/components/Breadcrumbs.svelte';
	import SeoHead from '$lib/seo/SeoHead.svelte';
	import { breadcrumbSchema } from '$lib/seo/site';
	import {
		currentLanguage,
		defaultLanguage,
		isSupportedLanguage
	} from '$lib/typescript/pref/language';
	import { content } from '$lib/typescript/content/pages/travel';

	const activeLanguage = $derived(
		isSupportedLanguage(page.params.lang) ? page.params.lang : $currentLanguage
	);

	const pageContent = $derived(
		content[activeLanguage] ?? content[defaultLanguage]
	);
	const seoTitle = $derived(`${pageContent.pageTitle} by Toon van Berkel | Travel Notes`);
	const seoDescription = $derived(pageContent.text1);
	const seoPath = $derived(`/${activeLanguage}/Travel`);
	const jsonLd = $derived(
		breadcrumbSchema([
			{ name: 'Home', path: `/${activeLanguage}` },
			{ name: pageContent.pageTitle, path: seoPath }
		])
	);
</script>

<SeoHead title={seoTitle} description={seoDescription} path={seoPath} lang={activeLanguage} jsonLd={jsonLd} />

<main class="normalize">
	<section>
		<Breadcrumbs items={[{ label: pageContent.pageTitle }]} />
		<h1>{pageContent.pageTitle}</h1>
		<h2>{pageContent.heading1}</h2>
		<p>{pageContent.text1}</p>
	</section>

	<section>
		<h2>{pageContent.heading2}</h2>
		<p>{pageContent.text2}</p>
	</section>
</main>

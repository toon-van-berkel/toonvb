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
	import { content } from '$lib/typescript/content/pages/projects';

	const activeLanguage = $derived(
		isSupportedLanguage(page.params.lang) ? page.params.lang : $currentLanguage
	);

	const pageContent = $derived(
		content[activeLanguage] ?? content[defaultLanguage]
	);
	const seoTitle = $derived(
		activeLanguage === 'nl-nl'
			? 'Projecten van Toon van Berkel | Webdevelopment, Tools & Creative Code'
			: 'Projects by Toon van Berkel | Web Development, Tools & Creative Code'
	);
	const seoDescription = $derived(
		activeLanguage === 'nl-nl'
			? 'Bekijk projecten van Toon van Berkel, waaronder webapplicaties, creative coding experimenten, automation tools, portfolio werk en technische prototypes.'
			: 'View selected projects by Toon van Berkel, including web applications, creative coding experiments, automation tools, portfolio work and technical prototypes.'
	);
	const seoPath = $derived(`/${activeLanguage}/Projects`);
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

<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import Breadcrumbs from '$lib/pages/components/Breadcrumbs.svelte';
	import SeoHead from '$lib/seo/SeoHead.svelte';
	import { breadcrumbSchema } from '$lib/seo/site';
	import {
		currentLanguage,
		defaultLanguage,
		isSupportedLanguage
	} from '$lib/typescript/pref/language';
	import { content } from '$lib/typescript/content/pages/news';

	const activeLanguage = $derived(
		isSupportedLanguage(page.params.lang) ? page.params.lang : $currentLanguage
	);

	const pageContent = $derived(
		content[activeLanguage] ?? content[defaultLanguage]
	);
	const seoTitle = $derived(
		activeLanguage === 'nl-nl'
			? 'Nieuws van Toon van Berkel | Projecten, Ervaringen & Updates'
			: 'News by Toon van Berkel | Projects, Experiences & Updates'
	);
	const seoDescription = $derived(pageContent.text1);
	const seoPath = $derived(`/${activeLanguage}/News`);
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

		<ul>
			{#each pageContent.items as item}
				<li>
					<a href={`${base}/${activeLanguage}/News/${item.slug}`}>
						{item.title} - {item.date}
					</a>
				</li>
			{/each}
		</ul>
	</section>
</main>

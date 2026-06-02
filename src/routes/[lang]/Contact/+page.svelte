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
	import { content } from '$lib/typescript/content/pages/contact';

	const activeLanguage = $derived(
		isSupportedLanguage(page.params.lang) ? page.params.lang : $currentLanguage
	);

	const pageContent = $derived(
		content[activeLanguage] ?? content[defaultLanguage]
	);
	const seoTitle = $derived(
		activeLanguage === 'nl-nl'
			? 'Contact met Toon van Berkel | Webdevelopment & Digitale Oplossingen'
			: 'Contact Toon van Berkel | Web Development & Digital Solutions'
	);
	const seoDescription = $derived(
		activeLanguage === 'nl-nl'
			? 'Neem contact op met Toon van Berkel voor webdevelopment, portfolio projecten, technische tools of creatieve digitale oplossingen.'
			: 'Get in touch with Toon van Berkel for web development, portfolio projects, technical tools or creative digital solutions.'
	);
	const seoPath = $derived(`/${activeLanguage}/Contact`);
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

		<a href={`mailto:${pageContent.email}`}>
			{pageContent.email}
		</a>
	</section>
</main>

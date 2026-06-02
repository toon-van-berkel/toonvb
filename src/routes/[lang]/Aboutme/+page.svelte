<script lang="ts">
	import { page } from '$app/state';
	import Breadcrumbs from '$lib/pages/components/Breadcrumbs.svelte';
	import SeoHead from '$lib/seo/SeoHead.svelte';
	import { breadcrumbSchema, personSchema } from '$lib/seo/site';
    import { content } from "$lib/typescript/content/components/aboutMe";
	import {
		currentLanguage,
		defaultLanguage,
		isSupportedLanguage
	} from '$lib/typescript/pref/language';

	const activeLanguage = $derived(
		isSupportedLanguage(page.params.lang) ? page.params.lang : $currentLanguage
	);

	const AboutmeContent = $derived(
		content[activeLanguage] ?? content[defaultLanguage]
	);
	const seoTitle = $derived(
		activeLanguage === 'nl-nl'
			? 'Over Toon van Berkel | Creative Media Software Developer'
			: 'About Toon van Berkel | Creative Media Software Developer'
	);
	const seoDescription = $derived(
		activeLanguage === 'nl-nl'
			? 'Lees meer over Toon van Berkel, zijn achtergrond in creative media software development, technische interesses, projectervaring en aanpak voor digitale oplossingen.'
			: 'Learn more about Toon van Berkel, his background in creative media software development, technical interests, project experience and approach to building digital solutions.'
	);
	const seoPath = $derived(`/${activeLanguage}/Aboutme`);
	const jsonLd = $derived([
		personSchema(),
		breadcrumbSchema([
			{ name: 'Home', path: `/${activeLanguage}` },
			{ name: AboutmeContent.title, path: seoPath }
		])
	]);
</script>

<SeoHead
	title={seoTitle}
	description={seoDescription}
	path={seoPath}
	lang={activeLanguage}
	type="profile"
	jsonLd={jsonLd}
/>

<main class="normalize">
	<section>
		<Breadcrumbs items={[{ label: AboutmeContent.title }]} />
		<h1>	{AboutmeContent.title}</h1>
		<p>		{AboutmeContent.text1}</p>
		<p>		{AboutmeContent.text2}</p>
		<p>		{AboutmeContent.text3}</p>
		<p>		{AboutmeContent.text4}</p>
		<p>		{AboutmeContent.text5}</p>
	</section>
</main>

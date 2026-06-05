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
	import { content } from '$lib/typescript/content/pages/music';

	const activeLanguage = $derived(
		isSupportedLanguage(page.params.lang) ? page.params.lang : $currentLanguage
	);

	const pageContent = $derived(
		content[activeLanguage] ?? content[defaultLanguage]
	);
	const seoTitle = $derived(`${pageContent.pageTitle} by Toon van Berkel | Creative Interests`);
	const seoDescription = $derived(pageContent.text1);
	const seoPath = $derived(`/${activeLanguage}/Music`);
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
		<p>
			Music is something that is very important to Toon. In the past I could not listen to music, I hated every kind of music. But later on when I went to middleschool
			I started to listen to music. It started out with beginnning to lisening to radio and eventually I discovered Rock genre. I absolutely love rock music, I listen
			to it all the time. I listend to bands like Queen, The Rolling Stones, The Beatles, Led Zeppelin, Pink Floyd and many more. I also listen to some more modern 
			rock bands like Foo Fighters, Muse, Arctic Monkeys, The Killers and many more. During my middleschool I started listening to heavy metal and started searching for
			more and more bands. Music became the place to clear my head and have a way out of the world sometime.
		</p>
		<p>
			I fell in love with the band Slipknot and Pink floyd, two completely different bands but both of them have a special place in my heart. I also started to listen to 
			some more extreme metal bands like Cannibal Corpse, Deicide, Behemoth and many more. I also listen to some more modern metal bands like Architects, Parkway Drive, 
			Bring Me The Horizon and many more.
		</p>
	</section>

	<section>
		<h2>{pageContent.heading2}</h2>
		<p>{pageContent.text2}</p>
	</section>
</main>

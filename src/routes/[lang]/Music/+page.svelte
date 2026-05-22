<script lang="ts">
	import Breadcrumbs from '$lib/pages/components/Breadcrumbs.svelte';
	import { currentLanguage, defaultLanguage } from '$lib/typescript/pref/language';
	import { content } from '$lib/typescript/content/pages/music';

	const pageContent = $derived(
		content[$currentLanguage] ?? content[defaultLanguage]
	);
</script>

<svelte:head>
	<title>{pageContent.pageTitle} | Toonvb.com</title>
	<meta
		name="description"
		content={pageContent.text1}
	/>
</svelte:head>

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

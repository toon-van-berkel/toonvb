<script lang="ts">
	import { currentLanguage, defaultLanguage } from '$lib/typescript/pref/language';
	import { content } from '$lib/typescript/content/pages/news/05-05-2026_1835';

	const pageContent = $derived(
		content[$currentLanguage] ?? content[defaultLanguage]
	);
</script>

<svelte:head>
	<title>{pageContent.pageTitle} | Toonvb.com</title>
	<meta
		name="description"
		content={pageContent.description}
	/>
</svelte:head>

<main class="normalize">
	<section>
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

		<a href={pageContent.linkUrl} target="_blank" rel="noreferrer">
			{pageContent.linkText}
		</a>
	</section>

	<section>
		<h2>{pageContent.heading4}</h2>
		<p>{pageContent.text4}</p>
	</section>
</main>
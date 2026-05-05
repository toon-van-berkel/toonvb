<script lang="ts">
	import { base } from '$app/paths';
	import { currentLanguage, defaultLanguage } from '$lib/typescript/pref/language';
	import { content } from '$lib/typescript/content/pages/news';

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
					<a href={`${base}/${$currentLanguage}/News/${item.slug}`}>
						{item.title} - {item.date}
					</a>
				</li>
			{/each}
		</ul>
	</section>
</main>
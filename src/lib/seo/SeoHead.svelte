<script lang="ts">
	import { canonicalUrl, defaultOgImage, languageName, siteName, type SeoData } from './site';

	let {
		title,
		description,
		path,
		lang = 'en-gb',
		type = 'website',
		image = defaultOgImage,
		robots = 'index, follow',
		jsonLd
	}: SeoData = $props();

	const canonical = $derived(canonicalUrl(path));
	const locale = $derived(languageName(lang));
	const jsonLdText = $derived(jsonLd ? JSON.stringify(jsonLd) : '');
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="robots" content={robots} />
	<link rel="canonical" href={canonical} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content={type} />
	<meta property="og:image" content={image} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:locale" content={locale} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	{#if jsonLdText}
		{@html `<script type="application/ld+json">${jsonLdText}</script>`}
	{/if}
</svelte:head>

<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import {
		currentLanguage,
		isSupportedLanguage
	} from '$lib/typescript/pref/language';

	type BreadcrumbItem = {
		label: string;
		href?: string;
	};

	let { items = [] }: { items?: BreadcrumbItem[] } = $props();

	const activeLanguage = $derived(
		isSupportedLanguage(page.params.lang) ? page.params.lang : $currentLanguage
	);
</script>

<nav class="breadcrumbs" aria-label="Breadcrumb">
	<a href={`${base}/${activeLanguage}`}>Home</a>

	{#each items as item}
		<span aria-hidden="true">/</span>
		{#if item.href}
			<a href={item.href}>{item.label}</a>
		{:else}
			<span>{item.label}</span>
		{/if}
	{/each}
</nav>

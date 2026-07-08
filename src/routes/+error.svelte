<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { redirectHandler } from './redirect';

	let isRedirecting = $state(false);

	onMount(() => {
		isRedirecting = redirectHandler(page.url.pathname);
	});
</script>

{#if !isRedirecting}
	<h1>{page.status}</h1>
	<p>{page.error?.message ?? 'Page not found'}</p>
{/if}
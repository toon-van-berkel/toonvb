<script lang="ts">
    import { onMount } from 'svelte';

	import { themeHandler } from './theme';
	import { languageHandler } from './language';

	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/app.scss';

	let { children } = $props();

	onMount(() => {
		themeHandler();
		languageHandler();
	})
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


{@render children()}
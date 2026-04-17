<script lang="ts">
    import { onMount } from 'svelte';
	import '$lib/style/style.css';
	import '$lib/assets/styles/style.css';

	import favicon from '$lib/assets/web/favicon/toonvb-8x8.svg';

	import { loadFunctions } from '$lib/typescript/load';

	let { children } = $props();

	onMount(() => loadFunctions());
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
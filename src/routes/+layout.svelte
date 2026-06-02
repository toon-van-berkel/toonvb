<script lang="ts">
	import { onMount } from 'svelte';
	import { loadFunctions } from '$lib/typescript/load';

	let { children } = $props();

	onMount(() => {
		loadFunctions();
	});
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-498Z4JVGVT"></script>

	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			window.dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-498Z4JVGVT');
	</script>
</svelte:head>

{@render children()}
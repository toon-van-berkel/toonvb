<script lang="ts">
    import { onMount } from 'svelte';
	import { loadFunctions } from '$lib/typescript/load';

	let { children } = $props();

	onMount(() => loadFunctions());
</script>

{@render children()}
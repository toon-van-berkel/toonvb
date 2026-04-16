<script lang="ts">
	import Navbar from '$lib/pages/components/Navbar.svelte';
    
	let { children } = $props();
</script>

<Navbar></Navbar>
{@render children()}
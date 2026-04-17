<script lang="ts">
	import Navbar from '$lib/pages/components/Navbar.svelte';
    import TopBar from '$lib/pages/components/TopBar.svelte';
    
	let { children } = $props();
</script>

<div class="nav-container">
	<TopBar></TopBar>
	<Navbar></Navbar>
</div>
{@render children()}
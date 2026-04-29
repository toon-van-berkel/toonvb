<script lang="ts">
	import Navbar from '$lib/pages/components/Navbar.svelte';
    import TopBar from '$lib/pages/components/TopBar.svelte';
	
	import favicon from '$lib/assets/web/favicon/toonvb-8x8.svg';

	import '$lib/style/style.css';
	import '$lib/assets/styles/style.css';
    
	let { children } = $props();
</script>

<svelte:head>
	<title>Toon van Berkel | Creative Software Developer & Web Designer</title>
	<meta name="description" content="Toon van Berkel is a Creative Software Developer creating modern websites, interactive web applications, portfolio projects and SEO-focused digital experiences.">
	<link rel="canonical" href="https://toonvb.com/">
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="nav-container">
	<TopBar></TopBar>
	<Navbar></Navbar>
</div>
{@render children()}
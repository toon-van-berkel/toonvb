<script lang="ts">
	import Navbar from '$lib/pages/components/Navbar.svelte';
    import TopBar from '$lib/pages/components/TopBar.svelte';
    import Footer from '$lib/pages/components/Footer.svelte';

	import favicon from '$lib/assets/web/favicon/toonvb-8x8.svg';

	import '$lib/assets/styles/scss/style.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="site-layout">
	<header class="site-header">
		<div class="site-header__inner">
			<TopBar></TopBar>
			<Navbar></Navbar>
		</div>
	</header>

	<div class="site-content">
		{@render children()}
	</div>
	
	<Footer />
</div>

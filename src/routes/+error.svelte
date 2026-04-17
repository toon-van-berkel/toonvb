<script lang="ts">
	import Navbar from '$lib/pages/components/Navbar.svelte';
    import TopBar from '$lib/pages/components/TopBar.svelte';
    import { currentLanguage } from '$lib/typescript/pref/language';
    import { defaultLanguage } from '$lib/typescript/pref/language';
    import { content } from '$lib/typescript/content/pages/error';

	import { page } from '$app/state';
	import { base } from '$app/paths';


	const Content = $derived(
		content[$currentLanguage] ?? content[defaultLanguage]
	);
</script>

<div class="nav-container">
	<TopBar></TopBar>
	<Navbar></Navbar>
</div>

<main>
    <section class="error">
        <h1 class="error-title">404</h1>
        <h2 class="error-subTitle">{Content.title}</h2>
        <p class="error-description">{Content.description1}"{page.url.pathname}"{Content.description2}<a href="mailto:toonvanberkel203@proton.me">toonvanberkel203@proton.me</a>.</p>
        <div class="error__button-container">
            <a class="error__button" href={`${base}/${$currentLanguage}`}>{Content.link1}</a>
            <a class="error__button" href="mailto:toonvanberkel203@proton.me">{Content.link2}</a>
        </div>
    </section>
</main>
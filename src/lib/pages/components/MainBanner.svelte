<script lang="ts">
    import { content } from "$lib/typescript/content/components/mainBanner";
	import { currentLanguage, defaultLanguage } from '$lib/typescript/pref/language';
    
	const mainbannerContent = $derived(
		content[$currentLanguage] ?? content[defaultLanguage]
	);
</script>

<section class="mainBanner-container">
    <div class="mainBanner-backgroundCover"></div>
    <article class="mainBanner">
        <h1 class="mainBanner-title">       {mainbannerContent.title}       </h1>
        <h2 class="mainBanner-subtitle">    {mainbannerContent.subtitle}    </h2>
        <p  class="mainBanner-description"> {mainbannerContent.description} </p>
    </article>
</section>
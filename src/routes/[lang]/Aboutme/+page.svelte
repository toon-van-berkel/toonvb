<script lang="ts">
    import { content } from "$lib/typescript/content/components/aboutMe";
	import { currentLanguage, defaultLanguage } from '$lib/typescript/pref/language';
    
	const AboutmeContent = $derived(
		content[$currentLanguage] ?? content[defaultLanguage]
	);
</script>

<main class="normalize">
	<section>
		<h1>	{AboutmeContent.title}</h1>
		<p>		{AboutmeContent.text1}</p>
		<p>		{AboutmeContent.text2}</p>
		<p>		{AboutmeContent.text3}</p>
		<p>		{AboutmeContent.text4}</p>
		<p>		{AboutmeContent.text5}</p>
	</section>
</main>
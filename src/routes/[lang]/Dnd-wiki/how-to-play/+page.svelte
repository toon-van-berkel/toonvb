<script lang="ts">
	import { page } from '$app/state';
	import {
		currentLanguage,
		isSupportedLanguage
	} from '$lib/typescript/pref/language';

	const activeLanguage = $derived(
		isSupportedLanguage(page.params.lang) ? page.params.lang : $currentLanguage
	);

	const content = $derived(
		activeLanguage === 'nl-nl'
			? {
					title: 'Hoe te spelen',
					text:
						'Deze pagina legt later uit hoe spelers de D&D wiki gebruiken, de tafelstructuur volgen en de belangrijkste campagne-informatie vinden.'
				}
			: {
					title: 'How to play',
					text:
						'This page will eventually explain how players can use the D&D wiki, follow the table structure, and find the most important campaign information.'
				}
	);
</script>

<section>
	<h1>{content.title}</h1>
	<p>{content.text}</p>
</section>

<script lang="ts">
	import {
		currentLanguage,
		languageLabels,
		supportedLanguages,
		updateLanguage
	} from '$lib/typescript/pref/language';

	function handleLanguageChange(event: Event) {
		const select = event.currentTarget as HTMLSelectElement;
		updateLanguage(select.value);
	}
</script>

<nav class="nav__top-container">
	<ul class="nav__top">
		<li class="nav__top__item">
			<b class="nav__top__item-label">Language:</b>
			<select class="nav__top__item-input" name="language" id="language"
				bind:value={$currentLanguage} onchange={handleLanguageChange}
				aria-label="Select language"
			>
				{#each supportedLanguages as language}
					<option value={language}>{languageLabels[language]}</option>
				{/each}
			</select>
		</li>
	</ul>
</nav>
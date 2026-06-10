<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import WikiTree from '$lib/components/wiki/WikiTree.svelte';
	import { wikiTree } from '$lib/typescript/content/wiki/wikiTree';
	import { currentLanguage, isSupportedLanguage } from '$lib/typescript/pref/language';

	const activeLanguage = $derived(
		isSupportedLanguage(page.params.lang) ? page.params.lang : $currentLanguage
	);
	let { children } = $props();

	function buildWikiHref(href: string) {
		return `${base}/${activeLanguage}/Dnd-wiki/${href}`;
	}

	const selectorContent = $derived(
		activeLanguage === 'nl-nl'
			? {
					showNormalNavigation: 'Toon normale paginanavigatie',
					dmLabel: 'Mijn DM is:'
				}
			: {
					showNormalNavigation: 'Show normal page navigation',
					dmLabel: 'My dm is:'
				}
	);
</script>

<div class="wiki">
	<div class="wiki-selectors">
		<label>
			<input type="checkbox" /> {selectorContent.showNormalNavigation}
		</label>

		<label>
			{selectorContent.dmLabel}
			<select>
				<option selected value="Toon">Toon</option>
				<option value="Tijs">Tijs</option>
			</select>
		</label>
	</div>

	<div class="wiki-view">
		<nav class="wiki__nav">
			<a href="{base}/{activeLanguage}/Dnd-wiki">
				<img
					class="wiki__nav-logo"
					src="/favicons/portal/dndportalwiki-128x75-light.png"
					alt="Wiki Logo"
				/>
			</a>
			<hr />

			<WikiTree items={wikiTree} currentPath={page.url.pathname} buildHref={buildWikiHref} />
		</nav>

		<main class="wiki-main">
			{@render children()}
		</main>
	</div>
</div>

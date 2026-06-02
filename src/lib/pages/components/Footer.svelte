<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import {
		currentLanguage,
		defaultLanguage,
		isSupportedLanguage
	} from '$lib/typescript/pref/language';
	import { content } from '$lib/typescript/content/components/footer';

	const activeLanguage = $derived(
		isSupportedLanguage(page.params.lang) ? page.params.lang : $currentLanguage
	);

	const footerContent = $derived(
		content[activeLanguage] ?? content[defaultLanguage] ?? content['en-gb']
	);

	function buildLink(link: string) {
		const lang = activeLanguage ?? defaultLanguage;

		if (link.startsWith('http')) {
			return link;
		}

		if (link === '/') {
			return `${base}/${lang}`;
		}

		return `${base}/${lang}${link}`;
	}

	const year = new Date().getFullYear();
</script>

{#if footerContent}
	<footer class="footer">
		<div class="footer-inner">
			<section class="footer-brand">
				<h2>{footerContent.heading}</h2>
				<p>{footerContent.desc}</p>
			</section>

			<section class="footer-links">
				{#each footerContent.groups as group}
					<div>
						<h3>{group.title}</h3>

						<ul>
							{#each group.links as link}
								<li>
									<a href={buildLink(link.href)}>{link.label}</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</section>
		</div>

		<div class="footer-bottom">
			<p>© {year} {footerContent.brandName}. {footerContent.copy}.</p>
		</div>
	</footer>
{/if}

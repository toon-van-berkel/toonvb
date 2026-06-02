<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import {
		currentLanguage,
		defaultLanguage,
		isSupportedLanguage
	} from '$lib/typescript/pref/language';
	import { content } from '$lib/typescript/content/components/navbar';

	let menuOpen = $state(false);

	const activeLanguage = $derived(
		isSupportedLanguage(page.params.lang) ? page.params.lang : $currentLanguage
	);

	const navContent = $derived(
		content[activeLanguage] ?? content[defaultLanguage]
	);

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<nav class="nav-container">
	<div class="nav__nav">
		<span class="nav__nav-brand-container">
			<a class="nav__nav-brand" href={`${base}/${activeLanguage}`}>
				Toonvb.com
			</a>
		</span>

		<button
			class="nav__nav-toggle"
			type="button"
			aria-label={menuOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={menuOpen}
			onclick={toggleMenu}
		>
			<img
				src={`${base}/menu-${menuOpen ? 'open' : 'closed'}.png`}
				alt=""
				aria-hidden="true"
			/>
		</button>

		<ul class={`nav__nav__links ${menuOpen ? 'nav__nav__links-opened' : ''}`}>
			<li class="nav__nav__links-item-container">
				<a class="nav__nav__links-item" href={`${base}/${activeLanguage}/Projects`} onclick={closeMenu}>
					{navContent.link1}
				</a>
			</li>

			<li class="nav__nav__links-item-container">
				<a class="nav__nav__links-item" href={`${base}/${activeLanguage}/Vacations`} onclick={closeMenu}>
					{navContent.lv}
				</a>
			</li>

			<li class="nav__nav__links-item-container">
				<a class="nav__nav__links-item" href={`${base}/${activeLanguage}/Gallery`} onclick={closeMenu}>
					{navContent.link2}
				</a>
			</li>

			<li class="nav__nav__links-item-container">
				<a class="nav__nav__links-item" href={`${base}/${activeLanguage}/Aboutme`} onclick={closeMenu}>
					{navContent.link3}
				</a>
			</li>

			<li class="nav__nav__links-item-container">
				<a class="nav__nav__links-item" href={`${base}/${activeLanguage}/Contact`} onclick={closeMenu}>
					{navContent.link4}
				</a>
			</li>
		</ul>
	</div>
</nav>

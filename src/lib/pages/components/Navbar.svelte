<script lang="ts">
	import { base } from '$app/paths';
	import { currentLanguage, defaultLanguage } from '$lib/typescript/pref/language';
	import { content } from '$lib/typescript/content/components/navbar';

	let menuOpen = $state(false);

	const navContent = $derived(
		content[$currentLanguage] ?? content[defaultLanguage]
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
			<a class="nav__nav-brand" href={`${base}/${$currentLanguage}`}>
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
				alt={navContent.imgAlt}
			/>
		</button>

		<ul class={`nav__nav__links ${menuOpen ? 'nav__nav__links-opened' : ''}`}>
			<li class="nav__nav__links-item-container">
				<a class="nav__nav__links-item" href={`${base}/${$currentLanguage}/Projects`} onclick={closeMenu}>
					{navContent.link1}
				</a>
			</li>

			<li class="nav__nav__links-item-container">
				<a class="nav__nav__links-item" href={`${base}/${$currentLanguage}/Gallery`} onclick={closeMenu}>
					{navContent.link2}
				</a>
			</li>

			<li class="nav__nav__links-item-container">
				<a class="nav__nav__links-item" href={`${base}/${$currentLanguage}/Aboutme`} onclick={closeMenu}>
					{navContent.link3}
				</a>
			</li>

			<li class="nav__nav__links-item-container">
				<a class="nav__nav__links-item" href={`${base}/${$currentLanguage}/Contact`} onclick={closeMenu}>
					{navContent.link4}
				</a>
			</li>
		</ul>
	</div>
</nav>
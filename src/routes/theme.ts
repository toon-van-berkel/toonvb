export function themeHandler() {
	const saved = localStorage.getItem('theme');

	const theme =
		saved === 'dark' || saved === 'light'
			? saved
			: window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light';

	localStorage.setItem('theme', theme);
	document.documentElement.dataset.theme = theme;
}
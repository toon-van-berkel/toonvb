<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		if (page.status === 404) {
			const lang = navigator.language?.toLowerCase() ?? 'en';
			const target = lang.startsWith('nl') ? '/nl-nl/404' : '/en-us/404';

			// prevent loops if already on a 404 page
			if (!location.pathname.endsWith('/404')) {
				goto(target, { replaceState: true });
			}
		}
	});
</script>

<h1>{page.status}</h1>
<p>Loading error page...</p>
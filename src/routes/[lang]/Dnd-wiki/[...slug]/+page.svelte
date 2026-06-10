<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<section>
	<h1>{data.title}</h1>
	<p>{data.intro}</p>
	<p>{data.details}</p>
</section>

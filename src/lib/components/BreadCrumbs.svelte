<script lang="ts">
	import { page } from '$app/state';

	const breadcrumbs = $derived(
		page.url.pathname
			.split('/')
			.filter(Boolean)
			.map((part, index, parts) => {
				return {
					name: part,
					href: '/' + parts.slice(0, index + 1).join('/')
				};
			})
	);
</script>

<nav class="breadcrumbs">
	{#each breadcrumbs as breadcrumb, index}
		<a href={breadcrumb.href}>
			{breadcrumb.name}
		</a>

		{#if index < breadcrumbs.length - 1}
			<span>/</span>
		{/if}
	{/each}
</nav>
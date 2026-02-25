<svelte:head>
	<title>404 | Page Not Found</title>
	<meta
		name="description"
		content="The page you are looking for could not be found."
	/>
</svelte:head>

<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div class="error-page">
	<div class="error-card">
		<p class="code">404</p>
		<h1>Page not found</h1>
		<p class="desc">
			Sorry, the page you’re looking for doesn’t exist, was moved, or the link is incorrect.
		</p>

		<div class="actions">
			<a class="btn primary" href={resolve('/en-us')}>Go to English home</a>
			<a class="btn" href={resolve('/')}>Root page</a>
		</div>
	</div>
</div>

<style>
	.error-page {
		min-height: 100svh;
		display: grid;
		place-items: center;
		padding: 2rem;
		background:
			radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.06), transparent 40%),
			radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.04), transparent 45%),
			#0f1115;
		color: #f5f7fb;
	}

	.error-card {
		width: min(680px, 100%);
		padding: 2rem;
		border-radius: 1.25rem;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(6px);
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
	}

	.code {
		margin: 0 0 0.4rem 0;
		font-size: clamp(2.5rem, 7vw, 4rem);
		font-weight: 800;
		line-height: 1;
		letter-spacing: 0.04em;
		opacity: 0.95;
	}

	h1 {
		margin: 0;
		font-size: clamp(1.4rem, 3vw, 2rem);
		line-height: 1.15;
	}

	.desc {
		margin: 0.9rem 0 0 0;
		color: rgba(245, 247, 251, 0.78);
		line-height: 1.5;
		max-width: 55ch;
	}

	.actions {
		margin-top: 1.25rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.7rem 1rem;
		border-radius: 0.8rem;
		text-decoration: none;
		color: #f5f7fb;
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(255, 255, 255, 0.1);
		transition: transform 120ms ease, background 120ms ease, border-color 120ms ease;
	}

	.btn:hover {
		transform: translateY(-1px);
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.18);
	}

	.btn.primary {
		background: rgba(255, 255, 255, 0.14);
		border-color: rgba(255, 255, 255, 0.2);
		font-weight: 600;
	}
</style>

<script>
	let { error, status } = $props();

	function goHome() {
		window.location.href = '/';
	}

	function goBack() {
		history.back();
	}
</script>

<svelte:head>
	<title>{status} - Duck Not Found</title>
	<meta
		name="description"
		content="This page floated away. Return home before the ducks get suspicious."
	/>
</svelte:head>

<main class="not-found-page">
	<section class="pond">
		<div class="bubbles bubble-one"></div>
		<div class="bubbles bubble-two"></div>
		<div class="bubbles bubble-three"></div>

		<article class="card">
			<div class="duck">
				<div class="duck__body">
					<div class="duck__head">
						<div class="duck__eye"></div>
						<div class="duck__beak"></div>
					</div>
					<div class="duck__wing"></div>
				</div>
				<div class="duck__water"></div>
			</div>

			<p class="eyebrow">Quack... something went wrong</p>

			<h1>{status || 404}</h1>

			<h2>Page Not Found</h2>

			<p class="message">
				This page seems to have floated away like a rubber duck in a bubble bath.
				Maybe the link is broken, or maybe the duck took it.
			</p>

			{#if error?.message}
				<p class="error-message">{error.message}</p>
			{/if}

			<div class="buttons">
				<button onclick={goHome}>Return to pond</button>
				<button class="secondary" onclick={goBack}>Swim back</button>
			</div>
		</article>
	</section>
</main>

<style>
	.not-found-page {
		min-height: 100svh;
		display: grid;
		place-items: center;
		padding: 24px;
		background:
			radial-gradient(circle at top left, #fff7b3 0, transparent 35%),
			linear-gradient(135deg, #7edff2 0%, #b9f3ff 45%, #fff7d6 100%);
		color: #24313f;
		overflow: hidden;
	}

	.pond {
		position: relative;
		width: min(100%, 900px);
		display: grid;
		place-items: center;
	}

	.card {
		position: relative;
		z-index: 2;
		width: min(100%, 560px);
		padding: 48px 32px;
		text-align: center;
		border-radius: 32px;
		background: rgba(255, 255, 255, 0.75);
		box-shadow: 0 24px 70px rgba(36, 49, 63, 0.18);
		backdrop-filter: blur(18px);
		border: 2px solid rgba(255, 255, 255, 0.8);
	}

	.duck {
		width: 190px;
		height: 150px;
		margin: 0 auto 28px;
		position: relative;
	}

	.duck__body {
		position: absolute;
		left: 22px;
		bottom: 28px;
		width: 140px;
		height: 90px;
		background: #ffd43b;
		border-radius: 65% 55% 50% 50%;
		box-shadow: inset -12px -10px 0 rgba(229, 167, 0, 0.25);
		animation: float 3s ease-in-out infinite;
	}

	.duck__head {
		position: absolute;
		right: 8px;
		top: -48px;
		width: 72px;
		height: 72px;
		background: #ffd43b;
		border-radius: 50%;
		box-shadow: inset -8px -6px 0 rgba(229, 167, 0, 0.22);
	}

	.duck__eye {
		position: absolute;
		top: 24px;
		right: 20px;
		width: 8px;
		height: 8px;
		background: #24313f;
		border-radius: 50%;
	}

	.duck__beak {
		position: absolute;
		right: -35px;
		top: 34px;
		width: 46px;
		height: 24px;
		background: #ff8c2b;
		border-radius: 40% 70% 70% 40%;
		box-shadow: inset -5px -3px 0 rgba(191, 84, 0, 0.18);
	}

	.duck__wing {
		position: absolute;
		left: 36px;
		top: 36px;
		width: 58px;
		height: 38px;
		background: #f6bd16;
		border-radius: 60% 50% 55% 60%;
		transform: rotate(-12deg);
	}

	.duck__water {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 36px;
		background: rgba(39, 178, 214, 0.45);
		border-radius: 50%;
		filter: blur(1px);
	}

	.eyebrow {
		margin: 0 0 8px;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-size: 0.8rem;
		color: #e39b00;
	}

	h1 {
		margin: 0;
		font-size: clamp(5rem, 14vw, 9rem);
		line-height: 0.9;
		color: #ffbf00;
		text-shadow: 4px 5px 0 #24313f;
	}

	h2 {
		margin: 18px 0 12px;
		font-size: clamp(1.8rem, 5vw, 3rem);
	}

	.message {
		max-width: 440px;
		margin: 0 auto;
		font-size: 1.05rem;
		line-height: 1.7;
		color: #4b5b6b;
	}

	.error-message {
		margin: 20px auto 0;
		padding: 12px 16px;
		max-width: 420px;
		border-radius: 16px;
		background: rgba(255, 212, 59, 0.25);
		color: #8a6200;
		font-weight: 700;
	}

	.buttons {
		margin-top: 32px;
		display: flex;
		justify-content: center;
		gap: 14px;
		flex-wrap: wrap;
	}

	button {
		border: 0;
		cursor: pointer;
		padding: 14px 22px;
		border-radius: 999px;
		background: #ffd43b;
		color: #24313f;
		font-weight: 900;
		font-size: 1rem;
		box-shadow: 0 10px 20px rgba(255, 191, 0, 0.3);
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease,
			background 0.2s ease;
	}

	button:hover {
		transform: translateY(-3px);
		background: #ffbf00;
		box-shadow: 0 16px 28px rgba(255, 191, 0, 0.4);
	}

	button.secondary {
		background: #ffffff;
		box-shadow: 0 10px 20px rgba(36, 49, 63, 0.12);
	}

	button.secondary:hover {
		background: #f5fbff;
	}

	.bubbles {
		position: absolute;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.55);
		animation: bubble 6s ease-in-out infinite;
	}

	.bubble-one {
		width: 70px;
		height: 70px;
		left: 5%;
		top: 18%;
	}

	.bubble-two {
		width: 42px;
		height: 42px;
		right: 12%;
		top: 8%;
		animation-delay: 1.2s;
	}

	.bubble-three {
		width: 90px;
		height: 90px;
		right: 5%;
		bottom: 12%;
		animation-delay: 2s;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0) rotate(-1deg);
		}

		50% {
			transform: translateY(-10px) rotate(2deg);
		}
	}

	@keyframes bubble {
		0%,
		100% {
			transform: translateY(0) scale(1);
			opacity: 0.55;
		}

		50% {
			transform: translateY(-28px) scale(1.08);
			opacity: 0.85;
		}
	}

	@media (max-width: 520px) {
		.card {
			padding: 36px 22px;
			border-radius: 26px;
		}

		.duck {
			transform: scale(0.82);
			margin-bottom: 12px;
		}

		.buttons {
			flex-direction: column;
		}

		button {
			width: 100%;
		}
	}
</style>
<script lang="ts">
	import { onMount } from 'svelte';

	type TimeDifference = {
		years: number;
		months: number;
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
	};

	let {
		date = '2026-03-18T12:10:00',
        label = "Time I have my driver's license"
	}: {
		date?: string;
        label?: string;
	} = $props();

	let time = $state<TimeDifference>({
		years: 0,
		months: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});

	function getTimeDifference(startStr: string): TimeDifference {
		const start = new Date(startStr);
		const end = new Date();

		if (end < start) {
			return {
				years: 0,
				months: 0,
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0
			};
		}

		let years = end.getFullYear() - start.getFullYear();
		let months = end.getMonth() - start.getMonth();
		let days = end.getDate() - start.getDate();
		let hours = end.getHours() - start.getHours();
		let minutes = end.getMinutes() - start.getMinutes();
		let seconds = end.getSeconds() - start.getSeconds();

		if (seconds < 0) {
			minutes--;
			seconds += 60;
		}

		if (minutes < 0) {
			hours--;
			minutes += 60;
		}

		if (hours < 0) {
			days--;
			hours += 24;
		}

		if (days < 0) {
			months--;

			const daysInPreviousMonth = new Date(
				end.getFullYear(),
				end.getMonth(),
				0
			).getDate();

			days += daysInPreviousMonth;
		}

		if (months < 0) {
			years--;
			months += 12;
		}

		return {
			years,
			months,
			days,
			hours,
			minutes,
			seconds
		};
	}

	function pad(value: number) {
		return value.toString().padStart(2, '0');
	}

	function updateCounter() {
		time = getTimeDifference(date);
	}

	const clockItems = $derived([
		{
			label: 'Years',
			value: time.years.toString()
		},
		{
			label: 'Months',
			value: pad(time.months)
		},
		{
			label: 'Days',
			value: pad(time.days)
		},
		{
			label: 'Hours',
			value: pad(time.hours)
		},
		{
			label: 'Minutes',
			value: pad(time.minutes)
		},
		{
			label: 'Seconds',
			value: pad(time.seconds)
		}
	]);

	onMount(() => {
		updateCounter();

		const interval = window.setInterval(updateCounter, 1000);

		return () => {
			window.clearInterval(interval);
		};
	});
</script>

<div class="license-counter" aria-label="Time I have my driver's license">
	<p class="license-counter__title">{label}</p>

	<div class="license-counter__clock">
		{#each clockItems as item}
			<div class="flip-unit">
				<div class="flip-card">
					<div class="flip-card__top"></div>
					<div class="flip-card__bottom"></div>

					{#key item.value}
						<span class="flip-card__value">{item.value}</span>
					{/key}

					<span class="flip-card__line"></span>
				</div>

				<span class="flip-unit__label">{item.label}</span>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.license-counter {
		display: grid;
		gap: 1rem;
		width: 100%;
	}

	.license-counter__title {
		margin: 0;
		font-size: 0.95rem;
		font-weight: 800;
		letter-spacing: 0.03em;
		text-transform: uppercase;
		opacity: 0.75;
	}

	.license-counter__clock {
		display: grid;
		grid-template-columns: repeat(6, minmax(0, 1fr));
		gap: 0.7rem;
	}

	.flip-unit {
		display: grid;
		gap: 0.45rem;
		justify-items: center;
		min-width: 0;
	}

	.flip-card {
		position: relative;
		display: grid;
		place-items: center;
		width: 100%;
		min-height: 4.6rem;
		overflow: hidden;
		border-radius: 0.85rem;
		background: #11131a;
		box-shadow:
			inset 0 1px 0 rgba(255, 255, 255, 0.12),
			inset 0 -1px 0 rgba(0, 0, 0, 0.65),
			0 0.85rem 1.8rem rgba(0, 0, 0, 0.22);
		perspective: 600px;
	}

	.flip-card__top,
	.flip-card__bottom {
		position: absolute;
		left: 0;
		width: 100%;
		height: 50%;
		pointer-events: none;
	}

	.flip-card__top {
		top: 0;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.12),
			rgba(255, 255, 255, 0.03)
		);
	}

	.flip-card__bottom {
		bottom: 0;
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.08),
			rgba(0, 0, 0, 0.28)
		);
	}

	.flip-card__value {
		position: relative;
		z-index: 2;
		display: inline-block;
		font-size: clamp(1.45rem, 3.4vw, 2.45rem);
		font-weight: 950;
		line-height: 1;
		color: #f8fafc;
		font-variant-numeric: tabular-nums;
		text-shadow: 0 0.2rem 0.35rem rgba(0, 0, 0, 0.55);
		animation: flip-number 0.45s cubic-bezier(0.22, 1, 0.36, 1);
		transform-origin: center top;
	}

	.flip-card__line {
		position: absolute;
		top: 50%;
		left: 0;
		z-index: 3;
		width: 100%;
		height: 1px;
		background: rgba(0, 0, 0, 0.75);
		box-shadow:
			0 -1px 0 rgba(255, 255, 255, 0.06),
			0 1px 0 rgba(255, 255, 255, 0.05);
	}

	.flip-unit__label {
		font-size: 0.68rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-align: center;
		text-transform: uppercase;
		opacity: 0.68;
	}

	@keyframes flip-number {
		0% {
			opacity: 0;
			transform: rotateX(-90deg) translateY(-0.35rem);
		}

		45% {
			opacity: 1;
			transform: rotateX(18deg);
		}

		100% {
			opacity: 1;
			transform: rotateX(0deg) translateY(0);
		}
	}

	@media (max-width: 820px) {
		.license-counter__clock {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (max-width: 420px) {
		.license-counter__clock {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.flip-card {
			min-height: 4rem;
		}
	}
</style>
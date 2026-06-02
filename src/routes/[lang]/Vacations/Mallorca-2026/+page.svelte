<script lang="ts">
	import { page } from '$app/state';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import type { LatLng } from 'leaflet';

	import { locations } from '$lib/typescript/mapping/data/locations';
	import { routes } from '$lib/typescript/mapping/data/routes';
	import { createMappingKeyHandler } from '$lib/typescript/dev/mapping';
    import { base } from '$app/paths';
    import Breadcrumbs from '$lib/pages/components/Breadcrumbs.svelte';
	import SeoHead from '$lib/seo/SeoHead.svelte';
	import { breadcrumbSchema } from '$lib/seo/site';
    import {
		currentLanguage,
		isSupportedLanguage
	} from '$lib/typescript/pref/language';

	const activeLanguage = $derived(
		isSupportedLanguage(page.params.lang) ? page.params.lang : $currentLanguage
	);

    let selectedDate = $derived(browser ? page.url.searchParams.get('date') : null);
	
	let mapContainer = $state<HTMLDivElement | undefined>();

	let routePoints: [number, number][] = [];
	let lastLatLng: LatLng | null = null;

	onMount(() => {
		let map: import('leaflet').Map | undefined;
		let handleKeyDown: ((event: KeyboardEvent) => void) | null = null;
		let destroyed = false;

		const initMap = async () => {
			const L = await import('leaflet');

			if (destroyed) return;
			if (!mapContainer) return;

			const container = mapContainer;

			map = L.map(container, {
				scrollWheelZoom: true
			}).setView([39.6, 3], 10);

			map.on('mousemove', (event) => {
				lastLatLng = event.latlng;
			});

			L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 19,
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);

			handleKeyDown = createMappingKeyHandler({
				routePoints,
				getLastLatLng: () => lastLatLng
			});

			window.addEventListener('keydown', handleKeyDown);

			routes.forEach((route) => {
				L.polyline(route as [number, number][], {
					weight: 4,
					opacity: 0.9
				}).addTo(map!);
			});

			locations.forEach((place) => {
				const popupContent = `
					<div class="photo-popup">
						<strong>${place.title}</strong>
						<p>${place.description}</p>
						<iframe 
							class="iframe" 
							src="${place.iframe?.href}" 
							title="${place.title}" 
							frameborder="0" 
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
							referrerpolicy="strict-origin-when-cross-origin" 
							allowfullscreen
						></iframe>
					</div>
				`;

				L.circleMarker([place.lat, place.lng], {
					radius: 9,
					weight: 3,
					opacity: 1,
					fillOpacity: 0.9
				})
					.addTo(map!)
					.bindPopup(popupContent);
			});

			setTimeout(() => {
				map?.invalidateSize();
			}, 0);
		};

		initMap();

		return () => {
			destroyed = true;

			if (handleKeyDown) {
				window.removeEventListener('keydown', handleKeyDown);
			}

			if (map) {
				map.remove();
			}
		};
	});

	const seoPath = $derived(`/${activeLanguage}/Vacations/Mallorca-2026`);
	const pageTitle = $derived(
		activeLanguage === 'nl-nl'
			? 'Mallorca 2026 Travel Map van Toon van Berkel'
			: 'Mallorca 2026 Travel Map by Toon van Berkel'
	);
	const pageDescription = $derived(
		activeLanguage === 'nl-nl'
			? 'Bekijk de interactieve Mallorca 2026 kaart met routes, bezochte plekken, foto’s en reisnotities van Toon van Berkel.'
			: 'Explore the interactive Mallorca 2026 map with routes, visited places, photos and travel notes from Toon van Berkel.'
	);
	const jsonLd = $derived(
		breadcrumbSchema([
			{ name: 'Home', path: `/${activeLanguage}` },
			{ name: activeLanguage === 'nl-nl' ? 'Vakanties' : 'Vacations', path: `/${activeLanguage}/Vacations` },
			{ name: 'Mallorca 2026', path: seoPath }
		])
	);
</script>

<SeoHead title={pageTitle} description={pageDescription} path={seoPath} lang={activeLanguage} jsonLd={jsonLd} />

<main class="normalize">
<section class="map-page section">
    <Breadcrumbs
        items={[
            { label: activeLanguage === 'nl-nl' ? 'Vakanties' : 'Vacations', href: `${base}/${activeLanguage}/Vacations` },
            { label: 'Mallorca 2026' }
        ]}
    />

	<div class="text">
		<h1>Mallorca Travel Map</h1>
		<p>Places I visited, routes I walked, and photos I took around Mallorca.</p>
	</div>

	<div class="map-page-content">
        <ul>
            <li><a href={`${base}/${activeLanguage}/Vacations/Mallorca-2026`}>All</a></li>
            <li><a href={`${base}/${activeLanguage}/Vacations/Mallorca-2026?date=19-04-2026`}>19-04-2026</a></li>
            <li><a href={`${base}/${activeLanguage}/Vacations/Mallorca-2026?date=20-04-2026`}>20-04-2026</a></li>
            <li><a href={`${base}/${activeLanguage}/Vacations/Mallorca-2026?date=21-04-2026`}>21-04-2026</a></li>
            <li><a href={`${base}/${activeLanguage}/Vacations/Mallorca-2026?date=22-04-2026`}>22-04-2026</a></li>
            <li><a href={`${base}/${activeLanguage}/Vacations/Mallorca-2026?date=23-04-2026`}>23-04-2026</a></li>
            <li><a href={`${base}/${activeLanguage}/Vacations/Mallorca-2026?date=24-04-2026`}>24-04-2026</a></li>
            <li><a href={`${base}/${activeLanguage}/Vacations/Mallorca-2026?date=25-04-2026`}>25-04-2026</a></li>
            <li><a href={`${base}/${activeLanguage}/Vacations/Mallorca-2026?date=26-04-2026`}>26-04-2026</a></li>
            <li><a href={`${base}/${activeLanguage}/Vacations/Mallorca-2026?date=27-04-2026`}>27-04-2026</a></li>
            <li><a href={`${base}/${activeLanguage}/Vacations/Mallorca-2026?date=28-04-2026`}>28-04-2026</a></li>
            <li><a href={`${base}/${activeLanguage}/Vacations/Mallorca-2026?date=29-04-2026`}>29-04-2026</a></li>
            <li><a href={`${base}/${activeLanguage}/Vacations/Mallorca-2026?date=30-04-2026`}>30-04-2026</a></li>
            <li><a href={`${base}/${activeLanguage}/Vacations/Mallorca-2026?date=01-05-2026`}>01-05-2026</a></li>
        </ul>
		<div>
			{#if selectedDate}
				<div class="bordor-left">
					<h2>Information about {selectedDate}</h2>
					<p>Here you can find details about my visit on {selectedDate}.</p>
					<div bind:this={mapContainer} class="map"></div>
				</div>
			{:else}
				<div bind:this={mapContainer} class="map"></div>
			{/if}
		</div>
	</div>
</section>
</main>

<style>
	.text p {
		margin: 0;
		opacity: 0.8;
	}

    :global(.photo-popup) {
        width: 260px;
        max-width: 260px;
        box-sizing: border-box;
    }

    :global(.photo-popup iframe) {
        width: 100%;
        aspect-ratio: 16 / 9;
        height: auto;
        display: block;
        border: 0;
        border-radius: 10px;
    }

    :global(.leaflet-popup-content) {
        margin: 12px;
        max-width: 280px;
        overflow: hidden;
    }

    :global(.leaflet-popup-content-wrapper) {
        overflow: hidden;
        border-radius: 14px;
    }
	.map {
		width: 100%;
		max-width: 1100px;
		height: 650px;
		margin: 0 auto;
		border-radius: 24px;
		overflow: hidden;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
	}

	:global(.photo-popup) {
		width: 220px;
	}

	:global(.photo-popup p) {
		margin: 0.4rem 0;
	}

	:global(.photo-popup img) {
		width: 100%;
		border-radius: 10px;
		margin-top: 0.4rem;
	}
</style>

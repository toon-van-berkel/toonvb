<script lang="ts">
	import { onMount } from 'svelte';
	import type { LatLng } from 'leaflet';

	import '$lib/assets/styles/map.css';

	import { locations } from '$lib/typescript/mapping/data/locations';
	import { routes } from '$lib/typescript/mapping/data/routes';
	import { createMappingKeyHandler } from '$lib/typescript/dev/mapping';

	let mapContainer: HTMLDivElement;

	let routePoints: [number, number][] = [];
	let lastLatLng: LatLng | null = null;

	onMount(() => {
		let map: import('leaflet').Map;
		let handleKeyDown: ((event: KeyboardEvent) => void) | null = null;

		const initMap = async () => {
			const L = await import('leaflet');

			map = L.map(mapContainer, {
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
				L.polyline(route, {
					weight: 4,
					opacity: 0.9
				}).addTo(map);
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
					.addTo(map)
					.bindPopup(popupContent);
			});
		};

		initMap();

		return () => {
			if (handleKeyDown) {
				window.removeEventListener('keydown', handleKeyDown);
			}

			if (map) {
				map.remove();
			}
		};
	});
</script>

<main class="normalize">
<section class="map-page section">
	<div class="text">
		<h1>Mallorca Travel Map</h1>
		<p>Places I visited, routes I walked, and photos I took around Mallorca.</p>
	</div>

	<div bind:this={mapContainer} class="map"></div>
	<slot/>
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
<script lang="ts">
    import '$lib/assets/styles/map.css';
	import { onMount } from 'svelte';

	let mapContainer: HTMLDivElement;

	const photoPlaces = [
		{
			title: `Docks of S'Arenal in Portocolom`,
			description: 'DJI 20260420161411 0010 D.',
			lat: 39.42561689759493, 
			lng: 3.2630681991577153,

			iframe: {
				href: "https://www.youtube.com/embed/49iyFcR9YPY?si=aa9jdfK4HqBcvaJl"
			}
		},
		{
			title: `Sea and Light house view Mallorca Drone shots`,
			description: 'DJI 007 and DJI 008.',
			lat: 39.415656008488995, 
			lng: 3.2707276939254375,

			iframe: {
				href: "https://www.youtube.com/embed/hs-1tybWsXE?si=Ph947NoASoLKinJt"
			}
		},
		{
			title: `Coastal view from lighthouse Mallorca drone shots.`,
			description: 'DJI 009 en DJI 0010.',
			lat: 39.41557104956237, 
			lng: 3.270676731954155,

			iframe: {
				href: "https://www.youtube.com/embed/vzTXxL5HHI4?si=sA4qd2UG-SEiEDrH"
			}
		},
		{
			title: `Coast view Mallorca Drone shot.`,
			description: 'DJI 0011',
			lat: 39.42058759324642, 
			lng: 3.276078701073857,

			iframe: {
				href: "https://www.youtube.com/embed/M3qGJcvS5tE?si=KielZS_mOwtuwjso"
			}
		},
		{
			title: `Drone view of Cala Mitjana.`,
			description: 'DJI 0027',
			lat: 39.38879899833159, 
			lng: 3.247034847763644,

			iframe: {
				href: "https://www.youtube.com/embed/eOMEpjuO4hw?si=9cjwV5u4XbSUskQQ"
			}
		},
		{
			title: `Showing where we walked from.`,
			description: '20260423 170616',
			lat: 39.39283840050536,
			lng: 3.2494398950711916,

			iframe: {
				href: "https://www.youtube.com/embed/ZQA2ERYuzrI?si=ED_Ea1Kn2CZJxXCH"
			}
		},
		{
			title: `View of Cala Sa Nau.`,
			description: '20260423 173716',
			lat: 39.39975099850891, 
			lng: 3.2536804676055913,

			iframe: {
				href: "https://www.youtube.com/embed/AqrJivyGQhs?si=i18sctCGour8QjSi"
			}
		},
		{
			title: 'You would never guess where we are.',
			description: 'DJI 0029.',
			lat: 39.390755159373754,
			lng: 3.2503089308738713,

			iframe: {
				href: "https://www.youtube.com/embed/fe-lpu-sGjc?si=rmqyBTifCh7MT-f7"
			}
		},
		{
			title: 'South coast drone view shots of Mallorca.',
			description: 'DJI 0023, DJI 0024 and DJI 0025.',
			lat: 39.40837748507193,
			lng: 3.2620427012375335,

			iframe: {
				href: "https://www.youtube.com/embed/ae09JPxW-8s?si=KPmI0hvyBxmELv8M"
			}
		},
		{
			title: 'Drone view of the forest and nature in Cala Marçal.',
			description: 'DJI 0026',
			lat: 39.407150622884,
			lng: 3.2564753293991093,

			iframe: {
				href: "https://www.youtube.com/embed/RfM_zMpSHio?si=Mn6Bo-OFEsYsvTA8"
			}
		},
		{
			title: 'View of Cala Parbacana.',
			description: '20260424 142344',
			lat: 39.41310443276665,
			lng: 3.2641822099139977,

			iframe: {
				href: "https://www.youtube.com/embed/LXufJxmC96k?si=v6ZM8FS7XaV2sk3r"
			}
		},
		{
			title: 'View of the salt production fields in Campos.',
			description: 'DJI 0016 and DJI 0017.',
			lat: 39.350680573215605, 
			lng: 3.009840846061707,

			iframe: {
				href: "https://www.youtube.com/embed/nd-YyyZHCXg?si=Ts8OKg_QoYxw4_L0"
			}
		},
		{
			title: 'Garden Botanicactus view drone shots.',
			description: 'DJI 0018 and DJI 0019.',
			lat: 39.34019660589499, 
			lng: 3.062246739727926,

			iframe: {
				href: "https://www.youtube.com/embed/sZ3infoMNM8?si=RuWWe1WMo5nHAoWo"
			}
		},
		{
			title: 'Drone shots showing the coast side of "Far des Cap Salines", "Cala Màrmols" and "El Caragol"',
			description: 'DJI 0020, DJI 0021 and DJI 0022.',
			lat: 39.26500522453817, 
			lng: 3.0528751015117455,

			iframe: {
				href: "https://www.youtube.com/embed/doyqfwGrSIM?si=CIVo4ejcTpBhN12t"
			}
		}
	];
	const walkingRoute: [number, number][] = [
		[39.40837748507193, 	3.2620427012375335],
		[39.40825866826655, 	3.2610404491424565],
		[39.40695857840718, 	3.259624242782593],
		[39.40732885081648, 	3.2584226131439213],
		[39.40708016055249, 	3.2582134008407597],
		[39.407030422393234, 	3.2567757368087773],
		[39.40709259508674, 	3.256561160087586],
		[39.407150622884, 		3.2564753293991093]
	];

	onMount(async () => {
		const L = await import('leaflet');

		const map = L.map(mapContainer, {
			scrollWheelZoom: true
		}).setView([39.6, 3], 10);

		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

        map.on('mousemove', (event) => {
            console.log('lat:', event.latlng.lat, 'lng:', event.latlng.lng);
        });

		L.polyline(walkingRoute, {
			weight: 4,
			opacity: 0.9
		}).addTo(map);

		photoPlaces.forEach((place) => {
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

		return () => {
			map.remove();
		};
	});
</script>

<main class="normalize">
<section class="map-page">
	<div class="text">
		<h1>Mallorca Travel Map</h1>
		<p>Places I visited, routes I walked, and photos I took around Mallorca.</p>
	</div>

	<div bind:this={mapContainer} class="map"></div>
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
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
			title: 'Drone shots showing the coast side of "Far des Cap Salines", "Cala Màrmols" and "El Caragol".',
			description: 'DJI 0020, DJI 0021 and DJI 0022.',
			lat: 39.26500522453817, 
			lng: 3.0528751015117455,

			iframe: {
				href: "https://www.youtube.com/embed/doyqfwGrSIM?si=CIVo4ejcTpBhN12t"
			}
		},
		{
			title: 'Docks Portocolom slow night fly by.',
			description: 'DJI 0033, DJI 0034 and DJI 0035.',
			lat: 39.41537971895979, 
			lng: 3.2621428370475773,

			iframe: {
				href: "https://www.youtube.com/embed/V6RTul6vKdE?si=kJ392wnvQJCBihAM"
			}
		},
		{
			title: 'Night view of the docks Portocolom.',
			description: 'DJI 0032.',
			lat: 39.413609367587966, 
			lng: 3.265476822853089,

			iframe: {
				href: "https://www.youtube.com/embed/2pfRnuczNno?si=wTqpaYwv_l9oo3rv"
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
	const laterWalkingRoute: [number, number][] = [
		[39.412527655913664, 	3.2629770040512085],
		[39.412578771700105, 3.2630431652614797],
		[39.412533872695384, 3.263100385665894],
		[39.4123515135349, 3.2628026604652405],
		[39.41200544427116, 3.2631674408912663],
		[39.411939131401766, 3.26332837343216],
		[39.41194534823595, 3.263473212718964],
		[39.41199508288947, 3.2635858654975896],
		[39.4121256361862, 3.263728022575379],
[39.41220714548574, 3.26378345494959],
[39.4123977940824, 3.263837099129888],
[39.41245512675277, 3.2638317347118573],
[39.41259396822333, 3.2637539506504263],
[39.4128281330622, 3.2641267777034955],
[39.412884083836516, 3.2641053200313763],
[39.41291309533143, 3.264212608391973],
[39.413037430172935, 3.2641419767787743],
[39.41310374199773, 3.2642331718852806],
[39.4131887039311, 3.2642331718852806],
[39.41331096604374, 3.2641634344508934],
[39.41338349431434, 3.2642385363033104],
[39.413461548506284, 3.2642590999603276],
[39.413527859927704, 3.2643422484397893],
[39.413532004262976, 3.2646051049232487],
[39.41356792300544, 3.264597058296204],
[39.41361282134422, 3.2645800708633037],
[39.413687421527044, 3.264553248773155],
[39.413722649363365, 3.264496922383842],
[39.413768238301664, 3.2642984389167404],
[39.41382487902007, 3.2643663883209233],
[39.41387046789148, 3.264476358890534],
[39.41390569563536, 3.264516592025757],
[39.41396786219874, 3.264521956443787],
[39.414017595409554, 3.264591693878174],
[39.41405075086372, 3.2646560668945317],
[39.41405489529438, 3.264774084091187],
[39.414096339587445, 3.264849185943604],
[39.41405903972478, 3.264926970005036],
[39.41402243053878, 3.264927864020138],
[39.41396855289588, 3.265019059126644],
[39.4139374696214, 3.265075385515957],
[39.41387737525149, 3.2650887965610313],
[39.41382142527432, 3.265169262831478],
[39.41377998081782, 3.2652336358478355],
[39.41371297893655, 3.2652649283409123],
[39.41363837878109, 3.2653346657752995],
[39.413609367587966, 3.265476822853089],
[39.41371297893655, 3.2654875516891484],
[39.41382073457572, 3.2654419541358948],
[39.41400723432689, 3.2652649283409123],
[39.414162650405096, 3.2649537920951848],
[39.41423310557977, 3.264725804328919],
[39.41410670065685, 3.2643556594848637],
[39.41390569563536, 3.2642671465873723],
[39.413675678868806, 3.2639560103416447],
[39.4134062888981, 3.264040947015019],
[39.41333583288788, 3.263960480744573],
[39.41364873991856, 3.263837099129888],
[39.41497149924055, 3.2637566326957317],
[39.41493834422426, 3.2627642153602214],
[39.41490518919221, 3.2621580361228557],
[39.41497978799215, 3.2621687649589153],
[39.41501708736219, 3.2621151207786174],
[39.41537971895979, 3.2621428370475773],
[39.4150309018543, 3.2621330022266197],
[39.41490864275782, 3.262124955599575],
[39.41486305456525, 3.2609152794975675],
[39.414850621416655, 3.2607114316124357],
[39.41485683799123, 3.26022595178074],
[39.41490242618785, 3.2599899173874296],
[39.414769805896725, 3.2598173618316655],
[39.41480296099314, 3.2595679163932805],
[39.41488999304628, 3.2594391703605656],
[39.414788455640405, 3.2592889666557316],
[39.41465790732985, 3.2590904831886296],
[39.414570874987, 3.2588866353034978],
[39.414458976100846, 3.2589617371559148],
[39.414299416267326, 3.2591950893402104],
[39.41423517778969, 3.2591119408607487],
[39.413922273390995, 3.2600775360242555],
[39.41348503376643, 3.2600936293601994],
[39.41349332269474, 3.260992169380188],
[39.41279497702662, 3.261005580425263],
[39.41273488167193, 3.2618933916091923],
[39.41260363874213, 3.262376189231873],
[39.412425424291634, 3.2627141475677495],
[39.412350822758526, 3.2628080248832707],

	]

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
            console.log('lat:', event.latlng.lat, ', lng:', event.latlng.lng, ',');
            console.log(`[${event.latlng.lat}, ${event.latlng.lng}],`);
        });

		L.polyline(walkingRoute, {
			weight: 4,
			opacity: 0.9
		}).addTo(map);

		L.polyline(laterWalkingRoute, {
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
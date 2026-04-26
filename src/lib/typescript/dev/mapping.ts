import type { LatLng } from 'leaflet';

type RoutePoint = [number, number];

type CreateMappingKeyHandlerOptions = {
	routePoints: RoutePoint[];
	getLastLatLng: () => LatLng | null;
};

const formatRoutePoints = (routePoints: RoutePoint[]) => {
	return routePoints
		.map(([lat, lng]) => `[${lat}, ${lng}],`)
		.join(' ');
};

export const createMappingKeyHandler = ({
	routePoints,
	getLastLatLng
}: CreateMappingKeyHandlerOptions) => {
	const logRoutePoints = () => {
		const output = formatRoutePoints(routePoints);

		console.clear();
		console.log(output);
	};

	const handleKeyDown = async (event: KeyboardEvent) => {
		const key = event.key.toLowerCase();

		if (key === 'e') {
			const lastLatLng = getLastLatLng();

			if (!lastLatLng) return;

			const point: RoutePoint = [
				lastLatLng.lat,
				lastLatLng.lng
			];

			routePoints.push(point);
			logRoutePoints();
		}

		if (key === 'z') {
			routePoints.pop();
			logRoutePoints();
		}

		if (key === 'c') {
			const output = formatRoutePoints(routePoints);

			await navigator.clipboard.writeText(output);
			console.log('Copied route points:', output);
		}
	};

	return handleKeyDown;
};
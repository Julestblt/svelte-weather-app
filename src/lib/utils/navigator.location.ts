import { setUserLocation } from '$lib/stores';
import type { Location } from '$lib/types/index';

export const initLocation = () => {
	navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
		if (result.state === 'granted') {
			navigator.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: lng } }) =>
				setUserLocation({ lat, lng } as Location)
			);
		}
	});
};

export const getNavigatorGeoLocation = () => {
	navigator.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: lng } }) =>
		setUserLocation({ lat, lng } as Location)
	);
};

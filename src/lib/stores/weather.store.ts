import { selectedLocation } from './';
import { derived, writable } from 'svelte/store';
import { useProxyAPI } from '$lib/api/proxy';
import type { Location } from '$lib/types/location.types';
import type { LocationResponse, WeatherResponse, StoredWeather } from '$lib/types/';

const { useLocation, useWoeid } = useProxyAPI;

const weatherState = writable<StoredWeather>(null);
const todayWeather = derived(weatherState, (value) => value && value.consolidated_weather[0]);
const upcomingWeather = derived(
	weatherState,
	(value) => value && value.consolidated_weather.filter((c, i) => i > 0)
);

const setWeatherState = (value: StoredWeather) => weatherState.set(value);

selectedLocation.subscribe(async (value: Location | number) => {
	let finalWoeid: number;
	if (!value) return;
	if (value && typeof value === 'object') {
		value = value as Location;
		const {
			0: { woeid }
		} = (await useLocation(value)) as LocationResponse[];
		finalWoeid = woeid;
	} else finalWoeid = value as number;
	const { title, latt_long, consolidated_weather } = (await useWoeid(
		finalWoeid
	)) as WeatherResponse;
	setWeatherState({ title, latt_long, consolidated_weather });
});

export { weatherState, setWeatherState, todayWeather, upcomingWeather };

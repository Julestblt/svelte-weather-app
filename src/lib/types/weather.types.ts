import type { ConsolidatedWeather } from './';

export type StoredWeather = {
	consolidated_weather: ConsolidatedWeather[];
	title: string;
	latt_long: string;
};

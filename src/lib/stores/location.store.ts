import { writable } from 'svelte/store';
import type { Location } from '$lib/types/location.types';

const userLocation = writable<Location>(null);

const setUserLocation = (value: Location) => userLocation.set(value);

export { userLocation, setUserLocation };

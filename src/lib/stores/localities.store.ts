import { writable } from 'svelte/store';
import type { Location, Parent } from '$lib/types';

const selectedLocation = writable<Location | number>(null);
const queryResults = writable<Parent[]>([]);

const setSelectedLocation = (value: Location | number) => selectedLocation.set(value);
const setQueryResults = (value: Parent[]) => queryResults.set(value.splice(0, 5));

export { selectedLocation, queryResults, setSelectedLocation, setQueryResults };

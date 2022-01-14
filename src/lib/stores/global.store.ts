import { writable } from 'svelte/store';

const isLoading = writable<boolean>(false);

const setIsLoading = (value: boolean) => isLoading.set(value);

export { isLoading, setIsLoading };

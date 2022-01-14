import { setIsLoading } from '$lib/stores/';
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

/**
 * Just a bit a syntaxic sugar over the fetch API.
 * Also allows to manage global loading state.
 * @param method
 * @param url
 * @param config
 * @returns
 */
const useFetch: (
	method: HttpMethod,
	url: string,
	config: Partial<RequestInit>
) => Promise<any> = async (method, url, config) => {
	setIsLoading(true);
	const initConfig = { ...config, method };

	const response = await fetch(url, initConfig);
	setIsLoading(false);

	return response;
};

export { useFetch };

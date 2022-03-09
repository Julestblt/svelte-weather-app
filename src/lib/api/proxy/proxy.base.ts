import { useFetch } from '../base.api';
import { buildUrl } from '$lib/utils/url';
import type { HttpMethod } from '../base.api';
import type { QueryParams } from '$lib/utils/url';

const useProxy: (
	method: HttpMethod,
	endpoint: string,
	queryParams?: QueryParams,
	body?: any
) => Promise<any> = async (method, endpoint, queryParams = null) => {
	const config: Partial<RequestInit> = {
		headers: {},
		credentials: 'same-origin',
		mode: 'cors'
	};
	const baseUrl = window.location.protocol + '//' + window.location.host + '/api';
	const url = buildUrl(baseUrl, endpoint, queryParams);

	const response = await useFetch(method, url, config);
	return response.json();
};

export { useProxy };

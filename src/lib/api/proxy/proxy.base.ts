import { useFetch } from '../base.api';
import { buildUrl } from '$lib/utils/url';
import type { HttpMethod } from '../base.api';
import type { QueryParams } from '$lib/utils/url';
import { getProxyBaseUrl } from '$lib/utils/env.variables';

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
	const proxyBaseUrl = getProxyBaseUrl as string;
	const url = buildUrl(proxyBaseUrl, endpoint, queryParams);
	const response = await useFetch(method, url, config);
	return response.json();
};

export { useProxy };

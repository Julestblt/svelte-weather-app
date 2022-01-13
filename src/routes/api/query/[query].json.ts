import { useFetch } from '$lib/api';
import { getMetaWeatherBaseUrl } from '$lib/utils/env.variables';

export async function get({ params }) {
	const { query } = params;
	const res = await useFetch('GET', `${getMetaWeatherBaseUrl}/search/?query=${query}`, {});
	return { body: await res.json() };
}

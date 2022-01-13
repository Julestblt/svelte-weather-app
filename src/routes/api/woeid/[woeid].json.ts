import { useFetch } from '$lib/api';
import { getMetaWeatherBaseUrl } from '$lib/utils/env.variables';

export async function get({ params }) {
	const { woeid } = params;
	const res = await useFetch('GET', `${getMetaWeatherBaseUrl}/${woeid}`, {});
	return { body: await res.json() };
}

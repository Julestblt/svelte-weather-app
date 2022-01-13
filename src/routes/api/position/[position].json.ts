import { useFetch } from '$lib/api';
import { getMetaWeatherBaseUrl } from '$lib/utils/env.variables';

export async function get({ params }) {
	const { position } = params;
	const res = await useFetch('GET', `${getMetaWeatherBaseUrl}/search/?lattlong=${position}`, {});
	return { body: await res.json() };
}

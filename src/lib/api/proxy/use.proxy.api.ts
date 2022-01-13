import { useProxy } from './';
import type { Location } from '$lib/types';

export const useProxyAPI = {
	useQuery: (query: string) => useProxy('GET', `query/${query}.json`),
	useLocation: ({ lat, lng }: Location) => useProxy('GET', `position/${lat},${lng}.json`),
	useWoeid: (woeid: number) => useProxy('GET', `woeid/${woeid}.json`)
};

<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import { debounce } from '$lib/utils/debounce';
	import { createEventDispatcher } from 'svelte';
	import { useProxyAPI } from '$lib/api/proxy';
	import { setSelectedLocation, setQueryResults, queryResults } from '$lib/stores/';
	const { useQuery } = useProxyAPI;
	const dispatch = createEventDispatcher();

	export let hide: boolean = true;
	let search: string = '';

	const closeHandler = () => dispatch('closeMenu');
	const debounceFindLocalities = debounce(() => findLocalities());

	const findLocalities = async () => {
		if (search.length === 0) setQueryResults([]);
		else setQueryResults(await useQuery(search));
	};

	const selectedLocality = (woeid: number) => {
		setSelectedLocation(woeid);
		setQueryResults([]);
		search = '';
		closeHandler();
	};

	//$: if (hide || !hide) document?.body.classList.toggle('fixed');
</script>

{#if !hide}
	<section class="absolute top-0 z-50 bg-[#1E213A] h-screen w-screen">
		<div class="inline-block w-full">
			<button on:click={closeHandler} class="float-right material-icons text-white p-2"
				>close</button
			>
		</div>
		<section class="inline-flex items-center flex-col w-full">
			<div class="w-[90%] inline-flex relative ">
				<span class="material-icons absolute left-2 top-3 text-[#616475]">search</span>
				<input
					bind:value={search}
					on:input={debounceFindLocalities}
					class="bg-transparent border border-[#616475] mr-2 w-full pl-10 text-white"
					placeholder="search location"
				/>
				<Button backgroundColor="bg-[#3C47E9]">Search</Button>
			</div>
			<div class="w-[90%] inline text-white mt-7">
				{#each $queryResults as { title, woeid }}
					<button
						on:click={() => selectedLocality(woeid)}
						class="hover:border border-[#616475] w-full py-4 px-3 text-left">{title}</button
					>
				{/each}
			</div>
		</section>
	</section>
{/if}

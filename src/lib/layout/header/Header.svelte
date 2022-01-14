<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import { getNavigatorGeoLocation } from '$lib/utils/navigator.location';
	import { weatherState, todayWeather, isLoading } from '$lib/stores/';
	import { imagePath } from '$lib/utils/weather.images';
	import { getFormatedDate } from '$lib/utils/date';
	import Loader from '$lib/components/loader/Loader.svelte';
	import Menu from './menu/Menu.svelte';

	let hideMenu: boolean = true;

	const menuHandler = () => (hideMenu = !hideMenu);
</script>

<header class="bg-[#1E213A] h-screen md:h-auto md:w-[40%]">
	<section class="flex justify-between pt-4 px-3">
		<Button on:click={menuHandler} backgroundColor="bg-[#6E707A]" textColor="text-[#E7E7EB]"
			>Search for places</Button
		>
		<Button
			on:click={getNavigatorGeoLocation}
			icon="gps_fixed"
			backgroundColor="bg-[#6E707A]"
			textColor="text-[#E7E7EB]"
			iconAlone={true}
			rounded="rounded-full"
		/>
	</section>
	<Menu on:closeMenu={menuHandler} hide={hideMenu} />
	{#if $todayWeather}
		<section class="text-white text-center">
			<div class="flex justify-center mt-8">
				<img
					src={imagePath[$todayWeather.weather_state_abbr].path}
					alt={$todayWeather.weather_state_name}
				/>
			</div>
			<div class="font-medium">
				<p class="text-[144px] ">
					{$todayWeather.the_temp.toFixed()}<span class="text-[48px] text-[#A09FB1]">°C</span>
				</p>
			</div>
			<div>
				<p class="text-[#A09FB1] text-[36px] font-semibold">{$todayWeather.weather_state_name}</p>
			</div>
			<div class="mt-5">
				<p class="text-[#88869D] text-[18px] font-medium">
					Today • {getFormatedDate($todayWeather.applicable_date)}
				</p>
			</div>
			<div class="text-[#88869D] mt-5">
				<p class="flex items-center justify-center">
					<span class="material-icons mr-1">place</span>{$weatherState.title}
				</p>
			</div>
		</section>
	{:else if $isLoading}
		<div class="flex items-center justify-center h-full">
			<Loader width="w-12" height="h-12" />
		</div>
	{:else}
		<div class="w-full flex justify-center items-center pt-10">
			<h1 class="text-white text-3xl text-center font-bold">Select a city or turn on location</h1>
		</div>
	{/if}
</header>

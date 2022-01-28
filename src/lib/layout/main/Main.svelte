<script lang="ts">
	import { upcomingWeather, todayWeather } from '$lib/stores/';
	import { getFormatedDate } from '$lib/utils/date';
	import { imagePath } from '$lib/utils/weather.images';
	import SmallCard from '$lib/components/cards/SmallCard.svelte';
	import Card from '$lib/components/cards/Card.svelte';
	import Progress from '$lib/components/progress/Progress.svelte';
</script>

<main class="bg-[#100E1D] text-white pt-12 w-full md:w-[60%]">
	{#if $upcomingWeather}
		<section class="grid grid-cols-2 px-10 gap-6 md:grid-cols-3 lg:grid-cols-5 md:p-[100px]">
			{#each $upcomingWeather as { applicable_date, weather_state_abbr, max_temp, min_temp }}
				<SmallCard
					title={getFormatedDate(applicable_date)}
					src={imagePath[weather_state_abbr].path}
					maxDegree={max_temp.toFixed()}
					minDegree={min_temp.toFixed()}
				/>
			{/each}
		</section>
		<section class="px-4 md:px-[100px]">
			<h2 class="text-[24px] mt-5 md:mt-0 font-bold md:mb-2">Today's Hightlights</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
				<Card title="Wind status">
					<p class="text-[64px] font-bold">
						{$todayWeather.wind_speed.toFixed()}<span class="text-[36px] font-normal">mph</span>
					</p>
				</Card>
				<Card title="Humidity">
					<p class="text-[64px] font-bold">
						{$todayWeather.humidity}<span class="text-[36px] font-normal">%</span>
					</p>
					<Progress value={$todayWeather.humidity} min="0" max="100" />
				</Card>
				<Card title="Visibility">
					<p class="text-[64px] font-bold">
						{$todayWeather.visibility.toFixed(1).replace('.', ',')}<span
							class="text-[36px] font-normal ml-5">miles</span
						>
					</p>
				</Card>
				<Card title="Air Pressure">
					<p class="text-[64px] font-bold">
						{$todayWeather.air_pressure}<span class="text-[36px] font-normal ml-5">mb</span>
					</p>
				</Card>
			</div>
		</section>
	{/if}
</main>

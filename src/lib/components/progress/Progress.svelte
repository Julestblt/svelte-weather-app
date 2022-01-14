<script lang="ts">
	export let min: string = '0';
	export let max: string = '100';
	export let value: number;
</script>

<div class="flex justify-between w-[75%]">
	<span class="text-[12px] text-[#A09FB1]">{min}</span>
	<span class="text-[12px] text-[#A09FB1]">{parseInt(max) / 2}</span>
	<span class="text-[12px] text-[#A09FB1]">{max}</span>
</div>
<progress class="h-2 rounded-full w-[75%]" {min} {max} {value} />
<span class="flex justify-end w-[75%] text-[12px] text-[#A09FB1]">%</span>

<style>
	progress::-webkit-progress-value {
		background-color: #ffec65;
	}

	progress::-webkit-progress-bar {
		background-color: #e7e7eb;
	}

	progress[value]::-webkit-progress-value,
	progress[value]::-webkit-progress-bar {
		border-radius: 100px;
	}
</style>

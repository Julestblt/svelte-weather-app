<script lang="ts">
	export let title: string = '';

	export let src: string;

	export let maxDegree: string = null;

	export let minDegree: string = null;
</script>

<section class="flex items-center justify-between flex-col bg-[#1E213A] p-4">
	<p>{title}</p>
	<img {src} alt="" />
	<div class="flex justify-around w-full">
		<p>{maxDegree}°C</p>
		<p>{minDegree}°C</p>
	</div>
</section>

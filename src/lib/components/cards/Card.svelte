<script lang="ts">
	export let title: string;
</script>

<section class="bg-[#1E213A] w-full flex flex-col items-center justify-between p-4 my-6 md:m-0">
	<p class="text-[16px]">{title}</p>
	<slot />
</section>

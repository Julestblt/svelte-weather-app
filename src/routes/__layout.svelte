<script lang="ts">
	import '../app.css';
	import { initLocation } from '$lib/utils/navigator.location';
	import { onMount } from 'svelte';
	onMount(() => initLocation());
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

<slot />

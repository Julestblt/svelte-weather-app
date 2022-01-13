<script lang="ts">
	import { cn } from '$lib/utils/classnames';
	import type { Rounded } from '$lib/types/tailwind.types';

	type Position = 'left' | 'right';

	/**
	 * Material design icon.
	 */
	export let icon: string = null;
	/**
	 * Position of the icon.
	 */
	export let position: Position = 'left';
	/**
	 * Color of the background.
	 */
	export let backgroundColor: string = 'bg-gray-500';
	/**
	 * Color of the text.
	 */
	export let textColor: string = 'text-white';
	/**
	 * Make icon the only content of the button.
	 */
	export let iconAlone: boolean = false;
	/**
	 * Make the button borders rounded.
	 */
	export let rounded: Rounded = null;

	let className: string = '';
	export { className as class };

	const baseClass: string = 'flex items-center';

	$: componentClass = cn(
		baseClass,
		backgroundColor,
		textColor,
		className,
		rounded && rounded,
		'py-3 px-3'
	);
</script>

<button on:click class={componentClass}>
	{#if iconAlone && icon}
		<i class="material-icons">{icon}</i>
	{:else}
		{#if icon && position === 'left'}
			<i class="material-icons mr-2">{icon}</i>
		{/if}
		<slot />
		{#if icon && position === 'right'}
			<i class="material-icons mr-2">{icon}</i>
		{/if}
	{/if}
</button>

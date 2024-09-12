<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	export let element: HTMLElement;

	export let color: string = '';
	export let title: string = '';
	export let image: string | undefined = undefined;
	export let productLink: string = '';
	
</script>

<div
	class="w-full h-full absolute cursor-grab ease-in-out rounded-xl touch-none select-none bg-[#f2f2f2] border-2 border-dark_bg {color} overflow-hidden flex justify-center mt-6 mb-6"
	bind:this={element}
>
{#key image}
{#if image}
	<img class="w-full h-full rounded-xl object-scale-down" src={image} alt={title} />
{/if}
{/key}
	<div class="absolute inset-0 bg-white rounded-b-xl"></div>
	<div class="p-4 pb-8 absolute bottom-0 max-w-8/12">
		<div class="flex flex-col justify-start col-span-2">
			<a href={productLink} target="_blank">
				<h3 class="text-xl md:text-2xl p-3 rounded-3xl bg-dark_bg  text-bright_text font-semibold text-wrap flex justify-center">{title}</h3> 
			</a>
		</div>
	</div>
</div>

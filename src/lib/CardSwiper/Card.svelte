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
	<div class="p-4 absolute bottom-0 w-full">
		<div class="grid grid-cols-3">
			<div class="flex flex-col justify-start col-span-2">
				<a href={productLink} target="_blank">
					<h3 class="text-2xl font-semibold text-wrap text-dark_text underline ">{title}</h3> 
				</a>
			</div>
		</div>
	</div>
</div>

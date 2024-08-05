<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	export let element: HTMLElement;

	export let color: string = '';
	export let title: string = '';
	export let description: string = '';
	export let image: string | undefined = undefined;
	export let imageArr: Array<object> = []; 
	export let productLink: string = '';
	
</script>

<div
	class="w-full h-full absolute cursor-grab ease-in-out rounded-xl touch-none select-none bg-[#f2f2f2] border-2 border-black {color} overflow-hidden"
	bind:this={element}
>
	{#key image}
		{#if image}
			<div class="grid grid-cols-2 w-full h-5/6">
				{#each imageArr.slice(0, 4) as imgObj}
				<div class="w-full h-auto">
					<img class="rounded-xl object-scale-down aspect-square" src={imgObj['publicUrl']} alt={title} />
				</div>
				{/each}
			</div>
		{/if}
	{/key}
	<div class="absolute inset-0 bg-gradient-to-t from-white/80 via-white/0 rounded-b-xl"></div>
	<div class="p-4 absolute bottom-0 w-full">
		{#if parseInt(description) > 4}
		<div class="grid grid-cols-3">
			<div class="flex flex-col justify-start col-span-2">
				<a href={productLink} target="_blank">
					<h3 class="text-lg font-semibold text-wrap text-dark_text">{title}</h3> 
				</a>
				<p>{description} items</p>
			</div>
			<div class="flex items-center justify-center bg-slate-500 rounded-lg text-bright_text text-3xl backdrop-blur-md">
				<p>+{parseInt(description)-4}</p>
			</div>
		</div>
		{:else}
		<div class="flex items-center flex-col">
			<a href={productLink}>
				<h3 class="text-3xl font-semibold pb-4 text-dark_text">{title}</h3>
			</a>
			{#if description == '1'}
			<p>{description} item</p>
			{:else}
			<p>{description} items</p>
			{/if}
		</div>
		{/if}
	</div>
</div>

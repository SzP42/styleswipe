<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	export let element: HTMLElement;

	export let color: string = '';
	export let title: string = '';
	export let image: string | undefined = undefined;
	export let productLink: string = '';
</script>
	<div class="w-full h-full absolute cursor-grab ease-in-out rounded-xl touch-none select-none bg-[#ffffff] border-2 border-dark_bg {color} overflow-hidden flex justify-center items-center mt-6 mb-6" bind:this={element}>
		<div class="flex flex-col rounded-xl overflow-hidden w-full h-full max-w-[90%] max-h-[90%]">
			<div class="flex-grow flex items-center justify-center" style="height: 90%;">
				<img class="max-w-full max-h-full object-contain" src={image} alt={title} />
			</div>
			<div class="flex items-center justify-center p-4" style="height: 10%;">
					<h3 class="text-xl md:text-2xl p-3 rounded-3xl bg-dark_bg text-bright_text font-semibold text-center">
						{title}
					</h3> 
			</div>
		</div>
	</div>
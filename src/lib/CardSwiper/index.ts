export type CardData = {
	title?: string;
	color?: string;
	description?: string;
	image?: string;
	productLink?: string;
	setId?: string;
};

export type Direction = 'left' | 'right';

export { default as CardSwiper } from './CardSwiper.svelte';

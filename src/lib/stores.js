import { writable } from "svelte/store";

export const currentSetId = writable(undefined)

export const preloadedSets = writable([])
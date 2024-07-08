import * as universal from '../entries/pages/set/_setId_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/set/_setId_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/set/[setId]/+page.js";
export const imports = ["_app/immutable/nodes/5.CtgDMCzo.js","_app/immutable/chunks/scheduler._B5voGmU.js","_app/immutable/chunks/index.BJGwIB0l.js","_app/immutable/chunks/stores.qlhY2Ac4.js","_app/immutable/chunks/entry.CtAQ9h6v.js","_app/immutable/chunks/supabaseClient.C2q4Lq3a.js","_app/immutable/chunks/public.B7ljx6MO.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js"];
export const stylesheets = [];
export const fonts = [];

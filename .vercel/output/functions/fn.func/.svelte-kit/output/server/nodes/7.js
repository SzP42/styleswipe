import * as server from '../entries/pages/welcome/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/welcome/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/welcome/+page.server.js";
export const imports = ["_app/immutable/nodes/7.CMPnrNt5.js","_app/immutable/chunks/scheduler._B5voGmU.js","_app/immutable/chunks/index.BJGwIB0l.js","_app/immutable/chunks/entry.CtAQ9h6v.js","_app/immutable/chunks/supabaseClient.C2q4Lq3a.js","_app/immutable/chunks/public.B7ljx6MO.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js"];
export const stylesheets = ["_app/immutable/assets/7.B4oWdEb4.css"];
export const fonts = [];

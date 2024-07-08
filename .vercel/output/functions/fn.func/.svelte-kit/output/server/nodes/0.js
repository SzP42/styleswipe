import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.BJzi4fn8.js","_app/immutable/chunks/public.B7ljx6MO.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler._B5voGmU.js","_app/immutable/chunks/index.BJGwIB0l.js","_app/immutable/chunks/entry.CtAQ9h6v.js"];
export const stylesheets = [];
export const fonts = [];

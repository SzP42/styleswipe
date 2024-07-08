import * as server from '../entries/pages/app/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/app/+page.server.js";
export const imports = ["_app/immutable/nodes/3.BcnhP0-c.js","_app/immutable/chunks/scheduler._B5voGmU.js","_app/immutable/chunks/index.BJGwIB0l.js","_app/immutable/chunks/entry.CtAQ9h6v.js"];
export const stylesheets = [];
export const fonts = [];

import { c as create_ssr_component } from "../../chunks/ssr.js";
import "../../chunks/client.js";
import "../../chunks/supabaseClient.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body data-svelte-h="svelte-1tfnbo4"><h1 class="text-3xl font-bold underline">Welcome to StyleSwipe</h1> <p><a href="/login">Click here to log in</a></p> </body>`;
});
export {
  Page as default
};

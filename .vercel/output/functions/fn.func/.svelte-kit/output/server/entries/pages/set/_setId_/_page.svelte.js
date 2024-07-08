import { c as create_ssr_component, b as subscribe, e as escape } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/supabaseClient.js";
import "../../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const setId = $page.params.setId;
  $$unsubscribe_page();
  return `<body><h1>name of set ${escape(setId)}</h1> <img alt="${"image carousel of set " + escape(setId, true)}" src=""> <p>price of set ${escape(setId)}</p> <p data-svelte-h="svelte-1bu5ki3">stripe window on the right</p> <button data-svelte-h="svelte-1o6nli0">log out</button></body>`;
});
export {
  Page as default
};

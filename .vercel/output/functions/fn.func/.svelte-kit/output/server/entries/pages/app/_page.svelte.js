import { c as create_ssr_component, e as escape, d as add_attribute, f as createEventDispatcher, v as validate_component, m as missing_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { element } = $$props;
  let { color = "" } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { image = void 0 } = $$props;
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `<div class="${"w-full h-full absolute cursor-grab ease-in-out rounded-xl touch-none select-none border border-black bg-white " + escape(color, true)}"${add_attribute("this", element, 0)}>${image ? `<img class="w-full h-full rounded-xl object-cover"${add_attribute("src", image, 0)}${add_attribute("alt", title, 0)}>` : ``} <div class="absolute inset-0 bg-gradient-to-t from-white/80 via-white/0 rounded-b-xl"></div> <div class="p-4 absolute bottom-0 w-full flex justify-center"><div class="flex items-center flex-col"><h3 class="text-3xl font-semibold pb-4">${escape(title)}</h3> <p>${escape(description)}</p></div></div></div>`;
});
const CardSwiper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  let container;
  let card1, card2;
  let card1Data, card2Data;
  let cardIndex = 0;
  let topCard;
  let currentZ = 1e5;
  const cardSwiped = (el, velocity, movement) => {
    el.classList.add("transition-transform", "duration-300");
    let direction = movement[0] > 0 ? "right" : "left";
    let data = el === card1 ? card1Data : card2Data;
    dispatch("swiped", {
      direction,
      element: el,
      data,
      index: cardIndex - 2
    });
    thresholdPassed = movement[0] > 0 ? 1 : -1;
    let moveOutWidth = document.body.clientWidth;
    let endX = Math.max(Math.abs(velocity[0]) * moveOutWidth, moveOutWidth);
    let toX = movement[0] > 0 ? endX : -endX;
    let endY = Math.abs(velocity[1]) * moveOutWidth;
    let toY = movement[1] > 0 ? endY : -endY;
    let rotate = movement[0] * 0.03 * (movement[1] / 80);
    el.style.transform = `translate(${toX}px, ${toY + movement[1]}px) rotate(${rotate}deg)`;
    setTimeout(
      async () => {
        thresholdPassed = 0;
        if (el === card1) {
          card1Data = {};
          card1Data = await cardData(cardIndex++);
          topCard = card2;
        } else {
          card2Data = {};
          card2Data = await cardData(cardIndex++);
          topCard = card1;
        }
        currentZ--;
        el.style.zIndex = currentZ.toString();
        el.classList.remove("transition-transform", "duration-300");
        el.style.transform = "";
      },
      350
    );
  };
  const swipe = (direction = "right") => {
    if (thresholdPassed !== 0)
      return;
    let dir = direction === "left" ? -1 : 1;
    cardSwiped(topCard, [dir, 0.1], [dir, 1]);
  };
  let { cardData } = $$props;
  let { minSwipeDistance = 0.5 } = $$props;
  let { minSwipeVelocity = 0.5 } = $$props;
  let { arrowKeys = true } = $$props;
  let { thresholdPassed = 0 } = $$props;
  if ($$props.swipe === void 0 && $$bindings.swipe && swipe !== void 0)
    $$bindings.swipe(swipe);
  if ($$props.cardData === void 0 && $$bindings.cardData && cardData !== void 0)
    $$bindings.cardData(cardData);
  if ($$props.minSwipeDistance === void 0 && $$bindings.minSwipeDistance && minSwipeDistance !== void 0)
    $$bindings.minSwipeDistance(minSwipeDistance);
  if ($$props.minSwipeVelocity === void 0 && $$bindings.minSwipeVelocity && minSwipeVelocity !== void 0)
    $$bindings.minSwipeVelocity(minSwipeVelocity);
  if ($$props.arrowKeys === void 0 && $$bindings.arrowKeys && arrowKeys !== void 0)
    $$bindings.arrowKeys(arrowKeys);
  if ($$props.thresholdPassed === void 0 && $$bindings.thresholdPassed && thresholdPassed !== void 0)
    $$bindings.thresholdPassed(thresholdPassed);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` <div class="w-full h-full"><div class="w-full h-full relative hidden z-0"${add_attribute("this", container, 0)}>${validate_component(Card || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign({}, card1Data, { element: card1 }),
      {
        element: ($$value) => {
          card1 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Card || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign({}, card2Data, { element: card2 }),
      {
        element: ($$value) => {
          card2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if (data["error"]) {
    console.error(data["error"]);
  }
  const { supabase } = data;
  let { sets } = data;
  let cardData = async (index) => {
    let clothesObj = await getNextSet();
    return {
      title: clothesObj["name"],
      description: clothesObj["price"],
      image: clothesObj["clothes"][1]["publicUrl"]
    };
  };
  async function getNextSet() {
    let clothesArr = [];
    const resp = await supabase.rpc("get_next_set");
    const setId = resp["data"];
    if (!setId) {
      console.log(resp["error"]);
    }
    const { data: data2, error } = await supabase.from("sett").select().eq("set_id", setId);
    if (!data2) {
      console.log(error);
    }
    const name = data2[0]["name"];
    const price = data2[0]["price"];
    const images = await supabase.storage.from(setId).list();
    const imageData = images["data"];
    if (!imageData) {
      console.log(images["error"]);
    }
    for (let i = 0; i < imageData.length; i++) {
      let filepath = imageData[i]["name"];
      const { data: { publicUrl } } = supabase.storage.from(setId).getPublicUrl(filepath);
      const clothesData = { id: i, publicUrl, filepath };
      clothesArr.push(clothesData);
    }
    const clothesObj = { clothes: clothesArr, name, setId, price };
    return clothesObj;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="h-screen w-screen" align="center">${validate_component(CardSwiper, "CardSwiper").$$render($$result, { cardData, minSwipeDistance: 0.25, sets }, {}, {})}</div> <button data-svelte-h="svelte-1o6nli0">log out</button>`;
});
export {
  Page as default
};

const load = async (event) => {
  const { supabase } = event.locals;
  try {
    const threeSetsArr = [];
    async function getNextSet() {
      let clothesArr = [];
      const resp = await supabase.rpc("get_next_set");
      const setId = resp["data"];
      if (!setId) {
        console.log(resp["error"]);
      }
      const { data, error } = await supabase.from("sett").select().eq("set_id", setId);
      if (!data) {
        console.log(error);
      }
      const name = data[0]["name"];
      const price = data[0]["price"];
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
    for (let i = 0; i < 3; i++) {
      let set = await getNextSet();
      threeSetsArr.push(set);
    }
    return { sets: threeSetsArr, error: null };
  } catch (error) {
    console.log(error);
    return { sets: null, supabase, error };
  }
};
export {
  load
};

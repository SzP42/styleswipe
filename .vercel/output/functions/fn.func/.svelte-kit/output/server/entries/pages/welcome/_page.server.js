import { s as supabase } from "../../../chunks/supabaseClient.js";
import { f as fail } from "../../../chunks/index.js";
const actions = {
  setSurveyData: async ({ request }) => {
    const formData = await request.formData();
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
    const { data, error } = await supabase.from("style_prefs").insert(formDataObj).select();
    console.log(error);
    if (!error) {
      console.log(data);
      return { success: true };
    } else {
      return fail(500);
    }
  }
};
export {
  actions
};

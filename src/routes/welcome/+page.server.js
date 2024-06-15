import { supabase } from "$lib/supabaseClient.js"

export const load = async (serverLoadEvent) => {
    try {
        let sess = await supabase.auth.getSession()
        if (sess['data']['session']) {
            
        }
            } catch (err) {
                console.error(err)
            }
}

export const actions = {
    setSurveyData: async ({ request }) => {
        const formData = await request.formData()
        const {data, error }= await supabase.auth.getSession()
        const user = data.user.id 
        console.log(data)
        
        return { success: true}
    }
}
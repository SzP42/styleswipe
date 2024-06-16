import { createClient } from '@supabase/supabase-js'
import { fail } from '@sveltejs/kit'

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zcXFmZW16dXRhb3dma2pseW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzMzkyMTcsImV4cCI6MjAzMDkxNTIxN30.AkhcJ04st3OQ7QYz7224YIcdZeynLYO6aKFPw_Jsasg" 
const SUPABASE_URL="https://osqqfemzutaowfkjlymx.supabase.co"

export const actions = {
    setSurveyData: async ({ request }) => {

        const formData = await request.formData()
        const formDataObj = Object.fromEntries(formData.entries())

        const jwt = formDataObj['jwt']
        delete formDataObj['jwt']
        console.log(formDataObj)

        const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zcXFmZW16dXRhb3dma2pseW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzMzkyMTcsImV4cCI6MjAzMDkxNTIxN30.AkhcJ04st3OQ7QYz7224YIcdZeynLYO6aKFPw_Jsasg" 
        const SUPABASE_URL="https://osqqfemzutaowfkjlymx.supabase.co"

        const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
            global: {
              headers: {
                Authorization: jwt
              },
            },
          });

        const { data, error } = await supabase
        .from('style_prefs')
        .insert(formDataObj)
        .select()
        
        if (!error) {
            console.log(data)
            return {success: true}
        } else {
            return fail(500)
        }
        
    }
}
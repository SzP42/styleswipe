let supabase

export const load = (event) => {
     ({ supabase } = event.locals)
}

export const actions = {
    default: async ({ request }) => {
      const formData = await request.formData();

      const firstname = formData.get("firstname")
      const lastname = formData.get("lastname")
      const jobtitle = formData.get("jobtitle")
      const email = formData.get('email');
      const company = formData.get("company")
      const message = formData.get("message")

        const { error } = await supabase.from('messages').insert({ firstname, lastname, jobtitle, email, company, message})

        if(error) {
            console.log(error)
            return {message: "An error has occured, please try again later"}
        }

      return {message: "Successfully sent message"}
      
    }
  };
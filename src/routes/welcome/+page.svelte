<script>
	import { goto } from "$app/navigation";
    import { supabase } from "$lib/supabaseClient.js"
	import Form from "./form.svelte";
    import { onMount } from "svelte";

    let userId
    let jwt 


async function logout() {
    const { error } = await supabase.auth.signOut() 
    goto("/")
}

onMount(async () => { 
    try {
        const sessData = await supabase.auth.getSession()
        const { user } = sessData['data']['session']
        userId = user.id
        jwt = sessData['data']['session']['access_token']
        const { data , error } = await supabase
        .from('style_prefs')
        .select('completed_form')
        .eq('id', user.id)
        console.log(data)
        if (data) {

        }
    } catch (error) {
        console.error(error)
    }
})

</script>

<body>
<div style="text-align:center">
    <h1><b>Welcome to StyleSwipe</b></h1>
    <h3>Let's start by telling us a little bit about your taste</h3>

    <Form {userId}, {jwt}/>

<br>
</div>
<button on:click={logout}>Log out</button>
</body>


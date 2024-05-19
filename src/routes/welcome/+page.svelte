<script>
	import { goto } from "$app/navigation";
    import { supabase } from "$lib/supabaseClient.js"
	import Form from "./form.svelte";

async function logout() {
    const { error } = await supabase.auth.signOut() 
    goto("/")
}


</script>

<body>
<div style="text-align:center">
    <h1><b>Welcome to StyleSwipe</b></h1>
    <h3>Let's start by telling us a little bit about your taste</h3>

    <Form />

<br>
</div>
<button on:click={logout}>Log out</button>
</body>


<script>
	import { goto } from "$app/navigation";
    import { supabase } from "$lib/supabaseClient.js"
    import { onMount } from "svelte";
    import "../app.css"

    // export let data
    
    onMount( () => {supabase.auth.getSession()
    .then(response => {
        if (response["data"]["session"]) {
            console.log(response["data"]["session"])
            goto("/welcome")
        }
    })})
</script>
<body>
<h1 class="text-3xl font-bold underline">Welcome to StyleSwipe</h1>

<p><a href="/login">Click here to log in</a></p>
</body>

<style lang="postcss">
    

</style>
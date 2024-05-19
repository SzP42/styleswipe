<script>
	import { goto } from "$app/navigation";
    import { supabase } from "$lib/supabaseClient.js"
    import { onMount } from "svelte";
    
    onMount( () => {supabase.auth.getSession()
    .then(response => {
        if (response["data"]["session"]) {
            goto("/welcome")
        }
    })})
</script>
<body>
<h1>Welcome to StyleSwipe</h1>

<p><a href="/login">Click here to log in</a></p>
</body>
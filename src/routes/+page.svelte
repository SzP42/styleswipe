<script>
	import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import "../app.css"

    export let data

    const { supabase } = data

    onMount( async () => {
        const { data, error } = await supabase.auth.getSession()
        if (data['session']) {goto('/app')}
    })
</script>
<body>
<h1 class="text-3xl font-bold underline">Welcome to StyleSwipe</h1>

<p><a href="/login">Click here to log in</a></p>

</body>

<style>
    

</style>
<script>
    import { page } from "$app/stores";
    import { supabase } from "$lib/supabaseClient.js"
    import { goto } from "$app/navigation";

    const setId = $page.params.setId

    async function logout() {
    const { error } = await supabase.auth.signOut() 
    goto("/")
  }


</script>

<body>
    <h1>name of set {setId}</h1>

    <img alt='image carousel of set {setId}' src="">

    <p>price of set {setId}</p>

    <p>stripe window on the right</p>

    <button on:click={logout}>log out</button>

</body>

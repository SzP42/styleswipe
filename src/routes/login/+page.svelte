<script>
    // import { supabase } from "$lib/supabaseClient.js"
	import { goto } from "$app/navigation"
    import { onMount } from "svelte";

    export let data 
    const { supabase } = data
    
    onMount( async () => {
        const { data, error } = await supabase.auth.getSession()
        if (data) {goto('/app')}})

    let email = ""
    let password = ""

    async function userLogIn(useremail, userpassword) {
        try {
        const { data, error } = await supabase.auth.signInWithPassword({
  email: useremail,
  password: userpassword,
        })
        if (!error) {
            goto('/app')
        } else {
            alert(error)
        }
    } catch (err) {
        alert(err)
        console.error(err)
    }
}

async function handleSignInWithGoogle() {
await supabase.auth.signInWithOAuth({
  provider: "google",
  options: {
    redirectTo: `/auth/callback`,
  },
})}

</script>

<body>

    <h1 style="text-align:center">Welcome to StyleSwipe</h1>
    
    <div class="signup_panel">
    <h3>Log in</h3>
    <form>
        <label for="email">E-mail: </label>
        <input type="email" id="email" bind:value={email}><br><br>
        <label for="password">Password: </label>
        <input type="password" id="password" bind:value={password}><br><br>
        <button on:click={() => userLogIn(email, password)}>Enter StyleSwipe</button>
    </form>
    <p>Or</p>
    <button on:click={handleSignInWithGoogle}> Sign in with Google </button>
    
    
    <p>You Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
    
    
    </body>
    <style>
    body {
        font-family: Arial, Helvetica, sans-serif;
    }
    .signup_panel {
        text-align: center;
    }
    
    </style>
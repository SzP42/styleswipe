<script>
    // import { supabase } from "$lib/supabaseClient.js"
	import { goto } from "$app/navigation"
    import { onMount } from "svelte";

    export let data 
    const { supabase } = data
    
    onMount( async () => {
        const { data, error } = await supabase.auth.getSession()
        if (data['session']) {goto('/app')}})

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

<body class="bg-bright_bg">
    <div class="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-dark_bg rounded-2xl shadow-xl min-h-screen font-serif text-bright_text">
        <img src="src\lib\images\stsw_transparent-bright.png" alt="stsw" class="flex mx-auto h-40">
        <div class="flex flex-col justify-center mx-auto gap-3">
            <h3 class="flex justify-center mb-3 text-2xl">Log in</h3>
            <form>
                <div class="flex flex-col mb-5">
                    <label for="email">E-mail: </label>
                    <input type="email" id="email" bind:value={email} placeholder="xyz@gmail.com" required autocomplete="email" class="rounded-lg bg-input_bg focus:bg-special_state_bg text-input_text placeholder:text-slate-500 placeholder:text-opacity-60 pl-4">
                </div>
                <div class="flex flex-col mb-5">
                    <label for="password">Password: </label>
                    <input type="password" id="password" bind:value={password} required autocomplete="current-password" class="rounded-lg bg-input_bg focus:bg-special_state_bg text-input_text pl-4">
                </div>
                <div class="flex justify-center">
                    <button on:click={() => userLogIn(email, password)} class="rounded-lg bg-input_bg hover:bg-special_state_bg text-input_text p-1">Enter StyleSwipe</button>
                </div>
            </form>
            <p class="flex justify-center mt-4">Or</p>
            <button on:click={handleSignInWithGoogle} class="hover:underline"> Sign in with Google </button>
            <hr>
            <p>You Don't have an account? <a href="/signup" class="hover:underline">Sign Up</a></p>
        </div>
    </div>
    
    </body>
    
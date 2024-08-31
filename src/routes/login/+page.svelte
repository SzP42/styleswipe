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
    <div class="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto px-8 md:px-10 2xl:px-12 3xl:px-14 bg-dark_bg md:rounded-2xl shadow-xl min-h-screen text-bright_text">
        <img src="/images/stsw_transparent-bright.png" alt="stsw" class="flex mx-auto size-60 pb-0">
        <div class="flex flex-col justify-center mx-auto gap-3 pt-0">
            <h3 class="flex justify-center -mt-8 mb-3 text-3xl font-medium">Log in</h3>

            <form>
                <div class="flex flex-col mb-5">
                    <label for="email">E-mail: </label>
                    <input type="email" id="email" bind:value={email} placeholder="xyz@gmail.com" required autocomplete="email" class="rounded-lg bg-input_bg focus:bg-special_state_bg text-input_text placeholder:text-slate-500 placeholder:text-opacity-60 pl-4">
                </div>
                <div class="flex flex-col mb-5">
                    <label for="password">Password: </label>
                    <input type="password" id="password" bind:value={password} required autocomplete="new-password" class="rounded-lg bg-input_bg focus:bg-special_state_bg text-input_text pl-4">
                </div>
                <div class="flex justify-center">
                    <button on:click={() => userLogIn(email, password)}  class="line-clamp-2 mb-4 text-muted border-2 border-black rounded-xl bg-input_bg text-dark_text hover:bg-dark_bg hover:text-bright_text p-2 text-lg">Enter StyleSwipe</button>
                </div>
            </form>

            <p class="flex justify-center mt-4 text-lg">Or</p>
            <button on:click={handleSignInWithGoogle} class="hover:underline p-0 text-lg"> Sign up with Google </button>
            <hr>
            <p class=" text-lg">You Don't have an account? <a href="/signup" class="text-lg hover:underline">Sign Up</a></p>
        </div>
    </div>
    
    </body>
    
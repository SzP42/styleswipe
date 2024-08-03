<script>

let email = ""
let password = ""

export let data

const { supabase } = data

function checkifPasswordIsOK(passW) {
    // ensures that there's at least one digit, one lowercase, one uppercase, and one symbol in the string and is at least 6 characters long
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*/<>,.+-=~$ß]).{6,}$/;
    return pattern.test(passW);
}

function checkIfEmailIsOk(emailAdd) {
    // compliant with RFC 5322
    let pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/
    return pattern.test(emailAdd)
}

async function userSignUp(useremail, userpassword) {
    const isEmailOk = checkIfEmailIsOk(useremail) 
    if (!isEmailOk) {
        alert("please provide a valid email address")
    }
    // checks if the password matches the requirements 
    const isPasswordOk = checkifPasswordIsOK(userpassword) 
    if (!isPasswordOk) {
        alert("Password must be at least 6 characters long, must contain lowercase, uppercase, a number and a special character")
    } else {
        // uses the supabase sdk to sign up the user
        try { 
    const { data, error } = await supabase.auth.signUp({email: useremail, password: userpassword, options: {emailRedirectTo: "/app"}})
    alert(`Confirm your email! We've sent a confirmation email to ${email}`)
    return data
        } catch (err) {
            console.error(err)
        }
    }
}

async function handleSignInWithGoogle() {
await supabase.auth.signInWithOAuth({
  provider: "google",
  options: {
    redirectTo: `/auth/callback`,
  },
})

}
</script>



<body class="bg-bright_bg">
    <div class="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-dark_bg rounded-2xl shadow-xl min-h-screen font-serif text-bright_text">
        <img src="/images/stsw_transparent-bright.png" alt="stsw" class="flex mx-auto h-40">
        <div class="flex flex-col justify-center mx-auto gap-3">
            <h3 class="flex justify-center mb-3 text-2xl">Sign up</h3>

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
                    <button on:click={() => userSignUp(email, password)} class="rounded-lg bg-input_bg hover:bg-special_state_bg text-input_text p-1">Join StyleSwipe</button>
                </div>
            </form>

            <p class="flex justify-center mt-4">Or</p>
            <button on:click={handleSignInWithGoogle} class="hover:underline p-0"> Sign up with Google </button>
            <hr>
            <p>Already have an account? <a href="/login" class="hover:underline">Log in</a></p>
            </div>
        </div>
</body>

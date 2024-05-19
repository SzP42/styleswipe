<script>
import { supabase } from "$lib/supabaseClient.js"

let email = ""
let password = ""

function checkifPasswordIsOK(passW) {
    // ensures that there's at least one digit, one lowercase, one uppercase, and one symbol in the string and is at least 6 characters long
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*/<>,.+-=~$ß]).{6,}$/;
    return pattern.test(passW);
}

async function userSignUp(useremail, userpassword) {
    // checks if the password matches the requirements 
    const doesItPass = checkifPasswordIsOK(userpassword) 
    if (!doesItPass) {
        alert("Password must be at least 6 characters long, must contain lowercase, uppercase, a number and a special character")
    } else {
        // uses the supabase sdk to sign up the user
        try { 
    const { data, error } = await supabase.auth.signUp({email: useremail, password: userpassword, options: {emailRedirectTo: "/welcome"}})
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

<body>

<h1 style="text-align:center">Welcome to StyleSwipe</h1>

<div class="signup_panel">
<h3>Sign up</h3>
<form>
    <label for="email">E-mail: </label>
    <input type="email" id="email" bind:value={email}><br><br>
    <label for="password">Password: </label>
    <input type="password" id="password" bind:value={password}><br><br>
    <button on:click={() => userSignUp(email, password)}>Join StyleSwipe</button>
</form>
<p>Or</p>

<button on:click={handleSignInWithGoogle}> Sign up with Google </button>

<hr>
<p>Already have an account? <a href="/login">Log in</a></p>
</div>
</body>
<style lang="scss">
body {
    font-family: Arial, Helvetica, sans-serif;
}
.signup_panel {
    text-align: center;
}

</style>
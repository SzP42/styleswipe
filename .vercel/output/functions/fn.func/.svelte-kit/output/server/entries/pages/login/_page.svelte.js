import { c as create_ssr_component, d as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
const css = {
  code: "body.svelte-9r13oh{font-family:Arial, Helvetica, sans-serif}.signup_panel.svelte-9r13oh{text-align:center}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    // import { supabase } from \\"$lib/supabaseClient.js\\"\\r\\n\\timport { goto } from \\"$app/navigation\\"\\r\\n\\r\\n    export let data \\r\\n    const { supabase } = data\\r\\n    \\r\\n    let email = \\"\\"\\r\\n    let password = \\"\\"\\r\\n\\r\\n    async function userLogIn(useremail, userpassword) {\\r\\n        try {\\r\\n        const { data, error } = await supabase.auth.signInWithPassword({\\r\\n  email: useremail,\\r\\n  password: userpassword,\\r\\n        })\\r\\n        if (!error) {\\r\\n            goto('/app')\\r\\n        } else {\\r\\n            alert(error)\\r\\n        }\\r\\n    } catch (err) {\\r\\n        alert(err)\\r\\n        console.error(err)\\r\\n    }\\r\\n}\\r\\n\\r\\nasync function handleSignInWithGoogle() {\\r\\nawait supabase.auth.signInWithOAuth({\\r\\n  provider: \\"google\\",\\r\\n  options: {\\r\\n    redirectTo: \`/auth/callback\`,\\r\\n  },\\r\\n})}\\r\\n\\r\\n<\/script>\\r\\n\\r\\n<body>\\r\\n\\r\\n    <h1 style=\\"text-align:center\\">Welcome to StyleSwipe</h1>\\r\\n    \\r\\n    <div class=\\"signup_panel\\">\\r\\n    <h3>Log in</h3>\\r\\n    <form>\\r\\n        <label for=\\"email\\">E-mail: </label>\\r\\n        <input type=\\"email\\" id=\\"email\\" bind:value={email}><br><br>\\r\\n        <label for=\\"password\\">Password: </label>\\r\\n        <input type=\\"password\\" id=\\"password\\" bind:value={password}><br><br>\\r\\n        <button on:click={() => userLogIn(email, password)}>Enter StyleSwipe</button>\\r\\n    </form>\\r\\n    <p>Or</p>\\r\\n    <button on:click={handleSignInWithGoogle}> Sign in with Google </button>\\r\\n    \\r\\n    \\r\\n    <p>You Don't have an account? <a href=\\"/signup\\">Sign Up</a></p>\\r\\n    </div>\\r\\n    \\r\\n    \\r\\n    </body>\\r\\n    <style>\\r\\n    body {\\r\\n        font-family: Arial, Helvetica, sans-serif;\\r\\n    }\\r\\n    .signup_panel {\\r\\n        text-align: center;\\r\\n    }\\r\\n    \\r\\n    </style>"],"names":[],"mappings":"AA4DI,kBAAK,CACD,WAAW,CAAE,KAAK,CAAC,CAAC,SAAS,CAAC,CAAC,UACnC,CACA,2BAAc,CACV,UAAU,CAAE,MAChB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let email = "";
  let password = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<body class="svelte-9r13oh"><h1 style="text-align:center" data-svelte-h="svelte-1bkhk26">Welcome to StyleSwipe</h1> <div class="signup_panel svelte-9r13oh"><h3 data-svelte-h="svelte-1w7urql">Log in</h3> <form><label for="email" data-svelte-h="svelte-9iq5kf">E-mail:</label> <input type="email" id="email"${add_attribute("value", email, 0)}><br><br> <label for="password" data-svelte-h="svelte-14l7qdc">Password:</label> <input type="password" id="password"${add_attribute("value", password, 0)}><br><br> <button data-svelte-h="svelte-4oxqpd">Enter StyleSwipe</button></form> <p data-svelte-h="svelte-93986n">Or</p> <button data-svelte-h="svelte-1l25ijk">Sign in with Google</button> <p data-svelte-h="svelte-1wyt37o">You Don&#39;t have an account? <a href="/signup">Sign Up</a></p></div> </body>`;
});
export {
  Page as default
};

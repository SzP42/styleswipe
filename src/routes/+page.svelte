<script>
	import { goto } from "$app/navigation";
    import { supabase } from "$lib/supabaseClient.js"
    import { onMount } from "svelte";
    import "../app.css"

async function test() {
    

    const { data, error } = await supabase
  .storage
  .from('set_1')
  .list()

  console.log(data, error)
}

</script>
<body>
<h1 class="text-3xl font-bold underline">Welcome to StyleSwipe</h1>

<p><a href="/login">Click here to log in</a></p>

<button on:click={test}>Test</button>
</body>

<style lang="postcss">
    

</style>
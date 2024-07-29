<script>
    import { goto } from "$app/navigation";

    export let data

    let {setId} = data
    let {name} = data
    let {urlArr} = data
    let {price} = data
    const {supabase} = data

    console.log(urlArr)

    async function logout() {
    const { error } = await supabase.auth.signOut() 
    goto("/")
  }

</script>

<body>
  <div>
    <h1>{name}</h1>
    <h3>{price}</h3>
  </div>

  {#each urlArr as image}
    <img src={image} alt={name}>
  {/each}

    <button on:click={logout}>log out</button>

</body>

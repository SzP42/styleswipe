<script>
    import { goto } from "$app/navigation";

    export let data

    let {setId} = data
    let {name} = data
    let {urlArr} = data
    let {price} = data
    
    const {supabase} = data

    async function logout() {
    const { error } = await supabase.auth.signOut() 
    goto("/")
  }

  async function checkout() {
    console.log(setId)
    const data = await fetch(`./${setId}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ setId, name, urlArr, price })
    }).then(data => data.json())
    window.location.replace(data.url)
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
    <br>
    <button on:click={checkout}>Buy</button>

</body>

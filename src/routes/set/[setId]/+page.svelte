<script>
    import { goto } from "$app/navigation";
    import {browser} from "$app/environment"

    export let data

    let {setId} = data
    let {name} = data
    // using clothesDataArr for the clothes data, but it's convenient for stripe
    let {urlArr} = data
    let {price} = data
    let {brand} = data
    // brand logo url
    let {brandUrl} = data
    let {original_price} = data
    let {clothesDataArr} = data

    const {supabase} = data
    
    async function logout() {
    const { error } = await supabase.auth.signOut() 
    goto("/")
  }

  // not used anymore
  function collectSelectedSizes() {
      // Clear the array
      const selectedSizes = [];

      // Check if running on the client-side
      if (browser) {
          // Get all select elements
          const selects = document.querySelectorAll('select');

          // Loop through each select element and push the selected value to the array
          selects.forEach(select => {
              selectedSizes.push(select.value);
          });
      }

      return selectedSizes
      
  }

  async function checkout() {

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

<body class="font-serif bg-bright_bg">  
  <div class="flex justify-center pt-9 pb-9">
    <h1 class="bold text-5xl">{name}</h1>
  </div>

  <div class="grid grid-cols-3 items-center mb-12 ">
    {#if brandUrl}
      <img src={brandUrl} alt={brand} class="h-24 w-auto ml-4">
    {/if}
    <div class="flex justify-center">
      <p class="text-3xl text-green-500 italic">${price}</p>
    </div>
    {#if original_price}
      <div class="flex justify-end">
        <p class="text-xl text-red-500 line-through ml-auto mr-6">${original_price}</p>
      </div>
    {/if}
  </div>

  <div class="grid grid-cols-4 gap-4 justify-items-center mb-16">
    {#each urlArr as image}
    <div class="h-auto w-3/12">
      <img src={image} alt="piece" class="">
    </div>
    {/each}
  </div>


  <div class="flex flex-row justify-center my-20">
    <button on:click={checkout} class="w-3/4 bg-input_bg rounded-lg hover:bg-special_state_bg hover:ring-2 hover:ring-special_state_bg">Buy</button>
  </div>

  <div class="flex flex-row justify-center my-20">
    <button on:click={logout} class="w-3/4 bg-input_bg rounded-lg hover:bg-special_state_bg hover:ring-2 hover:ring-special_state_bg">Buy</button>
  </div>

</body>

<script>
    import { CardSwiper } from '$lib/CardSwiper/'
    import { supabase } from "$lib/supabaseClient.js"
    import { goto } from '$app/navigation'


    // the card that will come up next
    let nextCard 

    let data = (index) => {
      return {
        title: 'Style name ' + index,
        description: 'Content of the set',
        // productLink
        // product id
      }
    }

    async function logout() {
    const { error } = await supabase.auth.signOut() 
    goto("/")
  }

  function swiper(event) {
    const { detail } = event
    const { direction } = detail

    // call david's function and modify the user weights based on wheter the user swiped left or right
    
  }
  </script>
  
  <div class="h-screen w-screen" align="center">
    <CardSwiper cardData={data} minSwipeDistance={0.25} on:swiped={swiper}/>
  </div>

  <button on:click={logout}>log out</button>
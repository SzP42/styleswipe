<script>
    import { CardSwiper } from '$lib/CardSwiper/'
    import { supabase } from "$lib/supabaseClient.js"
    import { goto } from '$app/navigation'
  
    let data = (index) => {
      return {
        title: 'Card ' + index,
        description: 'Description ' + index
      }
    }

    async function logout() {
    const { error } = await supabase.auth.signOut() 
    goto("/")
  }
  </script>
  
  <div class="h-screen w-screen" align="center">
    <CardSwiper cardData={data} minSwipeDistance={0.35}/>
  </div>

  <button on:click={logout}>log out</button>
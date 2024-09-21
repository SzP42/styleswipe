<script>
    import { CardSwiper } from '$lib/CardSwiper/'
    import { goto } from '$app/navigation'
    import { currentSetId } from '$lib/stores.js'
    import { get } from 'svelte/store';

    export let data

    if (data['error']) {console.error(data['error'])}
    
    const { supabase } = data

    // the card that will come up next
    let cardData = async (index) => {
      let clothesObj = await getNextSet()
      
      // updates the currentSetId svelte store
      currentSetId.update(n => {
        if (n.length < 2) {
          n.push(clothesObj['setId']); // Add the new element if less than 2
          return n
        } else {
          n[0] = n[1]; // Shift the first element
          n[1] = clothesObj['setId'];  // Add the new element as the second
          return n
        }
      })
        
      return {
        title: clothesObj['name'],
        image: clothesObj['publicUrl'],
        // imageArr: clothesObj['clothes'],
        productLink: `/set/${clothesObj["setId"]}`
      }
    }

  async function getNextSet() {

// holds the data for all the clothes in a single set

const resp = await supabase.rpc('get_next_set')
const setId = resp['data']
if (!setId) {console.log(resp['error'])}

// get the price and set name from the database
const { data, error } = await supabase
    .from('sett')
    .select()
    .eq('set_id', setId)

if (!data) {console.log(error)}

const name = data[0]['name']

// get the image data from storage, fullSet is the name of the image file that has all the clothes on it
const images = await supabase
.storage
.from(setId)
.list('', {search: "fullSet"})

const imageData = images['data']
if (!imageData) {console.log(images['error'])}

      // gets the name of the image file and the public Url for it
        let filepath = imageData[0]['name']
        const { data: { publicUrl } } = supabase
        .storage
        .from(setId)
        .getPublicUrl(filepath)

    return {name, setId, publicUrl}
}

    async function logout() {
    const { error } = await supabase.auth.signOut() 
    goto("/")
  }

  function swiper(event) {
    const { detail } = event
    const { direction } = detail
    
    if (direction == 'left') {
    supabase.rpc('modificate', {liked: false, set_id: $currentSetId[0]})
    .then((result => {
      if (result['error']) {console.error(result['error'])}
    }))
    .catch((error) => {console.error(error)})
    }

    if (direction == 'right') {
    supabase.rpc('modificate', {liked: true, set_id: $currentSetId[0]})
    .then((result => {
      if (result['error']) {console.error(result['error'])}
    }))
    .catch((error) => {console.error(error)})

    }}

    
  </script>

  <body class="bg-bright_bg font-serif">
    <div class="flex flex-col-reverse xl:flex-row justify-center">
      <div class="flex justify-center h-screen w-screen">
        <CardSwiper cardData={cardData} minSwipeDistance={0.25} on:swiped={swiper} />
      </div>
    </div>
  </body>
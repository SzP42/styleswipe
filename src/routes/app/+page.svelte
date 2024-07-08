<script>
    import { CardSwiper } from '$lib/CardSwiper/'
    import { goto } from '$app/navigation'

    export let data

    if (data['error']) {console.error(data['error'])}
    const { supabase } = data
    let { sets } = data

    // the card that will come up next
    let cardData = async (index) => {
      let clothesObj = await getNextSet()

      return {
        title: clothesObj['name'],
        description: clothesObj['price'],
        image: clothesObj['clothes'][1]['publicUrl']
      }
    }

  async function getNextSet() {

// holds the data for all the clothes in a single set
let clothesArr = []

    
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
const price = data[0]['price']


// get the image data from storage
const images = await supabase
.storage
.from(setId)
.list()

const imageData = images['data']
if (!imageData) {console.log(images['error'])}

// for every image it gets the public url and builds an object consisting of the id, the url and the file path
for (let i=0; i < imageData.length; i++) {

    let filepath = imageData[i]['name']
    const { data: { publicUrl } } = supabase
    .storage
    .from(setId)
    .getPublicUrl(filepath)

    const clothesData = {id: i, publicUrl, filepath }
    // push the 
    clothesArr.push(clothesData)
    }

    // holds the clothesArr and additional information about the sets, will be the return value
    const clothesObj = {clothes: clothesArr, name, setId, price }

    return clothesObj
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
    <CardSwiper cardData={cardData} minSwipeDistance={0.25} on:swiped={swiper} {sets}/>
  </div>

  
<button on:click={logout}>log out</button>
<script>
    import { CardSwiper } from '$lib/CardSwiper/'
    import { goto } from '$app/navigation'
    import { currentSetId } from '$lib/stores.js'

    export let data

    if (data['error']) {console.error(data['error'])}
    
    const { supabase } = data

    // the card that will come up next
    let cardData = async (index) => {
      let clothesObj = await getNextSet()
      currentSetId.update(n => clothesObj['setId'])

      return {
        title: clothesObj['name'],
        description: clothesObj['clothes'].length,
        // needed to update the UI more easily
        image: clothesObj['clothes'][0]["publicUrl"],
        imageArr: clothesObj['clothes'],
        productLink: `/set/${$currentSetId}`
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
    
    if (direction == 'left') {
    supabase.rpc('modificate', {liked: false, set_id: $currentSetId})
    .then((result => {
      if (result['error']) {console.error(result['error'])}
    }))
    .catch((error) => {console.error(error)})
    }

    if (direction == 'right') {
    supabase.rpc('modificate', {liked: true, set_id: $currentSetId})
    .then((result => {
      if (result['error']) {console.error(result['error'])}
    }))
    .catch((error) => {console.error(error)})

    }}

    
  </script>

  <body class="bg-dark_bg font-serif">
    <div class="flex flex-col-reverse xl:flex-row justify-center">
      <div class="grid grid-rows-2 justify-items-center h-1/4 w-1/6 md:">
        <img src="/images/stsw_transparent-bright.png" alt="stsw logo" class="flex mx-auto h-44">
        <button on:click={logout} class="bg-input_bg hover:bg-special_state_bg text-input_text w-20 h-10 rounded-full">Log out</button>
      </div>
      <div class="flex justify-center h-screen w-screen">
        <CardSwiper cardData={cardData} minSwipeDistance={0.25} on:swiped={swiper} />
      </div>
    </div>
  </body>
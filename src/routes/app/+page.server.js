export const load = async (event) => {
    const { supabase } = event.locals
    
    try {
    // the value returned, which will contain data for 3 sets
    const threeSetsArr = []

    // get the data for one set 
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

    // load 3 sets, and have an array of objects
    for (let i=0; i<3; i++) {
        let set = await getNextSet()
        threeSetsArr.push(set)
    }
    
    return { sets: threeSetsArr, error: null }
    
} catch (error) {
    console.log(error)
    return { sets: null, supabase, error}
}}
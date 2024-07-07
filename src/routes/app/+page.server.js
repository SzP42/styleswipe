export const load = async (event) => {
    const {session, user, supabase} = event.locals
    
    try {
    // the value returned, which will contain data for 3 sets
    const threeSetsArr = []
    // get the data for one set 
    async function getNextSet() {
    
    // holds the data for all the clothes in a single set
    let clothesArr = []
        
    const resp = await supabase.rpc('get_next_set')
    const setNum = resp['data']
    if (!setNum) {console.log(resp['error'])}
    
    const bucket = `set_${setNum}`

    // get the image data from storage
    const images = await supabase
    .storage
    .from(bucket)
    .list()

    const imageData = images['data']
    if (!imageData) {console.log(images['error'])}
    
    // for every image it gets the public url and builds an object consisting of the id, the url and the file path
    for (let i=0; i < imageData.length; i++) {

        let filepath = imageData[i]['name']

        const { data: { publicUrl } } = supabase
        .storage
        .from(bucket)
        .getPublicUrl(filepath)

        const clothesData = {id: i, publicUrl, filepath }
        clothesArr.push(clothesData)
        }

        return clothesArr
    }

    // load 3 sets, and have an array of arrays
    for (let i=0; i<3; i++) {
        let set = await getNextSet()
        threeSetsArr.push(set)
    }
    
    return { data: threeSetsArr, error: null }
    
} catch (error) {
    console.log(error)
    return { data: null, error}
}}
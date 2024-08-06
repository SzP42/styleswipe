export const load = async (event) => {

    const { supabase } = event.locals
    const setId = event.params.setId;

    // query the DB for the set data
    const resp = await supabase
    .from('sett')
    .select()
    .eq('set_id', setId)

    if (resp['error']) {console.error(resp['error'])}


    let name = resp['data'][0]['name']
    let price = resp['data'][0]['price']
    let brand = resp['data'][0]['brand']
    let original_price = resp['data'][0]['original_price']
    let clothesArr = resp['data'][0]['clothes']

    // will be used to store data about the individual sets
    let clothesDataArr = []
    let brandUrl

    // for each piece in the set, queries the DB for info 
    // (namely the piece_id, link to the provider, the clothing type, and the sizes)
    // the url for the image is added later 

    clothesArr.forEach(async (element) => {
      const { data, error} = await supabase
        .from('clothes')
        .select()
        .eq('piece_id', element)

      if (error) {console.log(error)}

      clothesDataArr.push(data)
    });

    // gets the link to the brand's image
    if(brand) {
      const { data: {publicUrl}, } = supabase
      .storage
      .from('brand_logos')
      .getPublicUrl(`${brand}_logo.png`) 
      
      brandUrl = publicUrl
    }

    // queries the database for the images 
    const { data, error } = await supabase
    .storage
    .from(setId)
    .list()

    if (error) {console.error(error)}

    // used for stripe images 
    let urlArr = []
    // appends the image data to the arrays
    for (let i=0; i < data.length; i++) {
    const urlObj = supabase
    .storage
    .from(setId)
    .getPublicUrl(data[i]['name'])

    urlArr.push(urlObj['data']['publicUrl'])

    clothesDataArr[i][0]['imageUrl'] = urlObj['data']['publicUrl']

    }

      return { setId, name, price, urlArr, brand, brandUrl, original_price, clothesDataArr };
    };
export const load = async (event) => {

    const { supabase } = event.locals
    const setId = event.params.setId;

    const resp = await supabase
    .from('sett')
    .select()
    .eq('set_id', setId)

    

    if (resp['error']) {console.error(resp['error'])}
    let name = resp['data'][0]['name']
    let price = resp['data'][0]['price']

    
    const { data, error } = await supabase
    .storage
    .from(setId)
    .list()

    if (error) {console.error(error)}

    let urlArr = []
    for (let i=0; i < data.length; i++) {
      
    const urlObj = supabase
    .storage
    .from(setId)
    .getPublicUrl(data[i]['name'])

    urlArr.push(urlObj['data']['publicUrl'])

    }

      return { setId, name, price, urlArr };
    };
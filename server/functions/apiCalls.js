const fetch = require("node-fetch");

const baseUrl = 'https://api.mercadolibre.com'

const callApi = async (apiMethod, param) =>{
    let url = ''

    switch(apiMethod){
        case 'categories':
            url = `${baseUrl}/categories/${param}`
            break
        case 'seller':
            url = `${baseUrl}/users/${param}`
            break
        case 'item':
            url = `${baseUrl}/items/${param}`
            break
        case 'itemDescription':
            url = `${baseUrl}/items/${param}/description`
            break
        case 'allItems':
            url = `${baseUrl}/sites/MLA/search?q=${param}`
            break
        default:
            break
    }

    const response = await fetch(url)
    const resJson = await response.json()
    return resJson

}

module.exports = {callApi}
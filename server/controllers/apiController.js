
const fetch = require("node-fetch");

const baseurl = 'https://api.mercadolibre.com'

module.exports ={

    findAll: async (req,res)=>{

        const responseAll = await fetch(`${baseurl}/sites/MLA/search?q=${req.params.query}`)

        const resjsonAll = await responseAll.json()

        res.send(resjsonAll)
    },
    findById: async (req,res)=>{

        const response = await fetch(`${baseurl}/items/${req.params.id}`)

        const resjson = await response.json()

        const descripcion__response = await fetch(`${baseurl}/items/${req.params.id}/description`)

        const resjsonD = await descripcion__response.json()

        const seller = await fetch(`${baseurl}/users/${resjson.seller_id}`)

        const sellerjson = await seller.json()


        const elFormato = {
            author: {
                name: sellerjson.nickname,
                lastname: ''
            },
            item: {
                id: resjson.id,
                title: resjson.title,
                price: {
                currency: resjson.currency_id,
                amount: Math.round(resjson.price),
                decimals: parseFloat((resjson.price - Math.floor(resjson.price)).toFixed(2)),
                },
                picture: resjson.pictures[0].url,
                condition: resjson.condition,
                free_shipping: resjson.shipping.free_shipping,
                sold_quantity: resjson.sold_quantity,
                description: resjsonD.plain_text
            
        }}
   
        res.json(elFormato)
    }
}
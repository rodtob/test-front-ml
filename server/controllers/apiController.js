
const fetch = require("node-fetch");

const baseurl = 'https://api.mercadolibre.com'

module.exports ={

    findAll: async (req,res)=>{

        

        res.send('hola')
    },
    findById: async (req,res)=>{

        const response = await fetch(`${baseurl}/items/${req.params.id}`)


        const resjson = await response.json()

        const descripcion__response = await fetch(`${baseurl}/items/${req.params.id}/description`)

        const resjsonD = await descripcion__response.json()

        const elFormato = {
            author: {
                name: String,
                lastname: String
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
           
        res.send(elFormato)
    }
}
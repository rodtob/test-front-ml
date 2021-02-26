
const fetch = require("node-fetch");

const baseurl = 'https://api.mercadolibre.com'

module.exports ={

    findAll: async (req,res)=>{

        

        res.send('hola')
    },
    findById: async (req,res)=>{

        const response = await fetch(`${baseurl}/items/${req.params.id}`)

        const json = await response.json()

        res.send(json)
    }
}
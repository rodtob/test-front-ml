
const apiCalls = require('../functions/apiCalls')

module.exports ={
    
    findAll: async (req,res)=>{

        
        const responseAll = await apiCalls.callApi('allItems',req.params.query)

        let categorias = responseAll.available_filters[0].values.map(element => {             
              return element.name
            });


        let items = responseAll.results.map(element => {
            return {
                id: element.id,
                title: element.title,
                
                price:{
                currency: element.currency_id,
                amount: element.price,
                decimals:  parseFloat((element.prices.amount - Math.floor(element.prices.amount)).toFixed(2)),
                },
                picture: element.thumbnail,
                condition: element.condition,
                free_shipping: element.shipping.free_shipping}
              });

        const products = {
            
            author: {
            name: '',
            lastname: '',
            },
            categories: categorias,
            items: items
           }

            res.send(products)
    },
    findById: async (req,res)=>{


        const response = await apiCalls.callApi('item',req.params.id)

        const description = await apiCalls.callApi('itemDescription', req.params.id)

        const seller = await apiCalls.callApi('seller',response.seller_id)

        const category = await apiCalls.callApi('categories',response.category_id)


        const product = {
            author: {
                name: seller.nickname,
                lastname: ''
            },
            item: {
                id: response.id,
                title: response.title,
                price: {
                currency: response.currency_id,
                amount: Math.round(response.price),
                decimals: parseFloat((response.price - Math.floor(response.price)).toFixed(2)),
                },
                picture: response.pictures[0].url,
                condition: response.condition,
                free_shipping: response.shipping.free_shipping,
                sold_quantity: response.sold_quantity,
                description: description.plain_text,
                category: category.name 
            
        }}
   
        res.json(product)
    }
}
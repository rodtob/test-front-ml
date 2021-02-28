
import Lupa from '../Assets/Lupa'
import React,{useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Producto from '../Components/Producto'

const Resultado = ()=>{


    const { search } = useLocation();

    const aquery = new URLSearchParams(search);
  
    let searchParam = aquery.get('search')

    const [query] = useState(searchParam)

    const [products, setProducts] = useState(null);

    const [loading, setLoading] = useState(false)
    
    
    
    useEffect( () => {    
        async function apiCall() {
         try{
                setLoading(true)         
                let response = await fetch(`/api/itemsq=${query}`)
                let responseJson = await response.json()
                setProducts(responseJson)
                setLoading(false)
         }catch(err){
             alert(err)
         }
        }
        apiCall()
    },[query]);


    if(loading){
        return(
            <section className='noProduct loading'>
                <p>Cargando...</p>
            </section>
        )
    }   else if (products){    
            return(
                
                <div className='wrapper--categoria--main'>
                    <p className='categoria--producto'>{products.categories[0]}</p>

                        {products.items.map(producto=> {
                            return(
                                <Producto producto={producto} key={producto.id}/>
                            )           
                        })}  
                </div>)
                    } else{
                        return(
                            <section className='noProduct'>
                                <Lupa/>
                                <p>
                                    Escribí en el buscador lo que querés encontrar.
                                </p>
                            </section>
                        )}
                    }

export default Resultado
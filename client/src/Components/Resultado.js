
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
    const [error, setError] = useState(false)
    
    
    async function apiCall() {
     try{
            setLoading(true)         
            let response = await fetch(`/api/itemsq=${query}`)
            let responseJson = await response.json()
            setProducts(responseJson)
            setLoading(false)
            console.log(responseJson)
     }catch(err){
         alert(err)
         setError(true)
     }
    }

    useEffect( () => {    
        apiCall()
    },[]);

    if(error){
        return(
            <section className='noProduct'>
            <Lupa/>
            <p>Hubo un error</p>
        </section>
        )
    }
    if(loading){
        return(
            <section className='noProduct loading'>
                <p>Cargando...</p>
            </section>
        )
    }    

        if(products){    
            return(
                
                <div className='wrapper--categoria--main'>
                    <p className='categoria--producto'>{products.categories[0]}</p>

                        {products.items.map(producto=> {
                            return(
                                <Producto producto={producto}/>
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
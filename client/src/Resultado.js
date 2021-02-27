
import envio from './Assets/ic_shipping.png'
import React,{useState, useEffect} from 'react'
import {useLocation, Link} from 'react-router-dom'



const Resultado = ()=>{


    const { search } = useLocation();

    const aquery = new URLSearchParams(search);
  
    let elsearch = aquery.get('search')

    const [query] = useState(elsearch)

    const [products, setProducts] = useState(null);
    
    
    async function apiCall() {
        let response = await fetch(`/api/itemsq=${query}`)
        let responseJson = await response.json()
        setProducts(responseJson)
    
    }
    
    useEffect( () => {
        
        apiCall()
    
    },[]);

if(products){

    
    return(
        
        <div className='wrapper--categoria--main'>
            <p className='categoria--producto'>Electrónica audio video</p>

                {products.items.map(element=> {
                    // componetizar Producto
                    let freeshipping = element.free_shipping? <img src={envio} alt='icono envío' className='icono--envio'/> : null ;
                    let currency = element.price.currency === 'ARS'? '$' : 'U$S' 
                    return(


                       
                        <article className='wrapper--main wresultado' key={element.id}>
                            
                            <section className='wrapper--titulo--producto--imagen'>
                                <section className='wrapper--img resultados--img'>
                                    <Link to={`/items/${element.id}`}>
                                    <img className='producto--pic border--detalle' src={element.picture} alt='producto'/>
                                    </Link>
                                </section>
                                <article className='info--resultado'>
                                    <section className='wrapper--resultado--precio'>

                                        <h3 className='precio p--resultado'>{currency}{'  '}{element.price.amount}</h3>
                                      
                                        {freeshipping}
                                    
                                    </section>
                                    <h1 className='titulo--resultado'>{element.title}</h1>
                            
                                </article>
                                <article className='procedencia'>
                                    <p>Procedencia</p>
                                </article>
                            </section>

                        </article>
                    )
                })}
        
        </div>)
            } else{
                return(
                    <p>cargando resultados...</p>
                )

            }


            }

export default Resultado
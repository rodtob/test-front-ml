import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'


const Detalle = ()=>{

  const {id} = useParams()

  const [product, setProduct] = useState(null);

  const [idApi] = useState(id)

  
  useEffect(() => {      
      async function apiCall() {
          try{
            let response = await fetch(`/api/items/${idApi}`)
            response = await response.json()
            setProduct(response)
          }catch(err){
              alert(err)
          }
      }
            apiCall()          
        }, [idApi]);

if(product){
    return(
        <div className='wrapper--categoria--main'>
            <p className='categoria--producto'>{product.item.category}</p>
            <article className='wrapper--main'>
                <section className='wrapper--titulo--producto--imagen'>
           
                        <img className='producto--pic' src={product.item.picture} alt='producto'/>
            
                    <article className='info--producto'>
                        <p className='categoria--nuevo--usado'>{product.item.condition === 'new'? 'Nuevo' : 'Usado'} - {product.item.sold_quantity}- vendidos</p>
                        <h1 className='nombre--producto'>{product.item.title}</h1>
                        <h3 className='precio'>$ {product.item.price.amount}</h3>
                        <button className='boton--comprar' type='submit'>Comprar</button>
                    </article>
                </section>
                <article className='wrapper--descripcion'>
                    <h3 className="titulo--descripcion">Descripción del producto</h3>
                    <p className='descripcion--producto'>{product.item.description}</p>
                </article>
  
            </article>
        </div>
         ) } else {      
            return(
                <section className='noProduct loading'>
                    <p>Cargando...</p>
                </section>
            )
         }


        } 

export default Detalle
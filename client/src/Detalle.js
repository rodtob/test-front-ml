

import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'


const Detalle = ()=>{

  const {id} = useParams()
 
  console.log('el id es  '+id) 

  const [data, setData] = useState(null);

  const [elid, setId] = useState(id)
  
  useEffect(() => {
  
      async function apiCall() {
        let response = await fetch(`/api/items/${elid}`)
        response = await response.json()
        setData(response)
        console.log(response)
      }
  
     apiCall()    
  
  }, []);

  if(data){
      return(
          <div className='wrapper--categoria--main'>
              <p className='categoria--producto'>{data.item.category}</p>
              <article className='wrapper--main'>
                  <section className='wrapper--titulo--producto--imagen'>
                      {/* <section className='wrapper--img'> */}
                          <img className='producto--pic' src={data.item.picture} alt='producto'/>
                      {/* </section> */}
                      <article className='info--producto'>
                          <p className='categoria--nuevo--usado'>{data.item.condition === 'new'? 'Nuevo' : 'Usado'} - {data.item.sold_quantity}- vendidos</p>
                          <h1 className='nombre--producto'>{data.item.title}</h1>
                          <h3 className='precio'>$ {data.item.price.amount}</h3>
                          <button className='boton--comprar' type='submit'>Comprar</button>
                      </article>
                  </section>
                  <article className='wrapper--descripcion'>
                      <h3 className="titulo--descripcion">Descripción del producto</h3>
                      <p className='descripcion--producto'>{data.item.description}</p>
                  </article>
    
              </article>
          </div>
      )
  } else{
      return(
          <p>cargando...</p>
      )
  }



}

export default Detalle
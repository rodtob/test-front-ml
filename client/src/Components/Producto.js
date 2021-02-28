import envio from '../Assets/ic_shipping.png'
import React from 'react'
import {Link} from 'react-router-dom'


const Producto=({producto})=>{
    let freeshipping = producto.free_shipping? <img src={envio} alt='icono envío' className='icono--envio'/> : null ;
    let currency = producto.price.currency === 'ARS'? '$' : 'U$S' 
    return(

        <article className='wrapper--main wresultado' key={producto.id}>
            
            <section className='wrapper--titulo--producto--imagen'>
                <section className='wrapper--img resultados--img'>
                    <Link to={`/items/${producto.id}`}>
                    <img className='producto--pic border--detalle' src={producto.picture} alt='producto'/>
                    </Link>
                </section>
                <article className='info--resultado'>
                    <section className='wrapper--resultado--precio'>

                        <h3 className='precio p--resultado'>{currency}{'  '}{producto.price.amount}</h3>
                    
                        {freeshipping}
                    
                    </section>
                    <h1 className='titulo--resultado'>{producto.title}</h1>
            
                </article>
                <article className='procedencia'>
                    <p>{producto.origin}</p>
                </article>
            </section>

        </article>
    )

}

export default Producto
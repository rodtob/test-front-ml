
import envio from './Assets/ic_shipping.png'
import React,{useState, useEffect} from 'react'
import {useLocation, useParams} from 'react-router-dom'
import queryString from 'querystring'



const Resultado = ()=>{


    const { search } = useLocation();

    console.log(search)

    const aquery = new URLSearchParams(search);
  
    let elsearch = aquery.get('search')

    console.log(elsearch)
    
  
    const [query, setQuery] = useState(elsearch)

    const [products, setProducts] = useState(null);
    


    // let location = useLocation();
    // let queryBar = location.search
    // const value=queryString.parse(queryBar);
    // const token=value['?search'];
    // console.log('token',token)//123
    // setQuery(elsearch)
    
    async function apiCall() {
        let response = await fetch(`/api/itemsq=${query}`)
        let responseJson = await response.json()
        setProducts(responseJson)
        console.log(responseJson)
    }
    
    useEffect( () => {
        
        apiCall()
    
    },[]);

if(products){
    return(
        <div className='wrapper--categoria--main'>
            <p className='categoria--producto'>Electrónica audio video</p>
            <article className='wrapper--main wresultado'>
                
                <section className='wrapper--titulo--producto--imagen'>
                    <section className='wrapper--img resultados--img'>
                        <img className='producto--pic border--detalle' src={envio} alt='producto'/>
                    </section>
                    <article className='info--resultado'>
                        <section className='wrapper--resultado--precio'>

                            <h3 className='precio p--resultado'>$ 1.980</h3>
                             <img src={envio} alt='icono envío' className='icono--envio'/>
                        
                        </section>
                        <h1 className='titulo--resultado'>Deco Reverse Sombrero Oxford<br/>Completo Unico</h1>
                
                    </article>
                    <article className='procedencia'>
                        <p>Procedencia</p>
                    </article>
                </section>
                <section className='wrapper--titulo--producto--imagen'>
                    <section className='wrapper--img resultados--img'>
                        <img className='producto--pic border--detalle' src={envio} alt='producto'/>
                    </section>
                    <article className='info--resultado'>
                        <section className='wrapper--resultado--precio'>

                            <h3 className='precio p--resultado'>$ 1.980</h3>
                             <img src={envio} alt='icono envío' className='icono--envio'/>
                        
                        </section>
                        <h1 className='titulo--resultado'>Deco Reverse Sombrero Oxford<br/>Completo Unico</h1>
                
                    </article>
                    <article className='procedencia'>
                        <p>Procedencia</p>
                    </article>
                </section>



            </article>
        </div>
    )
} else{
    return(
        <p>cargando...</p>
    )

}


}

export default Resultado
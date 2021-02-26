
import envio from './Assets/ic_shipping.png'

const Resultado = ()=>{
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
}

export default Resultado
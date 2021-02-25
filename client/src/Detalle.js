import producto from './Assets/producto.png'

const Detalle = ()=>{
    return(
        <div className='wrapper--categoria--main'>
            <p className='categoria--producto'>Electrónica audio video</p>
            <article className='wrapper--main'>
                <section className='wrapper--titulo--producto--imagen'>
                    <section className='wrapper--img'>
                        <img className='producto--pic' src={producto} alt='producto'/>
                    </section>
                    <article className='info--producto'>
                        <p className='categoria--nuevo--usado'>Nuevo 230 vendidos</p>
                        <h1 className='nombre--producto'>Deco Reverse<br/> Sombrero Oxford</h1>
                        <h3 className='precio'>$ 1.980</h3>
                        <button className='boton--comprar' type='submit'>Comprar</button>
                    </article>
                </section>
                <article className='wrapper--descripcion'>
                    <h3 className="titulo--descripcion">Descripción del producto</h3>
                    <p className='descripcion--producto'>Lorem ipsum dolor sit amet consectetur adipiscing elit lacus congue, cum class nulla euismod aliquam neque erat accumsan lacinia, eleifend sapien ridiculus a hac lobortis scelerisque elementum. Sociis malesuada ligula volutpat eros sapien sem urna cubilia interdum porttitor, pellentesque libero ut hendrerit mattis sociosqu pharetra odio lacus. Sodales tempor aenean lacinia volutpat facilisi condimentum vulputate mattis, inceptos nulla rutrum dictumst posuere himenaeos eros integer lacus, leo feugiat facilisis pretium ante pharetra mi.</p>
                </article>

            </article>
        </div>
    )
}

export default Detalle
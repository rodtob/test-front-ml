import producto from './Assets/producto.png'

const Detalle = ({data})=>{
    return(
        <div className='wrapper--categoria--main'>
            <p className='categoria--producto'>{data.item.category}</p>
            <article className='wrapper--main'>
                <section className='wrapper--titulo--producto--imagen'>
                    <section className='wrapper--img'>
                        <img className='producto--pic' src={data.item.picture} alt='producto'/>
                    </section>
                    <article className='info--producto'>
                        <p className='categoria--nuevo--usado'>{data.item.condition == 'new'? 'Nuevo' : 'Usado'} {data.item.sold_quantity}vendidos</p>
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
}

export default Detalle
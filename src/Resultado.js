import producto from './Assets/producto.png'

const Resultado = ()=>{
    return(
        <article className='wrapper--main'>
            <section className='wrapper--titulo--producto--imagen'>
                <section className='wrapper--img'>
                      <img className='producto--pic' src={producto}/>
                </section>
                <article>
                    <p>Nuevo 230 vendidos</p>
                    <h4>Deco Reverse</h4>
                    <h3>$1900</h3>
                    <button>Comprar</button>
                </article>
            </section>

        </article>
    )
}

export default Resultado
import producto from './Assets/producto.png'

const Resultado = ()=>{
    return(
        <div>
            <p className='categoria--producto'>Electrónica audio > video</p>
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
        </div>
    )
}

export default Resultado
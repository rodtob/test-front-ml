import logo from './Assets/Logo_ML.png'
import lupa from './Assets/ic_Search.png'


const Buscador = ()=>{
    return(
        <section className='wrapper-buscador'>
            <form className='buscador'>
            <img src={logo}/>
            <input className='buscador--input' placeholder='Ingresa tu busqueda'/>
            <img src={lupa} className='lupa'/>
            </form>
        </section>
    )
}

export default Buscador
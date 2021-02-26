
import logo from './Assets/Logo_ML.png'
import lupa from './Assets/ic_Search.png'   


const Buscador = ({keyword,setKeyword})=>{

    return(

        <section className='wrapper-buscador'>
            <section className='buscador'>
            <img src={logo} alt='logoMercadoLibre'/>
            <form  className='wrapper--input--buscador'>
                <input type='text' name='query' value={keyword} className='buscador--input'  onSubmit={(e) => setKeyword(e.target.value)} placeholder='Ingresa tu busqueda'/>   
                <img src={lupa} className='lupa' alt='lupa'/>
            </form>
            </section>
        </section>
    )
}

export default Buscador

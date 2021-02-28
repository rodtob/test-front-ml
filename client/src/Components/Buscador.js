import React,{useState} from 'react'
import logo from '../Assets/Logo_ML.png'
import lupa from '../Assets/ic_Search.png'   
import { Link , useLocation } from 'react-router-dom'


const Buscador = ()=>{

    const { search } = useLocation();

    const aquery = new URLSearchParams(search);

    let searchParam = aquery.get('search')


    const [keyword, setKeyword] = useState(searchParam == null ? '' : searchParam);

    return(

        <section className='wrapper-buscador'>
            <section className='buscador'>
            <Link to='/'>
                <img src={logo} alt='logoMercadoLibre'/>
            </Link>
            <form  className='wrapper--input--buscador' action={`/items`}>
                <input id='buscador' type='search' name='search' value={keyword}  required className='buscador--input' onChange={(e) => setKeyword(e.target.value)}  placeholder='Ingresa tu busqueda'/>   
                <label className='labelBuscador' htmlFor='buscador'>
                    <img src={lupa} className='lupa' alt='lupa'/>
                </label>
            </form>
            </section>
        </section>
    )
}

export default Buscador

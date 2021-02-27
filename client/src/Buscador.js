import React,{useState, useEffect} from 'react'
import logo from './Assets/Logo_ML.png'
import lupa from './Assets/ic_Search.png'   
import { Link , useLocation } from 'react-router-dom'


const Buscador = ()=>{

    const { search } = useLocation();

    const aquery = new URLSearchParams(search);

    let elsearch = aquery.get('search')

    const [keyword, setKeyword] = useState(elsearch);

    return(

        <section className='wrapper-buscador'>
            <section className='buscador'>
            <Link to='/'>
            <img src={logo} alt='logoMercadoLibre'/>
            </Link>
            <form  className='wrapper--input--buscador' action={`/items`}>
                <input type='search' name='search' value={keyword} className='buscador--input'  onChange={(e) => setKeyword(e.target.value)}  placeholder='Ingresa tu busqueda'/>   
                <img src={lupa} className='lupa' alt='lupa'/>
            </form>
            </section>
        </section>
    )
}

export default Buscador

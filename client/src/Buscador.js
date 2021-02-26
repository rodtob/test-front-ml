import React from 'react';
import logo from './Assets/Logo_ML.png'
import lupa from './Assets/ic_Search.png'   


const Buscador = ()=>{
    return(

        <section className='wrapper-buscador'>
            <form className='buscador'>
            <img src={logo} alt='logoMercadoLibre'/>
            <section className='wrapper--input--buscador'>
                <input type='text' className='buscador--input' placeholder='Ingresa tu busqueda'/>
                <img src={lupa} className='lupa' alt='lupa'/>
            </section>
            </form>
        </section>
    )
}

export default Buscador
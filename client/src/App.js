import React,{useState, useEffect} from 'react'
import Buscador from './Buscador'
import Detalle from './Detalle';
import Resultado from './Resultado';

const App = ()=> {

  const [data, setData] = useState(null);

  const [id, setId] = useState('MLA709580097')

  const [query, setQuery] = useState('pikachu')

  useEffect(() => {

      async function apiCall() {
        let response = await fetch(`/api/items/${id}`)
        response = await response.json()
        setData(response)
        console.log(response)
      }

     apiCall()    

  }, [id]);

  useEffect(() => {

    async function apiCall() {
      let response = await fetch(`/api/itemsq=${query}`)
      response = await response.json()
      setData(response)
      console.log(response)
    }

   apiCall()    

}, [query]);





  return (
    <div className="App">
      <Buscador/>
      <div className='Content'>
        <Resultado/>
          {/* <Detalle/> */}
      </div>
    </div>
  );
}

export default App;

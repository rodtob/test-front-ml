import React,{useState, useEffect} from 'react'
import Buscador from './Buscador'
import Detalle from './Detalle';
import Resultado from './Resultado';
import {Switch, Route} from 'react-router-dom'
import queryString from 'querystring'

const App = ()=> {


  // const [query, setQuery] = useState('pikachu')


//   useEffect(() => {

//     async function apiCall() {
//       let response = await fetch(`/api/itemsq=${query}`)
//       response = await response.json()
//       setData(response)
//       console.log(response)
//     }

//    apiCall()    

// }, [query]);

  return (
  <React.Fragment>
    <div className="App">
      <Buscador/>
      <div className='Content'>
   
        <Switch>
          <Route exact path='/items/:id' component={Detalle}/>
          <Route exact path='/items?search=' component={Resultado}/>
        </Switch>

      </div>
    </div>

  </React.Fragment>
  );
}

export default App;

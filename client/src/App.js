import React,{useState, useEffect} from 'react'
import Buscador from './Buscador'
import Detalle from './Detalle';
import Resultado from './Resultado';
import {Switch, Route, useLocation} from 'react-router-dom'

const App = ()=> {
  
  const { search } = useLocation();

  const aquery = new URLSearchParams(search);

  let elsearch = aquery.get('search')

 
  return (
  <React.Fragment>
    <div className="App">
      
      <Buscador
       />

      <div className='Content'>
   
        <Switch>
          {/* <Route exact path='/'/> */}
          <Route exact path='/items' component={Resultado}/>
          <Route exact path='/items/:id' component={Detalle}/>
        </Switch>

      </div>
    </div>

  </React.Fragment>
  );
}

export default App;

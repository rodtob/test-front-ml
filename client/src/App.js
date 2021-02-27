import React from 'react'
import Buscador from './Components/Buscador'
import Detalle from './Components/Detalle';
import Resultado from './Components/Resultado';
import {Switch, Route} from 'react-router-dom'

const App = ()=> {
  
  return (
  <React.Fragment>
    <div className="App">
      
      <Buscador/>

      <div className='Content'>
   
        <Switch>
          <Route exact path='/items' component={Resultado}/>
          <Route exact path='/items/:id' component={Detalle}/>
        </Switch>

      </div>
    </div>

  </React.Fragment>
  );
}

export default App;

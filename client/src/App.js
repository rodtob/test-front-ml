import React,{useState, useEffect} from 'react'
import Buscador from './Buscador'
import Detalle from './Detalle';
import Resultado from './Resultado';
import {Switch, Route} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import queryString from 'querystring'


const App = ()=> {
  
  const [input, setInput] = useState('');

  const updateInput = async (input) => {
    setInput(input);

}
    
    // let location = useLocation();
    // let queryBar = location.search
    // const value=queryString.parse(queryBar);
    // const token=value['?search'];

//     useEffect(()=>{
      
//       // setQuery(token)
    
//       // console.log('token',token)//123
  

//  },[input])

 
  
  return (
  <React.Fragment>
    <div className="App">
      <Buscador input={input} 
       onChange={updateInput}/>

      <div className='Content'>
   
         <Resultado/>
        <Switch>
          <Route exact path='/items?search=' component={Resultado}/>
          <Route exact path='/items/:id' component={Detalle}/>
        </Switch>

      </div>
    </div>

  </React.Fragment>
  );
}

export default App;

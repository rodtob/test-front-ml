import Buscador from './Buscador'
import Detalle from './Detalle';
import Resultado from './Resultado';

function App() {
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

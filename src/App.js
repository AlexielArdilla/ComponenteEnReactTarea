import './App.css';
import Producto from './Producto';


function App() {

  let props = {
    precio: 15,
    SKU: 155455,
    cantidad_disponible: 5
  }

  return (
    <div className="App">
     <Producto props={props}/>
    </div>
  );
}

export default App;

import './App.css';
import NavBar from './main-components/NavBar.js'
import ItemListContainer from "./main-components/ItemListContainer"
import Footer from './main-components/Footer.js'

function App() {
  return (
    <>
      <NavBar/>
      <div className="divJugadores">
      <ItemListContainer nombre='Remera' stock="10" precio="500"/>
      <ItemListContainer nombre='Pantalon' stock="15" precio="650"/>
      <ItemListContainer nombre='Buzo' stock="3" precio="1500"/>
      </div>
      <Footer nombre="Francia"/>
    </>
  );
}

export default App;

import './App.css';
import NavBar from './main-components/NavBar'
import ItemListContainer from './main-components/ItemListContainer';
import Footer from './main-components/Footer'
import ItemList from './main-components/ItemList';

function App() {
  return (
    <>
      <NavBar />
      <div className="divJugadores">
        <ItemList />
      </div>
      <Footer />
    </>
  );
}

export default App;

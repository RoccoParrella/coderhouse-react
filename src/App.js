import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src= {logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a nuestra tienda!
        </p>
      </header>
    </div>
  );
}

export default App;

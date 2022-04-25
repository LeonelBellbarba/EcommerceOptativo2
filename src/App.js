import logo from './logo.svg';
import './App.css';
import Menu from "./Component/Menu"
import Public from "./Routes/Public"
import {BrowserRouter as Router} from "react-router-dom" 

function App() {
  return (
    <div className="App">

        <Router>

            <header>
                  <h1 className = "titulo">Ecommerce</h1>
                  <Menu/>
            </header>

            <Public/>

            <footer>Creado por Leonel Bellabarba</footer>

        </Router>
      

      

    </div>
  );
}

export default App;

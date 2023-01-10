import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './componentes/Bootstrap/Navbar';
import Header from './componentes/Header/Header';


import Button from './componentes/Button/Button.jsx'; 
import ItemList from './componentes/ItemList/ItemList';
import './componentes/ItemList/Item.css';

function App() {

  

  function darelClickImagen() {
    console.log("Click en la imagen")
  }

  /* class navbar extends React.Componentes{
    render(){
    }
  } */
  return (
    <div className="App">
       <Header/>
      <header className="App-header">
        <Navbar className="navbar"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
       
        { }
        <Button color="red">{"Hola"}</Button>

       <Button color="yellow">
        soy un boton
        </Button>

  
      </header>
    <div className='Item'>
      <ItemList
      title = "Pesas"
      description="Pesas 5kg"   
      price = {200}  
      img="../src/componentes/img/cocodrilo.jpg"
      />  
       <ItemList
       title = "Pesas"
      description="Pesas 10kg"   
      price = {500}  
      img="../src/componentes/img/cocodrilo.jpg"
      />  
         <ItemList
       title = "Pesas"
      description="Pesas 10kg"   
      price = {500}  
      img="../src/componentes/img/cocodrilo.jpg"
      />  
      </div>
    </div>
  );
}

export default App;

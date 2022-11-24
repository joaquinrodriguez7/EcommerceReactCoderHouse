import NavbarBootstrap from "./components/NavbarBT";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

const App = () => {
  return (
    <>
    <NavbarBootstrap/>
    <ItemListContainer mensaje="Hola! Soy el ItemListContainer"/>
    </>
  )
}

export default App;
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Cart from './components/Cart/Cart'



function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemListContainer/>}></Route>
      <Route path="/categoria/:categoriasId" element={<ItemListContainer/>}></Route>
      <Route path="/item/:categoria/:id" element={<ItemDetailContainer/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;

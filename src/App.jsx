import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import CartList from './components/Cart/CartList'
import CartContainer from './components/Cart/CartContainer';




function App() {
  return (
    <>
    <BrowserRouter>

      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemListContainer/>}></Route>
      <Route path="/categoria/:categoriasId" element={<ItemListContainer/>}></Route>
      <Route path="/item/:categoria/:id" element={<ItemDetailContainer/>}></Route>
      <Route path="/cart" element={<CartContainer/>}></Route>
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;

import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import CartContainer from './components/Cart/CartContainer';
import CartProvider from './Context/CartContext';





function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemListContainer/>}></Route>
      <Route path="/categoria/:categoriasId" element={<ItemListContainer/>}></Route>
      <Route path="/item/:categoria/:id" element={<ItemDetailContainer/>}></Route>
      <Route path="/cart" element={<CartContainer/>}></Route>
      </Routes>
      </CartProvider>
    </BrowserRouter>
    </>

  );
}

export default App;

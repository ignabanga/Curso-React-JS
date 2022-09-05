import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import ItemDetail from './components/ItemDetail/ItemDetail'


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemListContainer/>}></Route>
      <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;

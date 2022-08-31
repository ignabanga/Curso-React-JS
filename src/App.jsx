import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemListContainer/Item/ItemDetail/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='DivItemList'><ItemListContainer/></div>
      <div className='DivItemDetailContainer'><ItemDetailContainer/></div>
    </div>
  );
}

export default App;


import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/catalogo' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

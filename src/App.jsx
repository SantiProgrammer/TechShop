import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/catalogo' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter> 
    </div>
  );
}

export default App;

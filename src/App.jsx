import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Index';
import ItemDetailContainer from './containers/ItemDetailContainer/index';
import ItemListContainer from './containers/ItemListContainer/index';
import Navbar from './components/navbar/Index';
import Home from './components/Home/Index';
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

import "./styles/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Index";
import ItemDetailContainer from "./containers/ItemDetailContainer/Index";
import ItemListContainer from "./containers/ItemListContainer/Index";
import Navbar from "./components/NavBar/Index";
import Home from "./components/Home/Index";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            />
          </Routes>
        </CartProvider>
      </BrowserRouter>

      <div id="elemID031021">
        <script
          async
          type="text/javascript"
          src="//s2.tracemyip.org/vLg/lgUrl.php?pidnVar2=100993&amp;prtVar2=11&amp;stlVar2=1500~1693092042~14*2~0F5999*F7FFE6*537899*000000~1*1*0*0*0&amp;rgtype=4684NR-IPIB&amp;scvVar2=12"
        ></script>
        <noscript>
          <a
            title="cookieless user user tracker"
            href="https://www.tracemyip.org/tools/cookie-free-tracking-analytics-eu-cookie-law-solution/"
          >
            <img
              src="//s2.tracemyip.org/vLg/1500~1693092042~14*2~0F5999*F7FFE6*537899*000000~1*1*0*0*0/4684NR-IPIB/100993/11/12/ans/"
              alt="Cookieless user user tracker"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </a>
        </noscript>
      </div>
    </div>
  );
}

export default App;

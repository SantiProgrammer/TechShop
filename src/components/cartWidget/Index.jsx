import { useCartContext } from "../../context/CartContext";

function CartWidget() {
  const { totalProducts } = useCartContext();

  return (
    <>
      <div className="cart-widget">
        <a href="#app">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3523/3523887.png"
            className="carrito"
            alt="carrito"
          />
        </a>
        <p>{totalProducts() || "+"}</p>
      </div>
    </>
  );
}

export default CartWidget;

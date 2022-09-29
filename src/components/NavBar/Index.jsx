import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/Index";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <nav>
          <NavLink to="/">
            <img
              className="logo"
              src="https://i.ibb.co/1n1XPrS/LOGO.png"
              alt=""
            />
          </NavLink>
          <NavLink to="/catalogo">Catalogo completo</NavLink>
          <NavLink to="/categoria/windows">
            <img
              className="brand-logo"
              src="https://cdn-icons-png.flaticon.com/512/882/882702.png"
              alt=""
            />{" "}
            Windows{" "}
          </NavLink>
          <NavLink to="/categoria/mac">
            <img
              className="brand-logo"
              src="https://cdn-icons-png.flaticon.com/512/179/179309.png"
              alt=""
            />{" "}
            Mac
          </NavLink>
          <NavLink to="cart">
            <CartWidget />
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

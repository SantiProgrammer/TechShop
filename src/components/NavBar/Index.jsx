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
              src="https://pr0.nicelocal.com.mx/-CxvNGKuaNBfwkz4kpg5jQ/440x440,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2QDTPWtoy3_NxBcxp_Wq_EE5XlxlVXV4F-8lU_yFs-Oym41JMQLUd3PL90pSDCyAcw"
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

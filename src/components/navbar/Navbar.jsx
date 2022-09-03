/* import { Link } from 'react-router-dom'; */
import CartWidget from "../cartWidget/CartWidget";


const Navbar = () =>{
    return(
        <>
        <div className="navbar-container">
            <nav>
                <img className="logo" src="http://tecnotiendadigital.com/wp-content/uploads/LOGO.png" alt="" />
                <a href="">Inicio</a>
                <a href="">laptops</a>
                <a href="">PC</a>
                <CartWidget/>
            </nav>
        </div>

        </>
    );
}


export default Navbar;
import { NavLink } from 'react-router-dom';
import CartWidget from "../cartWidget/Index";


const Navbar = () =>{
    return(
        <>
        <div className="navbar-container">
            <nav>
                <NavLink to='/'><img className="logo" src="http://tecnotiendadigital.com/wp-content/uploads/LOGO.png" alt="" /></NavLink>
                <NavLink to='/catalogo'>Catalogo</NavLink>
                <NavLink to='/categoria/windows'>Windows</NavLink>
                <NavLink to='/categoria/mac'>Mac</NavLink>
                <NavLink to='cart'>
                    <CartWidget/>
                </NavLink>
                
            </nav>
        </div>

        </>
    );
}


export default Navbar;
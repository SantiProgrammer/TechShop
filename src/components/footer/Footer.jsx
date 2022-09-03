import { NavLink } from 'react-router-dom';
import CartWidget from "../cartWidget/CartWidget";


const Footer = () =>{
    return(
        <>
        <div className="footer-container">
            <footer>
                <NavLink to='/home'><img className="logo" src="http://tecnotiendadigital.com/wp-content/uploads/LOGO.png" alt="" /></NavLink>
                <NavLink to='/catalogo'>Catalogo</NavLink>
                <NavLink to='/categoria/windows'>Windows</NavLink>
                <NavLink to='/categoria/mac'>Mac</NavLink>
                <NavLink to='cart'>
                    <CartWidget/>
                </NavLink>
                
            </footer>
        </div>

        </>
    );
}


export default Footer;
import '../NavBar/NavBar.css';
import {CartWidget} from '../CartWidget/CartWidget.js'

export const NavBar = () => {
    return (

        <nav>
      
      <ul className="menu">
      <li className="item"><a href="#"><CartWidget /></a></li>
      <li className="logo"><a href="#">CriptoShop</a></li>
      <li className="item"><a href="#">Home</a></li>
      <li className="item"><a href="#">About</a></li>
      <li className="item"><a href="#">Services</a></li>
      <li className="item"><a href="#">Products</a></li>
      </ul>  
        </nav>



           
     )
}


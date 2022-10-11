import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import Cart from "../Pages/Cart";


const Navigation = () => {

  const cartStyle = {
    background: '#FC0317',
    display: 'flex',
    padding: '6px 19px',
    borderRadius: '15px',

  }
  const NavbarStyle = {
    background: '#e0b39b',
  }
  const { cart } = useContext(CartContext);

  return (
    <>
      <div style={NavbarStyle}>
        <nav className="container mx-auto flex items-center justify-between py-4">

          <Link to="/">
            <img style={{ height: 45 }} src="./images/logo.png" alt="logo image" />
          </Link>

          <ul className="flex items-center">
            <li className="font-bold text-black "> <Link to="/">Home</Link> </li>
            <li className="ml-6 font-bold text-black"> <Link to="/products">Products</Link> </li>
            <li className="ml-6">
              <Link to="/cart">
                <div style={cartStyle}>
                  <span className="text-black">{cart.totalItems}</span>
                  <img className="ml-2" src="./images/cart.png" alt="cart image" />
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;

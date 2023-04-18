import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  return (
    <div className="header">
      <nav className="nav-bar">
        <div className="logo-container">
          <Link to="/" className="link">
            <h1>Foodish</h1>
          </Link>
        </div>
        <div className="nav-list-container">
          <div>
            <Link to="/" className="link">
              Home
            </Link>
          </div>
          <div className="cart-btn-container">
            <span>
              <Link to="/cart" className="link">
                <span>{Object.keys(cartItems).length}</span>
                <BsFillCartFill style={{ marginTop: "0px" }} />
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

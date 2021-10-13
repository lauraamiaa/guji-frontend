import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";

export default function Navigation() {
  return (
    <>
      <div className="navbar">
        <div className="navItem">
          <Link to="/"> GUJI </Link>
        </div>
        <div className="navItem">
          <Link to="/webshop"> WEBSHOP </Link>
        </div>
        <div className="navItem">
          <Link to="/about"> ABOUT </Link>
        </div>
        <div className="navItem">
          <Link to="/cart">
            <BsFillCartFill /> {""}
            CART
          </Link>
        </div>
      </div>
    </>
  );
}

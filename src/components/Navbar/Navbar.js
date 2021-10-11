import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarItem from "../NavbarItem/NavbarItem";

export default function Navigation() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Nav>
          <NavbarItem path="/" linkText="GUJI" />
          <NavbarItem path="/webshop" linkText="WEBSHOP" />
          <NavbarItem path="/about" linkText="ABOUT" />
          <NavbarItem path="/cart" linkText="CART" />
        </Nav>
      </Navbar>
    </>
  );
}

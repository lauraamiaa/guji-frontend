import React from "react";
import "./Navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar className="navbar" expand="lg" sticky="top">
        <Nav>
          <Nav.Item>
            <Nav.Link
              className="navLink"
              activeStyle={{
                color: "#191923",
                backgroundColor: "#00a900",
                borderRadius: "15px",
                padding: "32px",
              }}
              style={{
                color: "#fbfbf1",
                padding: "32px",
              }}
              as={NavLink}
              to="/"
              exact
            >
              GUJI
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              className="navLink"
              activeStyle={{
                color: "#191923",
                backgroundColor: "#00a900",
                borderRadius: "15px",
                padding: "32px",
              }}
              style={{
                color: "#fbfbf1",
                padding: "32px",
              }}
              as={NavLink}
              to="/webshop"
            >
              WEBSHOP
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              className="navLink"
              activeStyle={{
                color: "#191923",
                backgroundColor: "#00a900",
                borderRadius: "15px",
                padding: "32px",
              }}
              style={{
                color: "#fbfbf1",
                padding: "32px",
              }}
              as={NavLink}
              to="/about"
            >
              ABOUT
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              className="navLink"
              activeStyle={{
                color: "#191923",
                backgroundColor: "#00a900",
                borderRadius: "15px",
                padding: "32px",
              }}
              style={{
                color: "#fbfbf1",
                padding: "32px",
              }}
              as={NavLink}
              to="/cart"
            >
              CART
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}

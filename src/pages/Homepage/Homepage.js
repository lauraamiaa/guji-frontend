import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div>
      <div className="intro">
        <h1 className="welcome">
          WELCOME TO <br /> <span>GUJI COFFEE</span>
        </h1>
      </div>
      <div className="discover">
        <h1 className="discoverHeadline">COME AND DISCOVER</h1>
      </div>
      <div className="beans">
        <h1 className="beansHeadline">OUR BEANS</h1>
        <div className="allCoffeePictures">
          <img
            className="coffeePicture"
            src="https://res.cloudinary.com/dveul1ne3/image/upload/v1633974495/porfolio-project/Brazil_ba9d1p.jpg"
            alt="Brazil Coffee"
          />
          <img
            className="coffeePicture"
            src="https://res.cloudinary.com/dveul1ne3/image/upload/v1633974495/porfolio-project/Ethiopia_g17uie.jpg"
            alt="Ethiopia Coffee"
          />
          <img
            className="coffeePicture"
            src="https://res.cloudinary.com/dveul1ne3/image/upload/v1633974495/porfolio-project/Kenya_erva3c.jpg"
            alt="Kenya Coffee"
          />
          <img
            className="coffeePicture"
            src="https://res.cloudinary.com/dveul1ne3/image/upload/v1633974495/porfolio-project/Columbia_zwphqg.jpg"
            alt="Columbia Coffee"
          />
        </div>
        <Link to={`/webshop`}>
          <Button
            className="viewWebshop"
            style={{
              backgroundColor: "#00a900",
              border: "#00a900",
              color: "#fbfbf1",
            }}
          >
            VIEW WEBSHOP
          </Button>
        </Link>
      </div>
    </div>
  );
}

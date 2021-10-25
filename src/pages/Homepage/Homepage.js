import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div>
      <div className="intro">
        <h1 className="welcome">
          WELCOME TO <br /> <span className="gujiCoffee">GUJI COFFEE</span>
        </h1>
        <img
          className="beansPng"
          src="https://res.cloudinary.com/dveul1ne3/image/upload/v1634159003/porfolio-project/wqo5auhereloqjyl9ecp.png"
          alt="beans"
        />
      </div>

      <div className="discover">
        <h1 className="discoverHeadline">COME AND DISCOVER</h1>

        <div className="discoverContent">
          <img
            className="coffeeBar"
            src="https://res.cloudinary.com/dveul1ne3/image/upload/v1634162005/porfolio-project/ywbq1mpckqpdiylao80c.jpg"
            alt="coffee bar"
          />

          <div>
            <p className="discoverText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
              <br />
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to={`/about`}>
              <button className="discoverButton">LEARN MORE</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="beans">
        <h1 className="beansHeadline">OUR BEANS</h1>

        <div>
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
            <button className="viewWebshopButton">VIEW WEBSHOP</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

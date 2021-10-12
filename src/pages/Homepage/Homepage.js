import React from "react";
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
      </div>
    </div>
  );
}

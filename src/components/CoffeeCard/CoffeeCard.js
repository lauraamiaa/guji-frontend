import React from "react";
import { Link } from "react-router-dom";
import "./CoffeeCard.css";

export default function CoffeeCard(props) {
  return (
    <div className="coffeeCard">
      <div>
        <img className="coffeeImage" src={props.imageUrl} alt={props.name} />
      </div>
      <div>
        <h2 className="coffeeName">{props.name}</h2>
        <p className="shortDescription">{props.shortDescription}</p>
        <h3 className="coffeePrice">FROM € {props.price}</h3>
        <Link to={`/webshop/${props.id}`}>
          <button className="learnMore">LEARN MORE</button>
        </Link>
      </div>
    </div>
  );
}

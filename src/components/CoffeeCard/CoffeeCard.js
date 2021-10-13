import React from "react";
import { Link } from "react-router-dom";
import "./CoffeeCard.css";

export default function CoffeeCard(props) {
  return (
    <div className="coffeeCard">
      <img className="coffeeImage" src={props.imageUrl} alt={props.name} />
      <h2 className="coffeeName">{props.name}</h2>
      <p>{props.shortDescription}</p>
      <h3 className="price">FROM {props.price} €</h3>
      <Link to={`/webshop/${props.id}`}>
        <button>LEARN MORE</button>
      </Link>
    </div>
  );
}

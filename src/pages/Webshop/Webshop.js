import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Webshop.css";
import { fetchCoffees } from "../../store/coffee/actions";
import { selectAllCoffees } from "../../store/coffee/selectors";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";

export default function Webshop() {
  const dispatch = useDispatch();
  const coffees = useSelector(selectAllCoffees);

  useEffect(() => {
    dispatch(fetchCoffees());
  }, [dispatch]);

  return (
    <div className="webshop">
      <h1 className="webshopTitle">OUR COFFEES</h1>
      {coffees.map((coffee) => {
        return (
          <CoffeeCard
            key={coffee.id}
            id={coffee.id}
            imageUrl={coffee.imageUrl}
            name={coffee.name}
            shortDescription={coffee.shortDescription}
            price={parseFloat(coffee.price).toFixed(2)}
          />
        );
      })}
    </div>
  );
}

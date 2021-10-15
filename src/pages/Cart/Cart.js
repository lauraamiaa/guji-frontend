import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector } from "react-redux";

import { getFullCartItems } from "../../store/cart/selectors";

export default function Cart() {
  const allCartInfo = useSelector(getFullCartItems);
  console.log("my cart items", allCartInfo);

  return (
    <div>
      <h1 className="cart">YOUR CART</h1>
      {allCartInfo.map((cart, index) => {
        return (
          <CartItem
            key={cart.coffeeId}
            index={index}
            imageUrl={cart.coffee.imageUrl}
            name={cart.coffee.name}
            price={cart.price}
            quantity={cart.quantity}
            weight={cart.weight}
            grind={cart.grind}
          />
        );
      })}
    </div>
  );
}

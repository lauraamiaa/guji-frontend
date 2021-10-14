import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector } from "react-redux";

import { getFullCartItems } from "../../store/cart/selectors";

export default function Cart() {
  const allCartInfo = useSelector(getFullCartItems);

  console.log("DID THIS WORK?", allCartInfo);

  return (
    <div>
      <h1 className="cart">YOUR CART</h1>
      <CartItem />
    </div>
  );
}

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./CartItem.css";
import { calculateTotalPrice } from "../../Lib/helpers";
import {
  deleteFromCart,
  increaseDecreaseCartItem,
} from "../../store/cart/actions";
import { selectAllCoffees } from "../../store/coffee/selectors";

export default function CartItem(props) {
  const dispatch = useDispatch();
  const [allCoffeeList, setAllCoffeeList] = useState(
    useSelector(selectAllCoffees)
  );
  function handleDelete(e) {
    e.preventDefault();
    dispatch(deleteFromCart(props.index));
  }

  const thisCoffee = allCoffeeList.find((coffee) => {
    console.log(
      `Does ${coffee.id} match ${props.coffeeId}`,
      coffee.id === props.coffeeId
    );
    return coffee.id === props.coffeeId;
  });

  if (!thisCoffee) return <p>...Loading</p>;

  return (
    <div>
      <table className="cartItem" style={{ border: "1px solid black" }}>
        <thead>
          <tr style={{ border: "1px solid black" }}>
            <th></th>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ border: "1px solid black" }}>
            <td rowSpan="3">
              <img
                className="cartImage"
                src={thisCoffee.imageUrl}
                alt={thisCoffee.name}
              />
            </td>
            <td>{thisCoffee.name}</td>
            <td rowSpan="3">
              € {calculateTotalPrice(props.quantity, props.price, props.weight)}
            </td>
            <td rowSpan="3">
              <span
                onClick={() =>
                  dispatch(
                    increaseDecreaseCartItem({
                      quantity: parseInt(props.quantity - 1),
                      index: props.index,
                    })
                  )
                }
                className="minus"
              >
                -
              </span>
              <input type="text" min="1" max="10" value={props.quantity} />
              <span
                onClick={() =>
                  dispatch(
                    increaseDecreaseCartItem({
                      quantity: parseInt(props.quantity + 1),
                      index: props.index,
                    })
                  )
                }
                className="plus"
              >
                +
              </span>
            </td>
            <td rowSpan="3">
              <button onClick={handleDelete}>delete</button>
            </td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td>{props.weight}</td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td>{props.grind}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

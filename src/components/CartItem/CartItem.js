import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/actions";
import "./CartItem.css";

export default function CartItem(props) {
  const dispatch = useDispatch();

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
                src={props.imageUrl}
                alt={props.name}
              />
            </td>
            <td>{props.name}</td>
            <td rowSpan="3">€ {props.price}</td>
            <td rowSpan="3">
              <span class="minus">-</span>
              <input
                type="text"
                min="1"
                max="10"
                defaultValue={props.quantity}
              />
              <span
                // onClick={() =>
                //   dispatch(
                //     addToCart({ ...props, quantity: props.quantity + 1 })
                //   )
                // }
                class="plus"
              >
                +
              </span>
            </td>
            <td rowSpan="3">
              <button>delete</button>
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

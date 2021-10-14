import React from "react";

export default function CartItem() {
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
            <td rowSpan="3">image</td>
            <td>product name</td>
            <td rowSpan="3">€</td>
            <td rowSpan="3">
              <input
                type="number"
                id="quantity"
                name="quantity"
                // value={cart quantity}
                min="1"
                max="10"
                required="required"
              />
            </td>
            <td rowSpan="3">
              <button>delete</button>
            </td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td>weight</td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td>grind</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

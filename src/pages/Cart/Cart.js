import React, { useState } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Cart.css";
import { getFullCartItems } from "../../store/cart/selectors";
import { selectToken } from "../../store/customer/selectors";

export default function Cart() {
  const allCartInfo = useSelector(getFullCartItems);
  const token = useSelector(selectToken);

  const [showShippingForm, setShowShippingForm] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAndHouseNumber, setStreetAndHouseNumber] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  function handleSubmitOrder(e) {
    e.preventDefault();
    // dispatch(
    //   createOrder({ firstName, lastName, streetAndHouseNumber, additionalInfo, postalCode, city, country })
    // );
  }

  return (
    <div className="cart">
      <h1 className="cartTitle">YOUR CART</h1>
      {allCartInfo.map((cart, index) => {
        return (
          <CartItem
            key={cart.coffeeId}
            index={index}
            coffeeId={cart.coffeeId}
            price={cart.price}
            quantity={cart.quantity}
            weight={cart.weight}
            grind={cart.grind}
          />
        );
      })}
      <div>
        <h3>SUBTOTAL</h3>
        <h4>Shipping Costs € 6.00</h4>
        <h3>TOTAL</h3>
      </div>
      <div>
        <button
          onClick={() =>
            showShippingForm
              ? setShowShippingForm(false)
              : setShowShippingForm(true)
          }
        >
          CHECKOUT
        </button>
        {showShippingForm ? (
          token ? (
            <form>
              <label>
                FIRST NAME:
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </label>
              <label>
                LAST NAME:
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </label>
              <label>
                STREET AND HOUSE NUMBER:
                <input
                  type="text"
                  name="streetAndHouseNumber"
                  value={streetAndHouseNumber}
                  onChange={(e) => setStreetAndHouseNumber(e.target.value)}
                  required
                />
              </label>
              <label>
                APARTMENT, SUITE, ETC. (OPTIONAL):
                <input
                  type="text"
                  name="additionalInfo"
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  required
                />
              </label>
              <label>
                POSTAL CODE:
                <input
                  type="text"
                  name="postalCode"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  required
                />
              </label>
              <label>
                CITY:
                <input
                  type="text"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </label>
              <label>
                COUNTRY:
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  name="country"
                >
                  <option value="theNetherlands">The Netherlands</option>
                  <option value="belgium">Belgium</option>
                  <option value="luxembourg">Luxembourg</option>
                  <option value="germany">Germany</option>
                </select>
              </label>
              <button type="submit" onClick={handleSubmitOrder}>
                COMPLETE ORDER
              </button>
            </form>
          ) : null
        ) : (
          <div>
            <p>
              Already have an account?
              <span>
                {" "}
                <Link to="/login">Log in</Link>
              </span>
            </p>
            <p>
              Don't have one yet, but want to{" "}
              <span>
                <Link to="/signup">sign up</Link>
              </span>{" "}
              ?
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

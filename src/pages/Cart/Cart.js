import React, { useState } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Cart.css";
import { getFullCartItems } from "../../store/cart/selectors";
import { selectToken } from "../../store/customer/selectors";
import { calculateTotalPrice } from "../../Lib/helpers";

export default function Cart() {
  const allCartInfo = useSelector(getFullCartItems);
  const token = useSelector(selectToken);

  console.log("get full cart items selector", allCartInfo);

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

  // const subtotal = allCartInfo.reduce(
  //   calculateTotalPrice(
  //     allCartInfo.quantity,
  //     allCartInfo.price,
  //     allCartInfo.weight
  //   )
  // );

  // if (!subtotal) return <p>...Loading</p>;

  return (
    <div className="cart">
      <h1 className="cartTitle">YOUR CART</h1>

      {allCartInfo ? (
        <div className="cartEmpty">
          <h3 className="cartEmptyTitle">YOUR CART IS CURRENTLY EMPTY</h3>
          <p className="cartEmptyText">
            Go to the{" "}
            <span>
              <Link className="webshopLink" to="/webshop">
                webshop
              </Link>
            </span>{" "}
            to add some products
          </p>
        </div>
      ) : null}

      <div className="cartDisplay">
        <div>
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
        </div>

        <div>
          {allCartInfo ? (
            <div className="totalCalculation">
              <h3 className="subTotalTitle">SUBTOTAL</h3>
              {/* <h3 className="subTotalTitle">{subtotal}</h3> */}
              <h3 className="subTotalTitle">€ 6.00 - SHIPPING COSTS</h3>
              <h3 className="subTotalTitle">TOTAL</h3>
              {/* <h3 className="subTotalTitle">{total}</h3> */}
              <button
                className="checkoutButton"
                onClick={() =>
                  showShippingForm
                    ? setShowShippingForm(false)
                    : setShowShippingForm(true)
                }
              >
                CHECKOUT
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {showShippingForm && token ? (
        <div className="shippingForm">
          <form>
            <h1 className="shippingTitle">SHIPPING INFORMATION</h1>

            <div>
              <label className="shippingLabels">
                FIRST NAME:
                <div>
                  <input
                    className="shippingInputs"
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
              </label>
              <label className="shippingLabels">
                LAST NAME:
                <div>
                  <input
                    className="shippingInputs"
                    type="text"
                    placeholder="Enter your surname"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </label>
            </div>

            <div>
              <label className="shippingLabels">
                STREET AND HOUSE NUMBER:
                <div>
                  <input
                    className="shippingInputs"
                    type="text"
                    placeholder="Street Name 1-3"
                    name="streetAndHouseNumber"
                    value={streetAndHouseNumber}
                    onChange={(e) => setStreetAndHouseNumber(e.target.value)}
                    required
                  />
                </div>
              </label>
            </div>
            <div>
              <label className="shippingLabels">
                APARTMENT, SUITE, ETC. (OPTIONAL):
                <div>
                  <input
                    className="shippingInputs"
                    type="text"
                    placeholder="Apartment 4"
                    name="additionalInfo"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    required
                  />
                </div>
              </label>
            </div>

            <div>
              <label className="shippingLabels">
                POSTAL CODE:
                <div>
                  <input
                    className="shippingInputs"
                    type="text"
                    placeholder="1010 DE"
                    name="postalCode"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    required
                  />
                </div>
              </label>
              <label className="shippingLabels">
                CITY:
                <div>
                  <input
                    className="shippingInputs"
                    type="text"
                    placeholder="Amsterdam"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
              </label>
            </div>

            <div>
              <label className="shippingLabels">
                COUNTRY:
                <div>
                  <select
                    className="shippingInputs"
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
                </div>
              </label>
            </div>

            <button
              className="orderButton"
              type="submit"
              onClick={handleSubmitOrder}
            >
              COMPLETE ORDER
            </button>
          </form>
        </div>
      ) : null}

      {showShippingForm && !token ? (
        <div className="notLoggedIn">
          <p className="notLoggedInText">
            Already have an account?
            <span>
              {" "}
              <Link className="notLoggedInLink" to="/login">
                Log in
              </Link>
            </span>
          </p>
          <p className="notLoggedInText">
            Don't have one yet, but want to{" "}
            <span>
              <Link className="notLoggedInLink" to="/signup">
                sign up
              </Link>
            </span>{" "}
            ?
          </p>
        </div>
      ) : null}
    </div>
  );
}

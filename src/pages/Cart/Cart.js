import React, { useState } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import "./Cart.css";
import { getFullCartItems } from "../../store/cart/selectors";
import { selectToken } from "../../store/customer/selectors";
import { calculateTotalPrice } from "../../Lib/helpers";
import { createOrder } from "../../store/order/actions";

export default function Cart() {
  const history = useHistory();
  const allCartInfo = useSelector(getFullCartItems);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const [showShippingForm, setShowShippingForm] = useState(false);
  const [showPayPal, setShowPayPal] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAndHouseNumber, setStreetAndHouseNumber] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  function redirectOnSuccess() {
    console.log("redirected");
    history.push("/");
  }

  function handleSubmitOrder() {
    const shippingData = {
      firstName,
      lastName,
      streetAndHouseNumber,
      additionalInfo,
      postalCode,
      city,
      country,
    };
    dispatch(createOrder(shippingData, redirectOnSuccess));
  }

  const totalPrice = allCartInfo.reduce((acc, item) => {
    const totalForItem = calculateTotalPrice(
      item.quantity,
      item.price,
      item.weight
    );

    return acc + totalForItem;
  }, 0);

  return (
    <div className="cart">
      <h1 className="cartTitle">YOUR CART</h1>

      {!allCartInfo.length ? (
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
          {allCartInfo.length && (
            <div className="totalCalculation">
              <h3 className="subTotalTitle">SUBTOTAL</h3>
              <h3 className="subTotalTitle">
                € {parseFloat(totalPrice).toFixed(2)}
              </h3>
              <h3 className="subTotalTitle">€ 6.00 - SHIPPING COSTS</h3>
              <h3 className="subTotalTitle">TOTAL</h3>
              <h3 className="subTotalTitle">
                € {parseFloat(totalPrice + 6).toFixed(2)}
              </h3>
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
          )}
        </div>
      </div>

      {showShippingForm && token ? (
        <div className="shippingForm">
          <form>
            <h1 className="shippingTitle">SHIPPING INFORMATION</h1>
            <div>
              <label className="shippingLabels">
                FIRST NAME
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
                LAST NAME
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
                STREET AND HOUSE NUMBER
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
                APARTMENT, SUITE, ETC. (OPTIONAL)
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
                POSTAL CODE
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
                CITY
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
                COUNTRY
                <div>
                  <select
                    className="shippingInputs"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                    name="country"
                  >
                    <option>...select a country</option>
                    <option value="The Netherlands">The Netherlands</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Germany">Germany</option>
                  </select>
                </div>
              </label>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowPayPal(!showPayPal);
              }}
              className="orderButton"
            >
              COMPLETE ORDER
            </button>

            {showPayPal && (
              <div className="payPalButton">
                <PayPalScriptProvider
                  options={{
                    "client-id":
                      "AbtSX5TsMePR90XHuni3QefomDKcT8FOnVdaPDAR79bBkewIph462N2o-C8JyXw0e3jATrL4zRLggiO_",
                    currency: "EUR",
                  }}
                >
                  <PayPalButtons
                    style={{
                      layout: "horizontal",
                      shape: "pill",
                      color: "black",
                      label: "pay",
                      tagline: "false",
                      height: 50,
                    }}
                    onApprove={(event) => handleSubmitOrder(event)}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: parseFloat(totalPrice + 6).toFixed(2),
                            },
                          },
                        ],
                      });
                    }}
                  />
                </PayPalScriptProvider>
              </div>
            )}
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

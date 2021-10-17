import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import "./DetailsPage.css";
import { fetchCoffeeDetails } from "../../store/coffeeDetails/actions";
import { addToCart } from "../../store/cart/actions";
import { selectAllCoffeeDetails } from "../../store/coffeeDetails/selectors";
import { calculateTotalPrice } from "../../Lib/helpers";

export default function DetailsPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const coffeeDetails = useSelector(selectAllCoffeeDetails);
  const { id } = useParams();

  const [productOrder, setProductOrder] = useState({
    coffeeId: parseInt(id),
  });

  useEffect(() => {
    dispatch(fetchCoffeeDetails(id));
  }, []);

  function onChangeHandler(event) {
    if (event.target.name === "quantity") {
      setProductOrder({
        ...productOrder,
        price: parseFloat(coffeeDetails.price),
        [event.target.name]: parseInt(event.target.value),
      });
      return;
    }

    setProductOrder({
      ...productOrder,
      price: parseFloat(coffeeDetails.price),
      [event.target.name]: event.target.value,
    });
  }

  function onClickHandler(event) {
    event.preventDefault();
    dispatch(addToCart(productOrder));
    history.push("/cart");
  }

  if (!coffeeDetails) return <h1 className="loading">Loading ...</h1>;

  const pricePerBag =
    productOrder.weight && productOrder.weight === "1 KG"
      ? coffeeDetails.price * 3.9
      : coffeeDetails.price;

  return (
    <div className="detailsPage">
      {!coffeeDetails ? (
        ""
      ) : (
        <div>
          <h1 className="coffeeDetailsTitle">{coffeeDetails.name}</h1>
          <div className="description">
            <p className="longDescription">{coffeeDetails.longDescription}</p>
          </div>

          <div className="shoppingOptions">
            <div>
              <img
                className="coffeeImage"
                src={coffeeDetails.imageUrl}
                alt={coffeeDetails.name}
              />
            </div>
            <div>
              <form>
                <h3 className="price">PRICE PER BAG</h3>
                <h3 className="pricePerBag">€ {pricePerBag}</h3>

                <h3 className="grind">GRIND SIZE</h3>
                <div className="grindInputs">
                  <label className="grindSelector">
                    <input
                      onChange={(event) => onChangeHandler(event)}
                      type="radio"
                      value="whole beans"
                      name="grind"
                      required="required"
                    />{" "}
                    WHOLE BEANS
                  </label>
                  <label className="grindSelector">
                    <input
                      onChange={(event) => onChangeHandler(event)}
                      type="radio"
                      value="filter"
                      name="grind"
                    />{" "}
                    FILTER
                  </label>
                  <label className="grindSelector">
                    <input
                      onChange={(event) => onChangeHandler(event)}
                      type="radio"
                      value="aeropress"
                      name="grind"
                    />{" "}
                    AEROPRESS
                  </label>
                  <label className="grindSelector">
                    <input
                      onChange={(event) => onChangeHandler(event)}
                      type="radio"
                      value="french press"
                      name="grind"
                    />{" "}
                    FRENCH PRESS
                  </label>
                </div>

                <h3 className="size">SIZE</h3>
                <div className="sizeInputs">
                  <label className="sizeSelector">
                    <input
                      onChange={(event) => onChangeHandler(event)}
                      type="radio"
                      value="250 GR"
                      name="weight"
                      required="required"
                    />{" "}
                    250 GR
                  </label>
                  <label className="sizeSelector">
                    <input
                      onChange={(event) => onChangeHandler(event)}
                      type="radio"
                      value="1 KG"
                      name="weight"
                    />{" "}
                    1 KG
                  </label>
                </div>

                <h3 className="quantity">QUANTITY</h3>
                <div className="quantityInput">
                  <input
                    className="quantitySelector"
                    onChange={(event) => {
                      onChangeHandler(event);
                    }}
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="10"
                    required="required"
                  />
                </div>

                <h3 className="total">TOTAL AMOUNT</h3>
                <h3 className="total">
                  €{" "}
                  {!productOrder.quantity
                    ? 0
                    : calculateTotalPrice(
                        productOrder.quantity,
                        coffeeDetails.price,
                        productOrder.weight
                      )}
                </h3>

                <button
                  onClick={(event) => onClickHandler(event)}
                  className="addButton"
                  type="submit"
                >
                  ADD TO CART
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

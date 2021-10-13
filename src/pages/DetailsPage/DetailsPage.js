import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./DetailsPage.css";
import { fetchCoffeeDetails } from "../../store/coffeeDetails/actions";
import { addToCart } from "../../store/cart/actions";
import { selectAllCoffeeDetails } from "../../store/coffeeDetails/selectors";

export default function DetailsPage() {
  const dispatch = useDispatch();
  const coffeeDetails = useSelector(selectAllCoffeeDetails);
  const { id } = useParams();

  const [productOrder, setProductOrder] = useState({ coffeeId: id });

  function onChangeHandler(event) {
    setProductOrder({
      ...productOrder,
      [event.target.name]: event.target.value,
    });
  }
  function onClickHandler(event) {
    event.preventDefault();
    dispatch(addToCart(productOrder));
  }
  useEffect(() => {
    dispatch(fetchCoffeeDetails(id));
  }, []);

  return (
    <div>
      <h1 className="coffeeDetails">PRODUCT NAME</h1>
      {!coffeeDetails ? (
        ""
      ) : (
        <div>
          <div className="description">
            <p>{coffeeDetails.longDescription}</p>
          </div>
          <div className="shoppingOptions">
            <img
              className="coffeeImage"
              src={coffeeDetails.imageUrl}
              alt={coffeeDetails.name}
            />

            <form>
              <h3 className="price">PRICE</h3>
              <h3 className="price">{coffeeDetails.price} €</h3>
              <h3 className="grind">GRIND SIZE</h3>
              <label>
                <input
                  onChange={(event) => onChangeHandler(event)}
                  type="radio"
                  value="whole beans"
                  name="grind"
                />{" "}
                WHOLE BEANS
              </label>
              <label>
                <input
                  onChange={(event) => onChangeHandler(event)}
                  type="radio"
                  value="filter"
                  name="grind"
                />{" "}
                FILTER
              </label>
              <label>
                <input
                  onChange={(event) => onChangeHandler(event)}
                  type="radio"
                  value="aeropress"
                  name="grind"
                />{" "}
                AEROPRESS
              </label>
              <label>
                <input
                  onChange={(event) => onChangeHandler(event)}
                  type="radio"
                  value="french press"
                  name="grind"
                />{" "}
                FRENCH PRESS
              </label>
              <h3 className="size">SIZE</h3>
              <label>
                <input
                  onChange={(event) => onChangeHandler(event)}
                  type="radio"
                  value="250 GR"
                  name="weight"
                />{" "}
                250 GR BEANS
              </label>
              <label>
                <input
                  onChange={(event) => onChangeHandler(event)}
                  type="radio"
                  value="1 KG"
                  name="weight"
                />{" "}
                1 KG
              </label>
              <h3 className="quantity">QUANTITY</h3>
              <input
                onChange={(event) => onChangeHandler(event)}
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="10"
              />
              <button
                onClick={(event) => onClickHandler(event)}
                className="button"
                type="submit"
              >
                ADD TO CART
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

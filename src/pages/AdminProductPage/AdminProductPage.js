import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import {
  fetchCoffeeDetails,
  updateCoffee,
} from "../../store/coffeeDetails/actions";
import { deleteCoffee } from "../../store/coffee/actions";
import { selectAllCoffeeDetails } from "../../store/coffeeDetails/selectors";

export default function AdminProductPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const coffeeDetails = useSelector(selectAllCoffeeDetails);
  const { id } = useParams();

  const [showEditForm, setShowEditForm] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");

  useEffect(() => {
    if (coffeeDetails) {
      setName(coffeeDetails.name);
      setPrice(coffeeDetails.price);
      setLongDescription(coffeeDetails.longDescription);
      setShortDescription(coffeeDetails.shortDescription);
    }
  }, [coffeeDetails]);

  useEffect(() => {
    dispatch(fetchCoffeeDetails(id));
  }, []);

  function handleEdit(e) {
    e.preventDefault();
    dispatch(updateCoffee({ name, price, longDescription, shortDescription }));
  }

  function handleDelete(e) {
    e.preventDefault();
    dispatch(deleteCoffee(id));
    history.push("/admin");
  }

  return (
    <div>
      {!coffeeDetails ? (
        "...Loading"
      ) : (
        <div>
          <h1>{coffeeDetails.name}</h1>
          <img
            className="coffeeImage"
            src={coffeeDetails.imageUrl}
            alt={coffeeDetails.name}
          />
          <h3>PRODUCT NUMBER</h3>
          <h6>{coffeeDetails.id}</h6>
          <h3>PRICE 250 GR</h3>
          <h6>€ {coffeeDetails.price}</h6>
          <h3>PRICE 1 KG</h3>
          <p>margin of 3.9</p>
          <h6>€ {coffeeDetails.price * 3.9}</h6>
          <h3>LONG DESCRIPTION</h3>
          <p>{coffeeDetails.longDescription}</p>
          <h3>SHORT DESCRIPTION</h3>
          <p>{coffeeDetails.shortDescription}</p>
          <button
            onClick={() =>
              showEditForm ? setShowEditForm(false) : setShowEditForm(true)
            }
          >
            EDIT PRODUCT
          </button>
          {showEditForm ? (
            <form>
              <label>
                NAME:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label>
                PRICE 250 GR:
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
              <label>
                LONG DESCRIPTION:
                <input
                  type="text"
                  value={longDescription}
                  onChange={(e) => setLongDescription(e.target.value)}
                />
              </label>
              <label>
                SHORT DESCRIPTION:
                <input
                  type="text"
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                />
              </label>
              <button type="submit" onClick={handleEdit}>
                CONFIRM EDIT
              </button>
            </form>
          ) : null}
          <button onClick={handleDelete}>DELETE PRODUCT</button>
        </div>
      )}
    </div>
  );
}

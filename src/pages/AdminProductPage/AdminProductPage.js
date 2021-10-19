import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import "./AdminProductPage.css";
import {
  fetchCoffeeDetails,
  updateCoffee,
} from "../../store/coffeeDetails/actions";
import { deleteCoffee } from "../../store/coffee/actions";
import { selectAllCoffeeDetails } from "../../store/coffeeDetails/selectors";

export default function AdminProductPage() {
  const dispatch = useDispatch();
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
  }

  return (
    <div className="productDetails">
      {!coffeeDetails ? (
        "...Loading"
      ) : (
        <div>
          <h1 className="productDetailsTitle">{coffeeDetails.name}</h1>
          <div>
            <button className="goToAdminButton">
              {" "}
              <Link
                style={{ textDecoration: "none", color: "#191923" }}
                to="/admin"
              >
                BACK TO ADMIN DASH
              </Link>
            </button>
          </div>
          <div className="productDetailsInfo">
            <div>
              <img
                className="productImage"
                src={coffeeDetails.imageUrl}
                alt={coffeeDetails.name}
              />
            </div>
            <div>
              <h3 className="productDetailsHeading">PRODUCT NUMBER</h3>
              <h6 className="productDetailsData">{coffeeDetails.id}</h6>
              <h3 className="productDetailsHeading">PRICE 250 GR</h3>
              <h6 className="productDetailsData">
                € {parseFloat(coffeeDetails.price).toFixed(2)}
              </h6>
              <h3 className="productDetailsHeading">PRICE 1 KG</h3>
              <p className="productDetailsData">margin of 3.9</p>
              <h6 className="productDetailsData">
                € {parseFloat(coffeeDetails.price * 3.9).toFixed(2)}
              </h6>
              <h3 className="productDetailsHeading">LONG DESCRIPTION</h3>
              <p className="productDetailsData">
                {coffeeDetails.longDescription}
              </p>
              <h3 className="productDetailsHeading">SHORT DESCRIPTION</h3>
              <p className="productDetailsData">
                {coffeeDetails.shortDescription}
              </p>
            </div>
          </div>

          <div className="productModifications">
            <button
              className="editDeleteProductButton"
              onClick={() =>
                showEditForm ? setShowEditForm(false) : setShowEditForm(true)
              }
            >
              EDIT PRODUCT
            </button>
            {showEditForm ? (
              <form onSubmit={handleEdit}>
                <div>
                  <label className="editProductLabels">
                    NAME
                    <div>
                      <input
                        className="editProductInputs"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </label>
                  <label className="editProductLabels">
                    PRICE 250 GR
                    <div>
                      <input
                        className="editProductInputs"
                        type="text"
                        value={parseFloat(price).toFixed(2)}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </label>
                </div>

                <div>
                  <label className="editProductLabels">
                    LONG DESCRIPTION
                    <div>
                      <textarea
                        id="longDescriptionInput"
                        className="editProductInputs"
                        rows="6"
                        type="text"
                        value={longDescription}
                        onChange={(e) => setLongDescription(e.target.value)}
                      />
                    </div>
                  </label>
                </div>

                <div>
                  <label className="editProductLabels">
                    SHORT DESCRIPTION
                    <div>
                      <input
                        id="shortDescriptionInput"
                        className="editProductInputs"
                        type="text"
                        value={shortDescription}
                        onChange={(e) => setShortDescription(e.target.value)}
                      />
                    </div>
                  </label>
                </div>

                <button className="confirmEditButton" type="submit">
                  CONFIRM EDIT
                </button>
              </form>
            ) : null}

            <button className="editDeleteProductButton" onClick={handleDelete}>
              DELETE PRODUCT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

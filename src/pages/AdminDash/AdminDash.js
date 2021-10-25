import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import "./AdminDash.css";
import AdminOrderList from "../../components/AdminOrderList/AdminOrderList";
import AdminProductList from "../../components/AdminProductList/AdminProductList";
import { createCoffee } from "../../store/coffee/actions";
import { selectCustomer } from "../../store/customer/selectors";

export default function AdminDash() {
  const dispatch = useDispatch();
  const history = useHistory();

  const userData = useSelector(selectCustomer);

  const [showPostForm, setShowPostForm] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!userData.token || !userData.isAdmin) {
      history.push("/");
    }
  }, [history, userData.token, userData.isAdmin]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      createCoffee({ name, price, longDescription, shortDescription, imageUrl })
    );
  }

  return (
    <div className="adminDash">
      <h1 className="adminHeading">ADMIN DASHBOARD</h1>

      <div className="dashInfo">
        <div>
          <h2 className="adminSubHeading">NEW ORDERS</h2>
          <AdminOrderList />
          <button className="adminDashButton">LOAD MORE ORDERS</button>
        </div>
        <div>
          <h2 className="adminSubHeading">PRODUCTS</h2>
          <AdminProductList />
          <button
            className="adminDashButton"
            onClick={() =>
              showPostForm ? setShowPostForm(false) : setShowPostForm(true)
            }
          >
            ADD PRODUCT
          </button>
        </div>
      </div>

      {showPostForm ? (
        <div className="addProductForm">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="productLabels">
                NAME
                <div>
                  <input
                    className="productInputs"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </label>
              <label className="productLabels">
                PRICE
                <div>
                  <input
                    className="productInputs"
                    type="text"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
              </label>
            </div>

            <div>
              <label className="productLabels">
                LONG DESCRIPTION
                <div>
                  <textarea
                    id="longDescription"
                    className="productInputs"
                    type="text"
                    name="longDescription"
                    value={longDescription}
                    onChange={(e) => setLongDescription(e.target.value)}
                    required
                  />
                </div>
              </label>
            </div>

            <div>
              <label className="productLabels">
                SHORT DESCRIPTION
                <div>
                  <input
                    id="shortDescription"
                    className="productInputs"
                    type="text"
                    name="shortDescription"
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                    required
                  />
                </div>
              </label>
            </div>

            <div>
              <label className="productLabels">
                IMAGE URL
                <div>
                  <input
                    id="imageUrlInput"
                    className="productInputs"
                    type="text"
                    name="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                  />
                </div>
              </label>
              <div>
                <img src={imageUrl} alt={imageUrl}></img>
              </div>
            </div>

            <button className="submitProductButton " type="submit">
              SUBMIT PRODUCT
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

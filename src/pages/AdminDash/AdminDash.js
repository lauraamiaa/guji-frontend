import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./AdminDash.css";
import AdminOrderList from "../../components/AdminOrderList/AdminOrderList";
import AdminProductList from "../../components/AdminProductList/AdminProductList";
import { createCoffee } from "../../store/coffee/actions";

export default function AdminDash() {
  const dispatch = useDispatch();

  const [showPostForm, setShowPostForm] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      createCoffee({ name, price, longDescription, shortDescription, imageUrl })
    );
  }

  return (
    <div>
      <h1 className="adminHeading">ADMIN PAGE</h1>
      <h2 className="adminSubHeading">NEW ORDERS</h2>
      <AdminOrderList />
      <button className="adminDashButton">VIEW ALL ORDERS</button>
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
      {showPostForm ? (
        <form>
          <label>
            NAME:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            PRICE:
            <input
              type="text"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
          <label>
            LONG DESCRIPTION:
            <input
              type="text"
              name="longDescription"
              value={longDescription}
              onChange={(e) => setLongDescription(e.target.value)}
              required
            />
          </label>
          <label>
            SHORT DESCRIPTION:
            <input
              type="text"
              name="shortDescription"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              required
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              name="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </label>
          <button type="submit" onClick={handleSubmit}>
            SUBMIT PRODUCT
          </button>
          <img src={imageUrl} alt={imageUrl}></img>
        </form>
      ) : null}
    </div>
  );
}

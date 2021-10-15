import React from "react";
import AdminProductList from "../../components/AdminProductList/AdminProductList";

import "./AdminDash.css";

export default function AdminDash() {
  return (
    <div>
      <h1 className="adminHeading">ADMIN PAGE</h1>
      <h2 className="adminSubHeading">ORDERS</h2>
      <button className="adminDashButton">VIEW ALL ORDERS</button>
      <h2 className="adminSubHeading">PRODUCTS</h2>
      <AdminProductList />
      <button className="adminDashButton">ADD PRODUCT</button>
    </div>
  );
}

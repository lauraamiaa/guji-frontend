import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Moment from "react-moment";

import "./AdminOrderPage.css";
import { calculateTotalPrice } from "../../Lib/helpers";
import { selectOrdersDetails } from "../../store/order/selectors";
import { fetchOrderDetails } from "../../store/order/actions";

export default function AdminOrderPage() {
  const dispatch = useDispatch();
  const order = useSelector(selectOrdersDetails);
  const id = useParams();

  useEffect(() => {
    dispatch(fetchOrderDetails(id));
  }, [dispatch, id]);

  console.log("order", order);
  return (
    <div className="orderDetails">
      {!order ? (
        "...Loading"
      ) : (
        <div>
          <h1 className="orderDetailsTitle">ORDER {order.id}</h1>
          <button className="goToAdminButton">
            <Link
              style={{ textDecoration: "none", color: "#191923" }}
              to="/admin"
            >
              BACK TO ADMIN DASH
            </Link>
          </button>

          <p className="orderCreated">
            Order placed: <Moment format="D MMM YYYY">{order.createdAt}</Moment>
          </p>
          <p className="orderStatus">Status: {order.status}</p>
          <button className="statusButton">CHANGE STATUS TO SHIPPED</button>

          <h3 className="orderDetailsHeadings">ORDERED PRODUCTS</h3>

          <table className="orderItem">
            <thead>
              <tr>
                <th></th>
                <th className="orderDetailsTableHeading">Product</th>
                <th className="orderDetailsTableHeading">Price</th>
                <th className="orderDetailsTableHeading">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item) => {
                return (
                  <>
                    <tr>
                      <td rowSpan="3">
                        <img
                          className="orderDetailsImage"
                          src={item.coffee.imageUrl}
                          alt={item.coffee.name}
                        />
                      </td>
                      <td>{item.coffee.name}</td>
                      <td rowSpan="3">
                        €{" "}
                        {calculateTotalPrice(
                          item.quantity,
                          item.price,
                          item.weight
                        )}
                      </td>
                      <td rowSpan="3">{item.quantity}</td>
                    </tr>
                    <tr>
                      <td>{item.weight}</td>
                    </tr>
                    <tr>
                      <td>{item.grind}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>

          <h3 className="orderDetailsHeadings">CUSTOMER INFORMATION</h3>
          <h4 className="orderDetailsSubHeadings">NAME</h4>
          <h5 className="customerShippingInformation">
            {order.customer.firstName} {order.customer.lastName}
          </h5>
          <h4 className="orderDetailsSubHeadings">EMAIL</h4>
          <h5 className="customerShippingInformation">
            {order.customer.email}
          </h5>
          <h4 className="orderDetailsSubHeadings">PHONE</h4>
          <h5 className="customerShippingInformation">
            {order.customer.phone}
          </h5>

          <h3 className="orderDetailsHeadings">SHIPPING ADDRESS</h3>
          <h4 className="orderDetailsSubHeadings">NAME</h4>
          <h5 className="customerShippingInformation">
            {order.firstName} {order.lastName}
          </h5>
          <h4 className="orderDetailsSubHeadings">ADDRESS</h4>
          <h5 className="customerShippingInformation">
            {order.streetAndHouseNumber} {order.additionalInfo}
          </h5>
          <h5 className="customerShippingInformation">
            {order.postalCode} {order.city}
          </h5>
          <h5 className="customerShippingInformation">{order.country}</h5>
        </div>
      )}
    </div>
  );
}

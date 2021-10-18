import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import "./AdminOrderList.css";
import { fetchOrders } from "../../store/order/actions";
import { selectAllOrders } from "../../store/order/selectors";

export default function AdminOrderList() {
  const dispatch = useDispatch();
  const orders = useSelector(selectAllOrders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <div className="orderList">
      {!orders ? (
        "...Loading"
      ) : (
        <table>
          <tbody>
            <tr>
              <th className="ordersTableTitle">ORDER ID</th>
              <th className="ordersTableTitle">DATE</th>
              <th className="ordersTableTitle">STATUS</th>
            </tr>
            {orders
              .sort((a, b) => {
                return b.createdAt.localeCompare(a.createdAt);
              })
              .map((order) => {
                return (
                  <tr>
                    <td>
                      <Link to={`/admin/orders/${order.id}`}>
                        <button className="orderIdButton">{order.id}</button>
                      </Link>
                    </td>
                    <td className="ordersTableInfo">
                      <Moment format="D MMM YYYY">{order.createdAt}</Moment>
                    </td>
                    <td className="ordersTableInfo">{order.status}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
}

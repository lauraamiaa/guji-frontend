import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./AdminProductList.css";
import { selectAllCoffees } from "../../store/coffee/selectors";
import { fetchCoffees } from "../../store/coffee/actions";

export default function AdminProductList() {
  const dispatch = useDispatch();
  const coffees = useSelector(selectAllCoffees);

  useEffect(() => {
    dispatch(fetchCoffees());
  }, []);

  return (
    <div className="productsTable">
      <table>
        <tr>
          <th>Product Number</th>
          <th>Product Name</th>
          <th>Price 250gr</th>
          <th>Price 1kg</th>
          <th>Active</th>
        </tr>
        {coffees.map((product) => {
          return (
            <tr>
              <Link to={`/admin/product/${product.id}`}>
                <button>
                  <td>{product.id}</td>
                </button>
              </Link>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.price * 3.9}</td>
              {/* <td>{product.active}</td> */}
            </tr>
          );
        })}
      </table>
    </div>
  );
}

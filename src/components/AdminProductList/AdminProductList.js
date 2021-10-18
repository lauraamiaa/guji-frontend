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
        <tbody>
          <tr>
            <th className="productsTableTitle">Product ID</th>
            <th className="productsTableTitle">Product Name</th>
            <th className="productsTableTitle">Price 250 gr</th>
            <th className="productsTableTitle">Price 1kg</th>
            {/* <th>Active</th> */}
          </tr>
          {coffees.map((product) => {
            return (
              <tr>
                <td>
                  <Link to={`/admin/product/${product.id}`}>
                    <button className="coffeeIdButton">{product.id}</button>
                  </Link>
                </td>
                <td className="productsTableInfo">{product.name}</td>
                <td className="productsTableInfo">{product.price}</td>
                <td className="productsTableInfo">{product.price * 3.9}</td>
                {/* <td>{product.active}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

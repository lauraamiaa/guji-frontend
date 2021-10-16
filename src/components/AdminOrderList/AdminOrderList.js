import React from "react";
import { Link } from "react-router-dom";

export default function AdminOrderList() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Product Number</th>
            <th>Product Name</th>
            <th>Price 250gr</th>
            <th>Price 1kg</th>
            <th>Active</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// {coffees.map((product) => {
//     return (
//       <tr>
//         <td>
//           <Link to={`/admin/product/${product.id}`}>
//             <button>{product.id}</button>
//           </Link>
//         </td>
//         <td>{product.name}</td>
//         <td>{product.price}</td>
//         <td>{product.price * 3.9}</td>
//         {/* <td>{product.active}</td> */}
//       </tr>
//     );
//   })}

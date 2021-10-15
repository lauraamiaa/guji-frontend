import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchCoffeeDetails } from "../../store/coffeeDetails/actions";
import { selectAllCoffeeDetails } from "../../store/coffeeDetails/selectors";

export default function AdminProductPage() {
  const dispatch = useDispatch();
  const coffeeDetails = useSelector(selectAllCoffeeDetails);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCoffeeDetails(id));
  }, []);

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
          <button>EDIT PRODUCT</button>
          <button>DELETE PRODUCT</button>
        </div>
      )}
    </div>
  );
}

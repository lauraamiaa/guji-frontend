import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/customer/actions";
import { Link } from "react-router-dom";

export default function LoggedIn() {
  const dispatch = useDispatch();

  return (
    <>
      <Link to="/" onClick={() => dispatch(logOut())}>
        Log out here
      </Link>
    </>
  );
}

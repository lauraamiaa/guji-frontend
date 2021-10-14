import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/customer/actions";
import { Link } from "react-router-dom";

export default function LoggedIn() {
  const dispatch = useDispatch();

  return (
    <>
      <Link
        style={{ textDecoration: "none", color: "#191923" }}
        to="/"
        onClick={() => dispatch(logOut())}
      >
        LOG OUT
      </Link>
    </>
  );
}

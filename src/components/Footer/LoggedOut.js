import React from "react";
import { Link } from "react-router-dom";

export default function LoggedOut() {
  return (
    <>
      <Link style={{ textDecoration: "none", color: "#191923" }} to="/login">
        LOG IN
      </Link>
    </>
  );
}

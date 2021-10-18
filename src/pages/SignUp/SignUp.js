import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./SignUp.css";
import { selectToken } from "../../store/customer/selectors";
import { signUp } from "../../store/customer/actions";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(email, password, firstName, lastName, phone));
  }

  return (
    <div className="signUpPage">
      <h1 className="signUpTitle">SIGN UP</h1>
      <div className="signUpForm">
        <form>
          <div>
            <label className="signUpLabels">
              EMAIL
              <div>
                <input
                  className="signUpInputs"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter email"
                  required
                />
              </div>
            </label>
            <label className="signUpLabels">
              PASSWORD
              <div>
                <input
                  className="signUpInputs"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  placeholder="Choose a password"
                  required
                />
              </div>
            </label>
          </div>

          <div>
            <label className="signUpLabels">
              FIRST NAME
              <div>
                <input
                  className="signUpInputs"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="Enter your first name"
                  required
                />
              </div>
            </label>
            <label className="signUpLabels">
              LAST NAME
              <div>
                <input
                  className="signUpInputs"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  placeholder="Enter your surname"
                  required
                />
              </div>
            </label>
          </div>

          <div>
            <label className="signUpLabels">
              PHONE
              <div>
                <input
                  className="signUpInputs"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="+31 12345678"
                />
              </div>
            </label>
          </div>

          <button className="signUpButton" type="submit" onClick={submitForm}>
            CREATE ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";

import "./Login.css";
import { login } from "../../store/customer/actions";
import { selectToken } from "../../store/customer/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
  }

  return (
    <div className="loginPage">
      <h1 className="loginTitle">LOG IN TO ORDER</h1>

      <div className="loginForm">
        <form>
          <div>
            <label className="loginLabels">
              EMAIL
              <div>
                <input
                  className="loginInputs"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter email"
                  required
                />
              </div>
            </label>
          </div>

          <div>
            <label className="loginLabels">
              PASSWORD
              <div>
                <input
                  className="loginInputs"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
              {/* <Link to="/">FORGOT YOUR PASSWORD?</Link> */}
            </label>
          </div>

          <div>
            <button class="loginButton" type="submit" onClick={submitForm}>
              LOG IN
            </button>
          </div>

          <h2 className="noAccountText">
            NO ACCOUNT YET?{" "}
            <Link className="signupLink" to="/signup">
              {" "}
              SIGN UP HERE{" "}
            </Link>
          </h2>
        </form>
      </div>
    </div>
  );
}

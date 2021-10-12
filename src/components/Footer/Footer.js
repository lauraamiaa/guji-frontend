import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/customer/selectors";

import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Footer() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <div>
      <footer className="text-center text-lg-start">
        <section>
          <div className="container text-center text-md-start">
            <div className="row">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-4">
                <h6 className="mb-4">FOLLOW US ON</h6>
                <p>
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                <h6 className="mb-4">FIND US</h6>
                <p>Jan Evertsenstraat 23</p>
                <p>1057 BL Amsterdam</p>
                <p> + 31 123 456 78</p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                <h6 className="mb-4">DROP US A MESSAGE</h6>
                <p>hello@guji-amsterdam.com</p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-4">
                <h6 className="mb-4">YOUR ACCOUNT</h6>
                {loginLogoutControls}
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

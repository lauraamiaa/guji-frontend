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
      <footer class="footerDistributed">
        <div className="footerSocial">
          <h6 className="footerHeading">FOLLOW US ON</h6>
          <div className="icon">
            <a
              className="iconLinks"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
          <div className="icon">
            <a
              className="iconLinks"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
        <div className="footerAddress">
          <h6 className="footerHeading">FIND US</h6>
          <p>Jan Evertsenstraat 23</p>
          <p>1057 BL Amsterdam</p>
          <p> + 31 123 456 78</p>
        </div>
        <div className="footerEmail">
          <h6 className="footerHeading">DROP US A MESSAGE</h6>
          <p>
            <a className="emailLink" href="mailto:hello@guji-amsterdam.com">
              hello@guji-amsterdam.com
            </a>
          </p>
        </div>
        <div className="footerAccount">
          <h6 className="footerHeading">YOUR ACCOUNT</h6>
          <button className="accountButton">{loginLogoutControls}</button>
        </div>
      </footer>
    </div>
  );
}

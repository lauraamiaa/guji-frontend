import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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
    <div>
      <h1>SIGN UP</h1>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label>EMAIL</Form.Label>
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                placeholder="Choose a password"
                required
              />
            </Form.Group>

            {/* <Form.Group as={Col} controlId="formGridConfirmPassword">
              <Form.Label>CONFIRM PASSWORD</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
                required
              />
            </Form.Group> */}
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>FIRST NAME</Form.Label>
              <Form.Control
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                placeholder="Enter your first name"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>LAST NAME</Form.Label>
              <Form.Control
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                placeholder="Enter your surname"
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridPhone">
            <Form.Label>PHONE</Form.Label>
            <Form.Control
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="+31 12345678"
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={submitForm}>
            CREATE ACCOUNT
          </Button>
        </Form>
      </Container>
    </div>
  );
}

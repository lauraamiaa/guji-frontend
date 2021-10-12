import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  //   const token = useSelector(selectToken);
  const history = useHistory();

  function submitForm(event) {
    event.preventDefault();
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <h1>LOGIN TO ORDER</h1>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>EMAIL</Form.Label>
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>PASSWORD</Form.Label>
            <Form.Control
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Link>FORGOT YOUR PASSWORD?</Link>

          <Button variant="primary" type="submit" onClick={submitForm}>
            LOGIN
          </Button>
          <h2>
            NO ACCOUNT YET? <Link> SIGN UP HERE </Link>
          </h2>
        </Form>
      </Container>
    </div>
  );
}

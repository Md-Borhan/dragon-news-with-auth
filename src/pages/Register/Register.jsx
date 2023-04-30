import React from "react";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useState } from "react";

const Register = () => {
  const { createUserWithEmail, updateUserProfile } = useContext(AuthContext);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    createUserWithEmail(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        console.log(name);
        updateUserProfile(name, photo)
          .then((res) => {
            console.log(res);
            console.log("profile updated");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleTerms = (event) => {
    setAcceptTerms(event.target.checked);
  };
  return (
    <div className="w-25 mx-auto">
      <h2 className="text-center">Please Register</h2>
      <Form onSubmit={handleForm} className="border p-3">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            required
            placeholder="Enter Photo URL"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleTerms}
            type="checkbox"
            label={
              <>
                Accept <Link to="/terms">terms & condition</Link>
              </>
            }
          />
        </Form.Group>
        <Button
          className="w-100"
          disabled={!acceptTerms}
          variant="primary"
          type="submit"
        >
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
          New to Dragon News <Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </div>
  );
};

export default Register;

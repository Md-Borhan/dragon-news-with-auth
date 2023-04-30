import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Quiz from "../Quiz/Quiz";

const RightNav = () => {
  return (
    <div>
      <h4 className="fw-bold">Login With</h4>
      <div className="mb-4">
        <Button variant="outline-primary" className="mb-2 w-100">
          <FaGoogle></FaGoogle> Login with facebook
        </Button>
        <Button variant="outline-secondary" className="w-100">
          <FaGithub></FaGithub> Login with github
        </Button>
      </div>
      <div>
        <h4 className="fw-bold">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            {" "}
            <span className="me-2">
              <FaFacebookF></FaFacebookF>
            </span>{" "}
            Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <span className="me-2">
              <FaTwitter></FaTwitter>
            </span>
            Twitter{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <span className="me-2">
              <FaInstagram></FaInstagram>
            </span>
            Instagram{" "}
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Quiz></Quiz>
    </div>
  );
};

export default RightNav;

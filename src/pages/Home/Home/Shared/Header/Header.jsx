import React, { useContext } from "react";
import Logo from "../../../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container className="my-5">
      <div className="text-center">
        <img src={Logo} alt="Logo" />
        <p className="text-secondary">Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>

      <div className="d-flex p-3 bg-light gap-3">
        <Button variant="danger">Latest</Button>
        <Marquee speed={50} pauseOnHover={true} className="fw-semibold">
          I can be a React component, multiple React components, or just some
          text............. I can be a React component, multiple React
          components, or just some text.
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;

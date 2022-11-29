import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/">HappyFunc</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/face_detect">ImotionDetect</Link>
          <Link to="/roboface">AvatarGen</Link>
        </Nav>
        <Nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link to="/contact">Contact</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;

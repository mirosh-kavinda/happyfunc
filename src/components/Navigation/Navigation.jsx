import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">HappyFunc</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/face_detect">LiveImotionDetect</Nav.Link>
        </Nav>
        <Nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
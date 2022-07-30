import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">HappyFunc</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/random_robo" >Search-Robot</Nav.Link> */}
            <Nav.Link href="/face_detect">Face-Detect</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;

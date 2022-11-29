import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { RoboFace, Navbar, FaceDetect, Contact } from "./components/";
import ParticlesBg from "particles-bg";
class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <ParticlesBg num={20} type="polygon" bg={true} />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/face_detect" element={<FaceDetect />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/roboface" element={<RoboFace />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

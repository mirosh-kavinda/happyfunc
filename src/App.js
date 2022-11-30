import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { Navbar, FaceDetect, Contact,RoboFace } from "./components/";
import ParticlesBg from "particles-bg";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <ParticlesBg  className="particles"num={20} type="polygon" bg={true} />

        <Routes>
          <Route exact path="/" element={<Home />} />
            <Route path="/face_detect" element={<FaceDetect />} />
          <Route path="/contact" element={<Contact />} />
            <Route path="/roboface" element={<RoboFace />} />
        </Routes>
      </div>
    );
  }
}

export default App;

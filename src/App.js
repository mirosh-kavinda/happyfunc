import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImageRec from "./image_recognition/ImageRec";
import RandomRobo from "./random_robo/containers/RandomRobo";
import Navigationbar from "./components/Navigationbar";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navigationbar />
          <Routes>
            <Route exact path="/face_detect" element={<ImageRec />} />
            <Route path="/random_robo" element={<RandomRobo />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

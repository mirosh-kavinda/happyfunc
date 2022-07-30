import React, { Component } from "react";
import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import FaceDetect from "./components/Face-detect/FaceDetect";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Navigationbar />
          <Routes>
            <Route exact path="/face_detect" element={<FaceDetect />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigationbar from "./components/Navigation/Navigation";
import FaceDetect from "./pages/FaceDetect.jsx";
import Contact from "./pages/Contact";

const initialState = {
  input: "",
  imageUrl: "",
  box: {},
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };
  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "/") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Navigationbar
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {isSignedIn ? <Logo /> : null}

        <Router>
          <Routes>
            <Route exact path="/face_detect" element={<FaceDetect />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

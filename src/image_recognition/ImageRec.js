import React, { Component } from "react";
import FaceRecognition from "./FaceRecognition/FaceRecognition";
import Logo from "./Logo/Logo";
import ImageLinkForm from "./ImageLinkForm/ImageLinkForm";
import "./index.css";

const initialState = {
  input: "",
  imageUrl: "",
  box: {},
};

class ImageRecog extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch("https://cryptic-retreat-04860.herokuapp.com/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("hi", response);
        if (response) {
          fetch("https://cryptic-retreat-04860.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({

            }),
          })
            .then((response) => response.json())
       
            .catch(console.log);
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { imageUrl, box } = this.state;
    return (
      <div className="App">
        <div>
          <Logo />
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />
          <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
      </div>
    );
  }
}

export default ImageRecog;

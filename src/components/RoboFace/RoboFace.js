import React, { Component } from "react";
import SearchBox from "./SearchBox";
import { saveAs } from "file-saver";

class RoboFace extends Component {
  constructor() {
    super();
    this.state = {
      imageurl: "",
      searchfield: ``,
      userName: ``,
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { searchfield, userName } = this.state;
    const onNameSubmit = (e) => {
      e.preventDefault();
      this.setState({ userName: searchfield.toLowerCase() });
    };
    const downloadImage = () => {
      saveAs(`https://robohash.org/${userName}?200x200`, "image.png"); // Put your image url here.
    };
    return (
      <>
        {!userName.length ? (
          <div className="roboface">
            <h3 className="f1">Generate Your Robo Face</h3>
            <SearchBox searchChange={this.onSearchChange} />
            <span>
              <button className="btn btn-dark" onClick={onNameSubmit}>
                Generate
              </button>
            </span>
          </div>
        ) : (
          <div className="roboface">
            <h4 className="f1">Hello {userName} This is You !</h4>
            <div className="tc bg-light-green dib br5 pa3 ma2 grow shadow-5">
              <img
                alt="robots"
                src={`https://robohash.org/${userName}?200x200`}
              />
            </div>
            <br />
            <button className="btn btn-dark" onClick={downloadImage}>
              Download!
            </button>
            <a className="btn btn-dark m-4" href="/roboface">
              Try another Name
            </a>
          </div>
        )}
      </>
    );
  }
}

export default RoboFace;

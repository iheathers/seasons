import React from "react";
import ReactDOM from "react-dom";
import ScreenDisplay from "./ScreenDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { latitude: null, errorMessage: null };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  } 

  getRenderContent() {
    if (this.state.latitude && !this.state.errorMessage) {
      return <ScreenDisplay latitude={this.state.latitude} />;
    }

    if (!this.state.latitude && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    return <Spinner message="Please accept location request. Will you?" />;
  }

  render() {
    return <div>{this.getRenderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

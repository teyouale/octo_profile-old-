import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import InputComponent from "./components/inputComponent";
import UserDetail from "./components/userDetail";

class App extends Component {
  state = {
    userName: "",
  };
  onchange = (data) => {
    console.log(data[0]);
    this.setState({ userName: data[0] });
  };

  render() {
    return (
      <Router>
        <Route exact path="/">
          <InputComponent onchange={(e) => this.onchange(e)} />
        </Route>
        <Route path="/:userName">
          <UserDetail />
        </Route>
      </Router>
    );
  }
}

export default App;

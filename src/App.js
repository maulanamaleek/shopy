import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";

class App extends React.Component {
  componentDidMount() {
    alert(`Happy Shopping!`);
  }
  render() {
    return <NavBar />;
  }
}

export default App;

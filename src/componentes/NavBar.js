import React, { Component } from "react";
import "../styles/App.css";
import logo from "../assets/logo.svg";

class NavBar extends Component {



  render() {
   
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

          <img
            src={logo}
            className="App-logo divAppJs"
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          />

        <React.Fragment >
            <a className="navbar-brand" href="https://www.linkedin.com/in/rauljaimes826" target={"_blank"}>@RaulAJaimes</a>
        </React.Fragment>               
      </nav>
    );
  }
}

export default NavBar;

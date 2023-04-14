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

        <div >
            <a className="navbar-brand raul" href="https://www.linkedin.com/in/rauljaimes826" target={"_blank"}  rel="noopener noreferrer">@RaulAJaimes</a>
        </div>               
      </nav>
    );
  }
}

export default NavBar;

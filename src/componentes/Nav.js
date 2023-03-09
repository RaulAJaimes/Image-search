import React, { Component } from "react";
import logo from "./assets/logo.svg";
 

class NavBar extends Component {
    render (){
        return(
            
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <img src={logo} className="App-logo" alt="logo"
                        style={{ width: "50px", height: "50px" }}/>         
                    </div>
                </nav>
            
        )
    }
}

export default NavBar;
import "./styles/App.css";
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";
import logo from "./assets/logo.svg";
import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      termino: '',
      imagenes : [ ]
    };
  }

  consultarApi = () =>{
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=34329471-54c2f2132b2a991f65003e414&q=${termino}&per_page=28`;

    fetch(url)
    .then( respuesta => respuesta.json())
    .then(resultado => this.setState({ imagenes: resultado.hits}))
  }

  datosBusqueda = (termino) => {
    this.setState({ 
      termino
      }, () => { 
        this.consultarApi();
    });    
  }

  render() {
    return (
      <div className="container">    
        <div className="container-fluid" >
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>      
        <React.Fragment className="row justify-content-center" > 
          <Resultado
          imagenes = { 
            this.state.imagenes }/>
        </React.Fragment>       
      </div>
    );
  }
}

export default App;



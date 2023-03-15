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
      imagenes : [ ],
      pagina: ''
    };
  }

  consultarApi = () =>{
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=34329471-54c2f2132b2a991f65003e414&q=${termino}&per_page=28&page=${pagina}`;

    fetch(url)
    .then( respuesta => respuesta.json())
    .then(resultado => this.setState({ imagenes: resultado.hits}))
  }

  datosBusqueda = (termino) => {
    this.setState({ 
      termino : termino,
      pagina: 1
      }, () => { 
        this.consultarApi();
    });    
  }

  scrollPag = () => {
    const elemento = document.querySelector('.container');
    elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  

  pagAnterior = () =>{
        //leer state pag actual
        let pagina = this.state.pagina;
        //si es la pag 1, no ir atras
        if(pagina === 1) return null;
        //resta 1 a la pag actual
        pagina-=1;
        //agregar cambio al state
        this.setState({
          pagina
        }, () => { 
          this.consultarApi();
          //lleva al cargar la pag al inicio de la pag
          this.scrollPag();
          });
        //console.log(pagina);
  };

  pagSiguiente = () =>{
    //leer state pag actual
    let pagina = this.state.pagina;
    //sumar 1 a la pag actual
    pagina+=1;
    //agregar cambio al state
    this.setState({
      pagina
    }, () => { 
      this.consultarApi();
      //lleva al cargar la pag al inicio de la pag
      this.scrollPag();
      });
    //console.log(pagina);
  };


  render() {
    return (
      <div className="container">    
        <div className="App-header" >
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>      
        <React.Fragment > 
          <Resultado 
              imagenes = { 
                this.state.imagenes }
                pagAnterior={this.pagAnterior}
                pagSiguiente={this.pagSiguiente}
          />
        </React.Fragment>       
      </div>
    );
  }
}

export default App;



import "./styles/App.css";
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";
import NavBar from "./componentes/NavBar";
import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      termino: '',
      imagenes : [ ],
      pagina: 1,
      total: 0
    };
  }

  consultarApi = () =>{
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=34329471-54c2f2132b2a991f65003e414&q=${termino}&per_page=28&page=${pagina}`;

    fetch(url)
    .then( respuesta => respuesta.json())
    .then(resultado => this.setState({ 
      imagenes: resultado.hits,
      total: resultado.total
    }))
  }

  datosBusqueda = (termino) => {
    if (!termino.trim()) { // verifica si el término de búsqueda está vacío
      return;
    }
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
    //leer state pag actual y total de resultados
    let pagina = this.state.pagina;
    const total = this.state.total;
    //calcular máximo de páginas posibles
    const maxPaginas = Math.ceil(total / 28);
    //si la pag actual es igual al máximo de páginas, no avanzar más
    if(pagina === maxPaginas) return null;
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
      
      <div>       
             <NavBar/> 
        <body className="justify-content-md-center mt-5">
              <Buscador 
              datosBusqueda={this.datosBusqueda} 
              />                      
          <section className="container" > 
            <Resultado 
                imagenes = { 
                  this.state.imagenes }
                  pagAnterior={this.pagAnterior}
                  pagSiguiente={this.pagSiguiente}
            />
          </section>  
        </body>             
      </div>
    );
  }
}


export default App;



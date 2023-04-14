import React, { Component } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.busquedaRef = React.createRef();
    this.state = {
      error: false,
      cargando: false
    };
  }

  obtenerDatos = (e) => {
    e.preventDefault();

    if (this.busquedaRef.current.value.trim() === '') {
      this.setState({
        error: true
      });
      return;
    }

    this.setState({
      error: false,
      cargando: true
    });

    console.log(this.busquedaRef.current.value);
    const termino = this.busquedaRef.current.value;
    this.props.datosBusqueda(termino);

    this.busquedaRef.current.value = '';
    
    setTimeout(() => {
      this.setState({
        cargando: false
      });
    }, 1000);
  }

  render(){
    const { error, cargando } = this.state;

    return(
      <form onSubmit={this.obtenerDatos} className="container">
        <div className="container row mt-0"  >                    
          <h5 style={{color: '#53C1BB'}} className="lead text-center">
            Buscador de Imagenes
          </h5>                    
          <div className="form-group col-md-10 mt-1 mb-2">                        
            <input ref={this.busquedaRef} type={'text'} 
              className='form-control form-control-lg' 
              placeholder="Buscar imagen"
            />
          </div>
          <div className="form-group col-md-2 mt-2 mb-2">                        
            <button type="submit" className='bn_primary'>
              {cargando ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Buscar'} <span role="img" aria-label="search">&#x1F50D;</span>
            </button>
          </div>
          {error ? <div className="alert">Escriba una palabra. <span role="img" aria-label="pointing-up">&#x1F446;</span></div> : null}
        </div>
      </form>
    );
  }
}

export default Buscador;


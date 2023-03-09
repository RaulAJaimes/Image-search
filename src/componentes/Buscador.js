import React, { Component } from "react";

class Buscador extends Component {
    busquedaRef = React.createRef();

    obtenerDatos = (e) => {

    }

    render(){
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <h5 style={{color: '#53C1BB'}}>Buscador de Imagenes</h5>
                    <div className="form-group col-md-8">                        
                        <input ref={this.busquedaRef} type={'text'} className='form-control form-control-lg' placeholder="Buscar imagen"/>
                    </div>
                    <div className="form-group col-md-4">                        
                        <input type={'submit'} className='btn btn-secondary' value={'Buscar'}/>
                    </div>
                </div>
            </form>
         );
    }
}

export default Buscador;
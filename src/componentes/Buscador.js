import React, { Component } from "react";

class Buscador extends Component {
    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();

        console.log(this.busquedaRef.current.value);
        //se toma el valor del input
        const termino = this.busquedaRef.current.value;
        //se envia al componente principal
        this.props.datosBusqueda(termino);
    }

    render(){
        return(
            <form onSubmit={this.obtenerDatos} style={{ height: "150px" }}>
                <div className="container row"  >                    
                    <h5 style={{color: '#53C1BB'}}
                     className="lead text-center" >
                        Buscador de Imagenes
                    </h5>                    
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
import React from "react";

const Paginacion = props => {
    const bn ={
        button: {
        font: 'normal normal bold 20px impact',
        fontWeight:'700',
        padding: '0 20px', 
        borderRadius: '16px',
        border: '2px solid #dff0f2',
        verticalAlign: 'middle',
    }
}

    return (
        <div className="py-2 text-center" >
            <button onClick={props.pagAnterior} 
                type="button"  
                className="btn btn-info" 
                style={{...bn.button, margin:'0 10px'}} >
                    &larr;  
                </button>
                <React.Fragment>
                    Pag
                </React.Fragment>
            <button onClick={props.pagSiguiente}
                type="button"  
                className="btn btn-info" style={{...bn.button, marginLeft:'10px'}} >
                     &rarr;
                </button>
        </div>
    );
}

export default Paginacion;







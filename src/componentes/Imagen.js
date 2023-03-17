import React from "react";


const Imagen =(props)=>{

    const { largeImageURL, likes, previewURL, views, tags } = props.imagen;

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card mb-2" style={{backgroundColor: '#05145B'}} >
                <img src={previewURL} alt={tags} className="card-img-top"  style={{border: '1px solid #dff0f2'}} />
                <div className="card-body text-center" >
                    <p className="card-text" > &#x1F44D; {likes} </p>
                    <p className="card-text" > {views} &#x1F440; </p>

                    <a href={ largeImageURL } target='_blank' 
                        rel="noopener noreferrer"
                       className="btn btn-secondary">
                    Ver Imagen
                    </a>
                </div>
            </div>
        </div>    
    )
}

export default Imagen;
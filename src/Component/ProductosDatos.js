import React, {useState} from "react"
import { Link } from "react-router-dom"


function ProductosDatos(props){



    return(
        
                <div className="datosContenido" style={{backgroundImage: `url(${props.imagen})`}}>
                    <p className ="dato nombre"><h2>{props.nombre}</h2></p>
                    <p className= "dato precio"><h3>${props.precio}</h3></p>
                    
                    <button>Comprar</button>
                    <button><Link to={"/Productos/" + props.id}>Ver detalle</Link></button>
                    

                    

                    

                </div>
    

        
    )
}

export default ProductosDatos;
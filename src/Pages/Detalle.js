import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {getById} from "./../Service/ProductosService"


function Detalle(){
    const {id} = useParams()
    const [productos, setProductos] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(

        ()=>{
                
                   // fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod#options")
                   // .then(res=>res.json())
                   // .then(data=>{
                   //     console.log("data", data)
                   //     setListaProductos(data.results)
                   //     setLoading(false);
                   // })
       
                   const request = async ()=>{
                       try{
                           
                           const answer = await getById(id)
                           setProductos(answer.data)
                           setLoading(false);
                           console.log(answer)
       
                       }catch(error){
                           console.log(error)
                           setLoading(false)
                       }
                   }
       
                   request()
                   
                },[id]
    ) 


    if(loading){
        return(
            <div>Cargando...</div>
        )
    }else{
        return(
        <div>
            {/* Lista */}
                <div className= "listaCaja">
                    <ul>
                        <img className ="detalleImagen" src={productos.pictures[0].url}/>
                        <li className ="detalleTitulo"> <h1>{productos.title}</h1></li>
                        <li className ="detallePrecio"> <h2>${productos.price}</h2></li>
                        <li className="detalleBoton"><button>Comprar</button></li>
                    </ul>
                </div>
     

            
            {/* Fin Lista */}

        </div>
        )

    }


}

export default Detalle
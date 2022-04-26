import React,{useState, useEffect} from "react";
import ProductosDatos from "./ProductosDatos"
import {getAllProducts} from "./../Service/ProductosService"

function Productos(){

    const [loading, setLoading] = useState(true)

    const [listaProductos, setListaProductos] = useState([])
    const [response, setResponse] = useState([{}])
    const [buscar, setBuscar] = useState("ipod")
  

     useEffect(
         ()=>
         {
            // fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod#options")
            // .then(res=>res.json())
            // .then(data=>{
            //     console.log("data", data)
            //     setListaProductos(data.results)
            //     setLoading(false);
            // })

            const request = async ()=>{
                try{
                    const answer = await getAllProducts(buscar)
                    setListaProductos(answer.data.results)
                    setResponse(answer.data)
                    setLoading(false);
                    console.log(answer)

                }catch(error){
                    console.log(error)
                } 
            }

            request()
        },[buscar]
     )

    const cambiarProducto =()=>{
       
    }


    if(loading){
        
        return(
            <div><h1 className ="carga">cargando...</h1></div>
    )
    }else{
        return(
            <div>

                

                {listaProductos.map(lista=><ProductosDatos nombre={lista.title} 
                                                           precio={lista.price}
                                                           sku={lista.sku}
                                                           imagen = {lista.thumbnail}
                                                           cantDisponible={lista.cantDisponible}
                                                           id = {lista.id}/>)}
                
               
            </div>
        )
    }
}

export default Productos;
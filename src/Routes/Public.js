import Home from "../Pages/Home"
import Registro from "../Pages/Registro"
import Login from "../Pages/Login"
import Detalle from "../Pages/Detalle"

import {
    Routes,
    Route} from "react-router-dom"


function Public(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Productos/:id" element={<Detalle/>}/>
        </Routes>

    )

}

export default Public


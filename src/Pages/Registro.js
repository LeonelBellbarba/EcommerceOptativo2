import React, {useState, useEffect} from "react"

function Registro(){
    return(
    <div className="registroCaja">
        <ul>
            <h1 className="registroTitulo">Registrarse</h1>
            <li className="registro"><input className="registroInput" placeholder= "Nombre" required/></li>
                
            <li className="registro"><input className="registroInput" placeholder= "Apellido" required/></li>
            <li className="registro"><input className="registroInput" placeholder= "Password" type="password" required/></li>
            <li className="registro"><input className="registroInput" placeholder= "Repetir Password" type="password" required/></li>

            <button className="registroBoton">Entrar</button>
        </ul>
    </div>
    )
}

export default Registro
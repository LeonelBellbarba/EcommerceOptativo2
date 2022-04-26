import React, {useState, useEffect} from "react"

function Login(){
    return(
        <div className="registroCaja">
        <ul>
            <h1 className="registroTitulo">Login</h1>
            <li className="registro"><input className="registroInput" placeholder= "Nombre" required/></li>
            <li className="registro"><input className="registroInput" placeholder= "Password" type="password" required/></li>

            <button className="registroBoton">Entrar</button>
            

        </ul>
    </div>
    )
}

export default Login 
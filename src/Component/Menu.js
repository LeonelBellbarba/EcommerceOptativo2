import {Link} from "react-router-dom"

function Menu(){
    return(
        <>  
            <ul className= "botoneraCaja">
                <li className= "botonera"><Link to= "/" className= "botonera"><h2>Home</h2></Link></li>
                <li className= "botonera"><Link to= "/registro" className= "botonera"><h2>Registro</h2></Link></li>
                <li className= "botonera"><Link to= "/login" className= "botonera"><h2>Login</h2></Link></li>
            </ul>
        </>

    )
}
 
export default Menu
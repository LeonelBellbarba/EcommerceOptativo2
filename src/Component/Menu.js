import {Link} from "react-router-dom"

function Menu(){
    return(
        <>  
            <ul className= "botoneraCaja">
                <li className= "botonera"><Link to= "/"><h2>Home</h2></Link></li>
                <li className= "botonera"><Link to= "/registro"><h2>Registro</h2></Link></li>
                <li className= "botonera"><Link to= "/login"><h2>Login</h2></Link></li>
            </ul>
        </>

    )
}
 
export default Menu
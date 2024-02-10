import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataShare } from "../../navigation Stack/navigation"




const Navbbar=()=>{

   const sharedcontext=useContext(DataShare)
   console.log(sharedcontext)
   const {name}=sharedcontext
    
    return(
        <>
        <nav className="navbar navbar-expand-sm bg-light">

<div className="container-fluid" style={{backgroundColor:"grey",padding:10,fontWeight:600}}>
  
  <ul className="navbar-nav" >
    <li className="nav-item">
    <Link to="/" style={{textDecoration:"none",color:"black"}}>{name}Home</Link>
    </li>
    <li className="nav-item">
    <Link to="/product"style={{textDecoration:"none",color:"black",margin:10}} >products</Link>
    </li>
    <li className="nav-item">
    <Link to="/about"style={{textDecoration:"none",color:"black",margin:10}}>About</Link>
    </li>
    <li className="nav-item">
    <Link to="/settings"style={{textDecoration:"none",color:"black",margin:10}}>Settings</Link>
    
    </li>
  </ul>
</div>

</nav>
        </>
    )
}
export default Navbbar
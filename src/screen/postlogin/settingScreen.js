import { UNSAFE_useScrollRestoration } from "react-router-dom"
import Navbbar from "../../components/navBar/navBar"
import Footer from "../footer"
import { useContext } from "react"
import { DataShare } from "../../navigation Stack/navigation"




const SettingScreen=()=>{
    const{darkTheme}=useContext(DataShare)
    return(
        <>
        <Navbbar></Navbbar>
        <div style={{height:100,width:100,backgroundColor:darkTheme?"black":"red"}}>

        </div>
        <h1> iam form setings</h1>
        <Footer></Footer>
        </>
    )
}
export default SettingScreen
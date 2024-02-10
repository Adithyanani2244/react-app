import { useContext } from "react"
import Navbbar from "../../components/navBar/navBar"
import Footer from "../footer"
import { DataShare } from "../../navigation Stack/navigation"







const AboutScreen=()=>{
    const  data =useContext(DataShare)
    const {name,darkTheme}=data
    return(

        <>
        <Navbbar/>
        <div style={{height:100,width:100,backgroundColor:darkTheme?"black":"red"}}>

        </div>
        <h1>
        
             i am from about
        </h1>
        <h1> i am managed {name}</h1>
        <Footer></Footer>
        </>

    )
}
export default AboutScreen

import { useContext } from "react"
import Card1 from "../../components/bootstrap/card"
import Bootstarp from "../../components/bootstrap/first-componenet"
import Navbbar from "../../components/navBar/navBar"

import Footer from "../footer"
import { DataShare } from "../../navigation Stack/navigation"




const Product=()=>{
  const{darkTheme}=useContext(DataShare)
    return(
        <>
        <Navbbar></Navbbar>
        <div style={{height:100,width:100,backgroundColor:darkTheme?"black":"red"}}>

        </div>
        <h1> i am form Product</h1>
        {/* <div>
        
<div class="container-fluid p-5 bg-primary text-white text-center">
  <h1>Our Products</h1>
  <p>have more fun by ur choice</p> 
</div>
<div>
    

</div>
  
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
     <Card1></Card1>
    </div>
    <div class="col-sm-4">
     <Card1></Card1>
    </div>
    <div class="col-sm-4">
     <Card1></Card1>
    </div>
  </div>
</div>
        </div> */}
        <Bootstarp></Bootstarp>
        <Footer></Footer>
        </>
    )
}
export default Product
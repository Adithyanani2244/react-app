import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../../components/loderspinner/loader"

import Footer from "../footer"
import Navbbar from "../../components/navBar/navBar"




const ViewProduct=()=>{
    
    const route=useParams()
    const [details,Setdeatils]=useState({})

    useEffect(()=>{

   Eachproduct(route.id)

    },[route.id])
    const Eachproduct=(id)=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
      if(response.status===200){
        Setdeatils(response.data)
      }
      else{
        alert("req failed")
      }
        })
            
            
    }

    return(
        <>
        <Navbbar></Navbbar>
        
        {
            Object.keys(details).length>0
            ?
            <>


  <div  style={{padding:200,fontWeight:600,fontFamily:"cursive",}}>
  <center>
<div className="card" style={{width:400,color:"black",backgroundColor:"aqua",border:"2px solid black",borderRadius:"25px",}}>
 <center> <img className="card-img-top" src={details.image} style={{width:100}} alt="Card image"></img></center>
  <div className="card-body">
    <h4 className="card-title">category : {details.category}</h4>
    <p className="card-text" > description : {details.description}</p>
    <p className="card-text">rating : {details.rating.rate}</p>
    
  </div>
</div>
</center>
</div>


            {/* <div style={{color:"red",margin:10,
            fontFamily:"cursive",}}>
            <center><img src={details.image} style={{width:100}}></img>
            <h1>category : {details.category}</h1>
            <h2> description : {details.description}</h2>
            <h3>rating : {details.rating.rate}</h3>
             </center>
            </div> */}
        
            </>
            :
            <h2><Loader></Loader></h2>
        }
  <Footer></Footer>
        
        
        </>
    )
}
export default ViewProduct
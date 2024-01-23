import { Component } from "react"
import pic from"./profile bootstarp.jpg"



const Card1=(navyva)=>{
  console.log(navyva);
    return(
        <>
        
            <>
            <div className="card" style={{width:'300px'}}>
  <img className="card-img-top" src={pic}/>
  <div className="card-body">
    <h4 className="card-title" >{navyva.members.name}</h4>
    <p className="card-text">{navyva.members.post}</p>
    <a href="#" className="btn btn-primary">See Profile</a>
  </div>
</div>
            </>
        
        </>
        
        
   
    )
}
export default Card1



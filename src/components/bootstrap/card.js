import { Component } from "react"
import pic from"./profile bootstarp.jpg"



const Card1=(props)=>{
  console.log(props);
    return(
        
        
            <>
            <div className="card" style={{width:'300px'}}>
  <img className="card-img-top" src={pic}/>
  <div className="card-body">
    <h4 className="card-title" >{props.name}</h4>
    <p className="card-text">{props.id}</p>
    <p className="card-text">{props.salary}</p>
    <a href="#" className="btn btn-primary">{props.job}</a>
  </div>
</div>
            </>
        
        
        
        
   
    )
}
export default Card1



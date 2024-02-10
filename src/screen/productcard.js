import { Component } from "react";
import img1 from "./images.jpeg"




class Productcard extends Component {
    render(){
        return(
            <>
            <div className="card" style={{width:200}}>
  <img className="card-img-top" src={img1} alt="Card image"></img>
  <div className="card-body">
    <h4 className="card-title">John Doe</h4>
    <p className="card-text">Some example text.</p>
    <a href="#" className="btn btn-primary">See Profile</a>
  </div>
            </div>
            </>
        )
    }
}
export default Productcard
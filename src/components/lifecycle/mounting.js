import { Component } from "react";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
import { findRenderedDOMComponentWithTag } from "react-dom/test-utils";
import Loader from "../loderspinner/loader";



class Mounting extends Component{

    constructor(){
        super()
        this.state={
            message:"hi guys",
            color:"red",
            posts:[]
        }
    }

    static getDerivedStateFromProps(props){
console.log("getDerivedStateFromProps")
return{color:props.color}
        
    }
    componentDidMount(){
     

        document.title="MyFirstApp"

        fetch("https://fakestoreapi.com/products")
         .then(response=>response.json())
         .then(response=>{
        
            console.log(response)
            this.setState({

                posts:response
            })
         })





    }




    render(){
        console.log("render",this.state.posts)
        return(
            <>
            <h1 style={{color:this.state.color}}>Mounting 
                {this.state.message}
            </h1>
            {
                this.state.posts.length>0?
                <>
                {
                    this.state.posts.map((eachposts)=>
                    <>
                   
                    <h2>{eachposts.id}</h2>
                    <h3>{eachposts.title}</h3>
                    
                 </>

                    )
                }
                </>
                :
                <h2><Loader></Loader></h2>
            }
            </>

        )
    }
}
export default  Mounting
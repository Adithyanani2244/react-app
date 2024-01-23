// function Button(){
//     return(
//         <>
//         <button><h1>hello my name is Adithya</h1></button>
//         </>
//     )
// }
// export default Button
// const Arrow=(props)=>{
//     return(
//         <button onClick={()=>alert("hi iam ")}>Click me</button>
//     )
// }
// export default Arrow

import { Component } from "react";



class Vijay extends Component  {
    //object way of craetion 
    state={
        message1:"subscribe",
        message2:"subscribed  thanx",
        isSubcribed : false
    }
    
  
    handle=()=>{
       this.setState({
        message:"subscribed thanx",
        isSubcribed:!this.state.isSubcribed
       },()=>{
        console.log(this.state.isSubcribed);
       }
       )
    }

    render(){
        return(
            <>
            <div><h1>Vijay</h1></div>
            
            <button onClick={this.handle}>{this.state.isSubcribed?this.state.message2:this.state.message1}</button>
            
            {
                this.state.isSubcribed?<h1>thanks for subscribing</h1>:<h1>plz subscribe</h1>
            }
            </>
            
            
            
            
            
            
            
        )
       
        

    }

    
}
export default Vijay

// state --> state is nothing but its hold sthe data of an component. immutable, 
// way of creating a stste ---> obj & constructor 
// set state --> it is used change the data of a component 
// its uses two arrguments 
// 1 . obj , 2 an arrow function 
// props -->  props is nothing but it is an obj which is used to give additional imfo about a componwent 
//  mutable , user defined 








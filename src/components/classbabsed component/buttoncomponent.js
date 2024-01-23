

import { Component } from "react";

// class Buttonclass1 extends Component{
//     state={
//         message1 : " subscribe",
//         isSubscribed : false,
//         message2 : "subscribed thanks"
//     }

//     subscribe=()=>{
//         // alert("subscribed")
//         this.setState(
//             {
//             message:"subscribed thanks",
//             isSubscribed :!this.state.isSubscribed
//         },
//         ()=>{
//            console.log(this.state.isSubscribed)

//         })
//     }
//     render(){
//         return(
//             <>
//             <button onClick={this.subscribe}>{this.state.isSubscribed?this.state.message2:this.state.message1}</button>
//      {
//         this.state.isSubscribed?
//         <>
//         <h1>thanks for subscribing</h1>
       
        
//         </>:
//         <><h1>plz subscribe</h1>
        
//         </>
        
//      }


//             </>
//         )
//     }
// }
// export default Buttonclass1





 class Light extends Component{
    state={
        message1 : " subscribe",
        theme :"light"
        
        
    }

    color=()=>{
        const color2 = this.state.theme ==="light" ?"dark":"light";
        this.setState({theme:color2})
        

    }
        
    render(){
        const {message1 , theme}= this.state
      const buttonStyle ={
        background : this.state.theme==="light"? "#ffffff": "#333333",
        color : this.state.theme==="light"?"#333333":"#ffffff"
      }
        return(
            <>
            <button style={buttonStyle} onClick={this.color}>{this.state.message1}  </button>
   



            </>
        )
    }
}
export default  Light




import { Component } from "react";
import Unmounting from "./unmounting";



class Updatephase extends Component{
  constructor(){
    super()
    this.state={
        counter:0,
        color:"red"
    }
  }

  handleClick=()=>{
    this.setState({
        counter:this.state.counter+1
    })
  }

  static getDerivedStateFromProps(props){
    console.log("getDerivedStateFromProps")
    return{color:props.favcolor}
  }

  getSnapshotBeforeUpdate(props,state){
    console.log(state)
    return null
  }

  componentDidUpdate(){
    document.title= `my first appp${this.state.counter}`
  }

    render(){
    console.log("render")
        return(
            <>
            <h1>Ubdating phasee</h1>
            <h2 style={{color:this.state.color}}>{this.state.counter}</h2>
            <button onClick={this.handleClick}> Increment</button>
             </>
        )
    }
}
export default Updatephase




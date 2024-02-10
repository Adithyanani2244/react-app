import { isVisible } from "@testing-library/user-event/dist/utils";
import { Component, PureComponent } from "react";



class Unmounting extends Component{
    constructor(){
        super()
            this.state={
            isVisible:false
            }

    }

    handleVisible=()=>{
        this.setState({
            isVisible:!this.state.isVisible
        })
    }
    render(){
        return(
       <>
       <h2>Unmounting</h2>
       <button onClick={this.handleVisible} > Click me</button>
       {
        this.state.isVisible 
        ?
        <Child></Child>
        :
        <h2>i am hidden</h2>
       }
       </>
        )

    }
}
export default Unmounting

class Child extends PureComponent{
    render(){
        return(
            <>
            <h1> i am visible</h1>
            <h2>i am child</h2>
            </>
        )
    }
}
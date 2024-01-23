import { Card } from "react-bootstrap"
import Card1 from "./card"





const Bootstarp =()=>{
  const profile=[{
    name:"nithin", post:"ceo", color:"red",
    
  },{
    name:"adithya", post:"manger", color:"blue"
  },
  {name:"cherry", post:"employe", color:"green"}
]
  

    return(
        <>
<div className="container-fluid p-5 bg-primary text-white text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p>
</div>
<div className="container mt-5">
  <div className="row">
    <div className="col-sm-4">
      <Card1 members={profile[0]} ></Card1>
    </div>
    <div className="col-sm-4">
    <Card1 members={profile[1]}></Card1>
    </div>
    <div className="col-sm-4">
    <Card1 members={profile[2]}></Card1>
    </div> 
  </div>
</div>
</>
    )
}
export default Bootstarp

import Card1 from "./card"





const Bootstarp =()=>{
  const profile=[{
    name:"nithin",
     post:"ceo",
      color:"red",
    id:1,
    salary:"100k"
  },{
    name:"adithya", 
    post:"manger", 
    color:"blue",
    id:2,
    salary:"100k"
  },
  {name:"cherry",
   post:"employe",
    color:"green"
  ,id:3,
  salary:"100k"
}
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
     
      <Card1 name="nani" id="1" job="developeer"></Card1>
    </div>
    <div className="col-sm-4">
   
    <Card1 name ="adithya" id="2" job="manager"></Card1>
    </div>
    <div className="col-sm-4">
    
    <Card1   name = "varun" id="3" job="hr"></Card1>
    </div> 
  </div>
</div>


{/* {
  profile.map((details)=><Card1 data={details}></Card1>)
} */}
</>
    )
}
export default Bootstarp
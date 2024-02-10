import { paste } from "@testing-library/user-event/dist/paste"
import { useRef, useState } from "react"





const Uncontrolled =()=>{


    const  Emailref=useRef()
    const Password=useRef()
    const [err,setErr]=useState("")

    const Handlesubmit=(event)=>{

    event.preventDefault()

    console.log(Emailref.current.value)
    console.log(Password.current.value)
    
    if (Password.current.value.length<3){
        alert(" plz enter more than 3 charecters ")
    }
    else{
        const userInfo={
          username : Emailref.current.value,
          password : Password.current.value
        }
        Server(userInfo)
    }
   
    }

    const Server=(data)=>{
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data

            )
          })
          .then(res => res.json())
          .then(res=>{
             if(res.message){
                alert(res.message)
                setErr(res.message)
             }else{
                alert("sucessful login")
                setErr("")
             }
          })
         
          
    }
    return(
  <>
 <center>
  <form onSubmit={Handlesubmit} style={{width:300}}>
  <div className="mb-3 mt-3">
    <label  className="form-label">Email:</label>
    <input text="email" className="form-control" id="email" placeholder="Enter email" name="email" ref={Emailref}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" ref={Password}/>

  </div>
  <div className="form-check mb-3">
    {/* <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember"/> Remember me 
    </label> */}
  </div>
 {
    err ?
    <h2 style={{color:"red"}}>{err}</h2>
    :
    null
 }
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</center>


  </>
        
    )
}
export default Uncontrolled
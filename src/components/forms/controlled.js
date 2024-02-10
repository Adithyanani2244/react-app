import { useState } from "react"






const Controlled =()=>{

 
  const [userName,Setusername]=useState("")
  const [userNameerr,setUsernameerr]=useState("")
  const [Password, setPassward]=useState("")
  const [passwordErr,setpasswordErr]=useState("")


  const userNamehandler=(event)=>{

    Setusername(event.target.value)
    
    if(event.target.value.length>10){
      setUsernameerr("enter below 10 characters")
    }else{
      setUsernameerr("")
    }

      
  }
  const Passwordhandler=(event)=>{
    setPassward(event.target.value)
    console.log(event.target.value)
    const result=validatePassword(event.target.value)
    if(result){
      console.log("password vaild")
      setpasswordErr("")
    }
    else{
      setpasswordErr("password invalid ")
      
    }
    
  }
  
 

  const username = "k3llydev";
function validatePassword(psw)
{
  let msg = true

  switch (true) {
  case  (psw.length < 8 || psw.length > 13):
    msg = false
    break
  case  (!(/[0-9]/.test(psw))):
    msg = false
    break
  case (psw == psw.toLowerCase()) || (psw == psw.toUpperCase()):
    msg = false
    break
  case ( psw.includes(username)):
    msg =false
    break
  }
  return msg
}


const Submithandler=(event)=>{
  event.preventDefault()

   alert("login sucees")
  const userDetails ={
     userName,
     Password
  }
   console.log(userDetails,"userDetails")
}
    return(
        <>
        <center>
          <div>
         <form  style={{width:400}} onSubmit={Submithandler}>
  <div className="mb-3 mt-3">
    <label  className="form-label">Email:</label>
    <input text="email" className="form-control" id="email" placeholder="Enter email" name="email" value={userName} onChange={userNamehandler}/>
    {
      userNameerr
      ?
      <h3 style={{color:"red"}}>{userNameerr}</h3>
      :
      null
    }
  </div>
  <div className="mb-3">
    <label className="form-label">Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" value={Password} onChange={Passwordhandler} />
 
   {
    passwordErr ? 
    <h3 style={{color:"red"}}>{passwordErr}</h3>
    :
    null
   }
  </div>
  
  <div className="form-check mb-3">
  
  </div>
  {
    userNameerr || passwordErr ? null :
    <button type="submit" className="btn btn-primary">Submit</button>

  }
  


</form>
</div>
</center>
        
        </>
    )
}
export default Controlled
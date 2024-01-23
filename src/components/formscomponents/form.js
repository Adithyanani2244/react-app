function Form(){
    const style={
        backgroundColor:"black",
        
        fontSize:"200",
        color:"red"
    }
    return(
        <div>
        <div>
            <form style={style}>
                <div>
                <label for="fname" >First Name : </label>
                <input type="text" id="fname" name="fname"></input><br></br>
                </div>
               <br></br>
                <div>
                    <label for="sname">Last Name : </label>
                <input for="text" id="sname" name="sname"></input>
                </div>
                <br></br>
                <div>
                    <label for="email">email    : </label>
                    <input text="email" id="email" name="email"></input>
                </div>
                <br></br>
            
            
            <div>
                <label for="username">UserName : </label>
                <input type="text" id="username" name="username"></input>
            </div>
            <br></br>
            <div>
                <label for="password"> Password : </label>
                <input type="password" id="password" name="password"></input>
            </div>
            <br></br>
            <div>
                <button >Submit</button>
            </div>
            <hr></hr>

            </form>
        </div>
        </div>
    )
}
 export default Form
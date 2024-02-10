import { useEffect, useState } from "react"




const Useeffect2=()=>{

    const[count,Setcount]=useState(0)
    const[count1,Setcount1]=useState(20)

    useEffect(()=>{
        Updatecounter()

    },[count,count1])

    const handleFuntion=()=>{
        Setcount(count+1)
    }
    const handleFuntion1=()=>{
        Setcount(count-1)
    }

    const Updatecounter=()=>{
       
       document.title = `Counter value ${count}`
    }
    return(<>
<h1>{count}</h1>
        <h1> useEffect2 {count}</h1>
        {/* <h1> useEffect2 {count1}</h1> */}

        <button onClick={handleFuntion}> click me to increase</button>
        <button onClick={handleFuntion1}> click me to decrease</button>
        </>
    )
}
export default Useeffect2
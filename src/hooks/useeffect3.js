import { useEffect } from "react"





const Useeffect3=()=>{


    useEffect(()=>{

        addEvent()
        return ()=>{
            removeEvent()
        }
    },[])


    const addEvent=()=>{
        document.addEventListener("mousemove",mouseCapture)
    }

    const removeEvent=()=>{
        document.removeEventListener("mousemove",mouseCapture)
    }

    const mouseCapture=(event)=>{
      

        console.log(event.clientX,"Xpostion capture")
        console.log(event.clientY,"Ypostion capture")
        
    }


    return(
        <>
      
      <h1>useeffect3</h1>
        </>
    )
}
export default Useeffect3
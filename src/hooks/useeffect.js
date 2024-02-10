import axios from "axios";
import { useEffect, useState } from "react"
import Loader from "../components/loderspinner/loader";
import { Listcomponent } from "../screen/postlogin/homeScreen";




const Useeffect1 =()=>{
    const[Productlist,setProductlist]=useState([])

useEffect(()=>{
    Fetchdata()
},[])
 

const Fetchdata=()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(response=>{
        if(response.status===200){
            setProductlist(response.data)
        }
    })
    
}
    return(
        <>
        <h1>
            Useeffect
    
            </h1>
            {
                Productlist.length>0 ? Productlist.map(product=><Listcomponent  key={product.id} data={product}/>)
                :<Loader> </Loader>
            }
        
        </>
    )
}
export default Useeffect1


// export const Productlisting=({data})=>{
//     return(
//         <>
//           <button > {data.id}</button>
//         <h1>{data.title}</h1>
//         <h2> price : {data.price} Rs /-</h2>
//         <img src={data.image} alt="img" style={{width:100}}></img>
//         <h3> {data.description} </h3>
//         <h3> {data.category} </h3>
//         <h3>{data.rating.rate}</h3>
//         <h3>count:{data.rating.count}</h3>
      
        
//         </>
//     )
//  }
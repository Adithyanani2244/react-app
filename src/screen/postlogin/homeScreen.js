
import { useContext, useEffect, useState } from "react"
import Navbbar from "../../components/navBar/navBar"
// import Useeffect1 from "../../hooks/useeffect"
// import Useeffect2 from "../../hooks/useeffect2"
// import Useeffect3 from "../../hooks/useeffect3"
import Footer from "../footer"
import axios from "axios"
import Loader from "../../components/loderspinner/loader"
import { Link } from "react-router-dom"
import Useeffect3 from "../../hooks/useeffect3"
import { DataShare } from "../../navigation Stack/navigation"









const HomeScreen=()=>{
   
        const[Productlist,setProductlist]=useState([])
        const [totalPrice,setTotalprice]=useState(null)
        const{darkTheme,chageTheme}=useContext(DataShare)
    
    useEffect(()=>{
        Fetchdata()
    },[])
     
    
    const Fetchdata=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            if(response.status===200){
                const newresult=response.data.map(eachObj=>{
                    return{...eachObj,count:1,total:eachObj.price}
                })
                setProductlist(newresult)
                const result = Sumofprice(response.data)
                setTotalprice(result)
                console.log(result);
            }
        })


        
    }
const Incrementhandle=(data)=>{
    console.log(data)
    console.log(Productlist)

}

    //caluculation of sum of property values
    const Sumofprice=(arrofobjects)=>{
        const result = arrofobjects.reduce((intial,eachObject)=>intial+eachObject.price,0)
        return result
    }

    const Controltheme=()=>{
        chageTheme()

    }
    return(
        <>
        <Navbbar></Navbbar>

        <div style={{height:100,width:100,backgroundColor:darkTheme?"black":"red"}}>

        </div>
        <button onClick={Controltheme}>change chageTheme</button>
        <h1>Total value of products : {totalPrice}</h1>
        {
                Productlist.length>0 ? Productlist.map(product=><Listcomponent key={product.id} data={product} handleincrement={Incrementhandle}/>)
                :<Loader></Loader>
            }
       
       
        <div>
            
            
        </div>
       <Footer></Footer>
        </>
    )
}
export default HomeScreen


export const Listcomponent=({data,handleincrement})=>{
    return(
        <>
        
          <hr></hr>
        <h1>{data.title}</h1>
        <h2> price : {data.price} Rs /-</h2>
        <img class="card-img-top" src={data.image} style={{width:100}} alt="Card image"></img>
        <br>
        </br>
        <br></br>
        <button onClick={()=>handleincrement(data)}> increment</button>
        <button>decrement</button>
        <Link to={`/productdetails/${data.id}`}> <button >view more</button></Link>
        
        {/* <h2> price : {data.price} Rs /-</h2>
        <img src={data.image} alt="img" style={{width:100}}></img>
        <h3> {data.description} </h3>
        <h3> {data.category} </h3>
        <h3>{data.rating.rate}</h3>
        <h3>count:{data.rating.count}</h3> */}
      
        
        </>
    )
 }
 
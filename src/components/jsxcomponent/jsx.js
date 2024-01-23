import { render } from "@testing-library/react"
import { Component } from "react"
import "./style.css"






 export const Jsx=()=>{
    
        const details={
            name:"ADITHYA",
            Age:"22",
            place:"hyderabad",
            skills:["html","css","js","c++","c"]
        
          }
        
        const {name:adithya,Age,place,skills}=details
            return(
                <div>
                     <h1>{adithya}</h1>
                     <h2>{Age}</h2>
                     <h2>{place}</h2>
             
            <ul className="hello">
              <li>{skills[0]}</li>
              <li>{skills[1]}</li>
              <li>{skills[2]}</li>
            </ul>
            <button  onClick={()=>{alert("jsut keep calm ")}}   >Click me</button>
               </div>
            )
        }
        <><hr></hr></>
    

        function Jsx2(){
            const sum ={
                fname:"10kcoders",
                area:"kphb",
                location:"kukutpally",
                contact : ["123456789","987654321","567894321","345612798"]

            }
         const {fname,area,location,contact}=sum
         return(
            <div>
                <h1>{fname}</h1>
                <h1>{area}</h1>
                <h1>{location}</h1>

                <ul>
                    <li>{contact[0]}</li>
                    <li>{contact[1]}</li>
                    <li>{contact[2]}</li>
                    <li>{contact[3]}</li>
                </ul>
                <button   onClick={()=>{alert("continue ur work")}}>click me </button>

            </div>
         )

        }
        export default Jsx2


       export function Imageex(){
            const example=[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKkfOChV8UWP6Yq2az24jiPCJctG_WGzVFw&usqp=CAU",
                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvDl1VMjRw7iQtQETjXn8jqf9nrYGEvbW_Aw&usqp=CAU",
                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu94lPyXMxJaBd4h3mQCJKj_BzTAdfGepDEQ&usqp=CAU",
                 "https://images.pexels.com/photos/1553962/pexels-photo-1553962.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                 "https://images.pexels.com/photos/3401285/pexels-photo-3401285.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'"
            ]
          
          return(
            <div>
                <img src={example[0]}></img>
                <img src={example[1]}></img>
                <img src={example[2]}></img>
                <img src={example[3]}></img>
                <img src={example[4]}></img>
            </div>
          )

        }

        export const Jsx3=()=>{
          
            

          
        const  obj= {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}
          
          
        const {id,proce,title,description,category,img,rating}=obj

          return(
            <>
<div>
<h1>{obj.id}</h1>
<h2>{obj.title}</h2>
<h3>{obj.price}</h3>
<h3>{obj.category}</h3>
<h3>{obj.description}</h3>
<h3>{obj.rating.rate}</h3>
<img src={obj.image} width={100}></img>
</div>
            </>
          )
        }
       
        


        

        
        

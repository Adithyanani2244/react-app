import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../screen/postlogin/homeScreen"
import SettingScreen from "../screen/postlogin/settingScreen"
import AboutScreen from "../screen/postlogin/aboutScreen"
import Product from "../screen/postlogin/productsScreen"
import Invalidpage from "../screen/invalidpage"
import ViewProduct from "../screen/postlogin/viewproduct"
import { createContext, useState } from "react"
import Loginscrren from "../screen/prelogin/loginscreen"
import Postlogin from "./prelogin"
import Prelogin from "./postlogin"




 export const DataShare = createContext()

const Navigation=()=>{
    const  [name,setName]=useState("flipcart")
    const [darkTheme,setdarkTheme]=useState(false)
    const [login,setLogin]=useState(false)

    const chageTheme=()=>{
        setdarkTheme(!darkTheme)
    }
    const loginTrue=()=>{

        setLogin()

    }

    return(
        
<DataShare.Provider  value={{name,darkTheme,chageTheme,loginTrue}}>
<BrowserRouter>
       
        
        {
            login?
            <Prelogin></Prelogin>
            :
            <Postlogin></Postlogin>
            
        }
        
        </BrowserRouter>
</DataShare.Provider>

    )
}
export default Navigation
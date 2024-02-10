import { Route, Routes } from "react-router-dom"
import HomeScreen from "../screen/postlogin/homeScreen"
import SettingScreen from "../screen/postlogin/settingScreen"
import AboutScreen from "../screen/postlogin/aboutScreen"
import Product from "../screen/postlogin/productsScreen"
import Invalidpage from "../screen/invalidpage"
import ViewProduct from "../screen/postlogin/viewproduct"





function Postlogin(){

    return (
       <Routes>
        <Route path="/" Component={HomeScreen}></Route>
            <Route path="/settings" Component={SettingScreen}></Route>
            <Route path="/about" Component={AboutScreen}></Route>
            <Route path="/product"Component={Product}></Route>
            <Route path="*" Component={Invalidpage}></Route>
            <Route path="/productdetails/:id" Component={ViewProduct}></Route>
       </Routes>
    )

}
export default Postlogin
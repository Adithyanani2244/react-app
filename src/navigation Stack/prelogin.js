import React from "react"
import { Route, Routes } from "react-router-dom"
import Loginscrren from "../screen/prelogin/loginscreen"
import Invalidpage from "../screen/invalidpage"

function Prelogin(){

    return (
<Routes>
    <Route path="/" Component={Loginscrren}>
    <Route path="*" Component={Invalidpage}></Route>

    </Route>
</Routes>

    )


}
export default Prelogin
import LoginComp from "../components/LoginComp"
import React from "react"
import { PromiseProvider } from "mongoose"

function Login(props){
    return(
        <LoginComp history={props.history}/>
    )
}
export default Login
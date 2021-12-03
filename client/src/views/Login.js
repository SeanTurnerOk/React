import LoginComp from "../components/LoginComp"
import React from "react"

function Login(props){
    return(
        <LoginComp userProfile={props.userProfile}/>
    )
}
export default Login
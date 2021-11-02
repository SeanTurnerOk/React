import React, {useEffect, useState} from "react";
import axios from "axios";

function LoginComp(props){
    const [user, setUser]=useState({email:"", password:""});
    const [registerUser, setRegisterUser]=useState({userName:"", email:"", password:"", confirmPassword:"",});
    function registerHandler(e){
        e.preventDefault();
        if(registerUser.userName.length>3&&registerUser.email.length>3&&registerUser.password.length>3&&registerUser.password==registerUser.confirmPassword){
            axios.post("http://localhost:8000/api/makeUser",registerUser)
            .then(props.history.push('/home'));
        }
    }
    function loginHandler(e){
        e.preventDefault();
        var possUser;
        axios.post("http://localhost:8000/api/findUserByEmail",user.email)
        .then(res=>possUser=res)
        if(possUser){
            props.history.push('/home')
        }

    }
    return(
        <div>
            <label>Register</label>
            <form onSubmit={registerHandler}>
                <input type="text" placeholder="User Name" onChange={e=>setRegisterUser({...registerUser,userName:e.target.value})}/>                
                <input type="text" placeholder="Email" onChange={e=>setUser({...user, email:e.target.value})}/>
                <input type="text" placeholder="Password" onChange={e=>setUser({...user, password:e.target.value})}/>
                <input type="text" placeholder="Confirm Password" onChange={e=>setUser({...user, confirmPassword:e.target.value})}/>
                <input type="submit"/>
            <label>Login</label>
            </form>
            <form onSubmit={loginHandler}>
                <input type="text" placeholder="Email" onChange={e=>setUser({...user, email:e.target.value})}/>
                <input type="text" placeholder="Password" onChange={e=>setUser({...user, password:e.target.value})}/>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default LoginComp

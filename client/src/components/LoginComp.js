import React, { useState } from "react";
import axios from "axios";
import { useHistory, withRouter } from "react-router-dom";
import bcrypt from "bcryptjs";
function LoginComp(props) {
    //setting states and history
    const [user, setUser] = useState({ email: "", password: "" });
    const [registerUser, setRegisterUser] = useState({ userName: "", email: "", password: "", confirmPassword: "", refrigerator: [] });
    let history = useHistory()
    //registering function
    function registerHandler(e) {
        //preventDefault necessary to keep the form from trying to redirect to a different page
        e.preventDefault();
        //first checking if the form's data is valid. re could be used to ensure the email is a proper email. TODO?
        if (registerUser.userName.length > 3 && registerUser.email.length > 3 && registerUser.password.length > 3 && registerUser.password === registerUser.confirmPassword) {
            //first hashing password for security reasons
            registerUser.password = bcrypt.hashSync(registerUser.password)
            //updating database with the new user
            axios.post("http://localhost:8080/api/makeUser", registerUser)
                //setting the props user to the user data provided
                .then(props.userProfile.setUser(registerUser))
                //redirect to home
                .then(history.push("/home"))
                .catch(e => console.log("Could not make user", e))
        }
        //TODO ensure user's email not already in use
    }
    //logging in function
    function loginHandler(e) {
        //see function above about preventDefault
        e.preventDefault();
        //checking database for user data provided
        axios.post("http://localhost:8080/api/findUserByEmail", { email: user.email })
            //checking password provided against hashed password in database. Since this is on server side, it should be secure, but would definitely check with superiors on this.
            .then(res => {
                bcrypt.compare(user.password, res.data.password, function (err, resp) {
                    if (resp == true) {
                        props.userProfile.setUser(res.data)
                        history.push("/home")
                    }
                })
            })
    }
    return (
        <div>
            <label>Register</label>
            <form onSubmit={registerHandler}>
                <input type="text" placeholder="User Name" onChange={e => setRegisterUser({ ...registerUser, userName: e.target.value })} />
                <input type="text" placeholder="Email" onChange={e => setRegisterUser({ ...registerUser, email: e.target.value })} />
                <input type="text" placeholder="Password" onChange={e => setRegisterUser({ ...registerUser, password: e.target.value })} />
                <input type="text" placeholder="Confirm Password" onChange={e => setRegisterUser({ ...registerUser, confirmPassword: e.target.value })} />
                <input type="submit" />
                <label>Login</label>
            </form>
            <form onSubmit={loginHandler}>
                <input type="text" placeholder="Email" onChange={e => setUser({ ...user, email: e.target.value })} />
                <input type="text" placeholder="Password" onChange={e => setUser({ ...user, password: e.target.value })} />
                <input type="submit" />
            </form>
        </div>
    )
}
export default withRouter(LoginComp)

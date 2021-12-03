import React from "react";
import Cookies from "universal-cookie"
//encapsulated adding user to cookies for security reasons
class UserProfile {
    constructor() {
        this.cookies = new Cookies()
    }
    getUser() {
        return this.cookies.get("user");
    }
    setUser(userObj) {
        this.cookies.set("user", userObj, { path: "/", maxAge: 3000 })
    }
}
export default UserProfile;
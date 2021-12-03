import axios from "axios";
import React, { useState } from "react";
function HomeComp(props) {
    //setting user's state
    var [user, setUser] = useState(props.userProfile.getUser())
    //added function to clear everything for debugging but also in case someone cleans out their fridge and wants to start anew
    function clearAll() {
        //updating the database
        axios.post("http://localhost:8080/api/updateFridge", { email: user.email, refrigerator: [] })
        //grabbing the newly updated user from the database
        axios.post("http://localhost:8080/api/findUserByEmail", { email: user.email })
            //setting the user stored in props to the updated user from the database
            .then(res => props.userProfile.setUser(res.data))
            //setting the user state to the updated user stored in props
            .then(setUser(props.userProfile.getUser()))
            //ensuring the page refreshes so that the items are visually removed from the page as well as the database.
            .then(window.location.reload(true))
            .catch(err => console.log("Could not delete all items:", err))
    }
    //Ingredient removal function, so that when an ingredient is used or goes bad, the whole refrigerator does not need to be cleared 
    function deleteItem(x) {
        for (let i = 0; i < user.refrigerator.length; i++) {
            if (user.refrigerator[i] === x) {
                user.refrigerator.splice(i, 1)
            }
        }
        //see function above
        axios.post("http://localhost:8080/api/updateFridge", { email: user.email, refrigerator: user.refrigerator })
        axios.post("http://localhost:8080/api/findUserByEmail", { email: user.email })
            .then(res => props.userProfile.setUser(res.data))
            .then(setUser(props.userProfile.getUser()))
            .then(window.location.reload(true))
            .catch(err => console.log("Could not delete Item:", err))
    }
    return (
        <div>
            {/* personalized message partially to ensure that there is a user logged in (otherwise an error will be thrown instead of showing page)*/}
            <h1>Hello {user.userName}!</h1>
            <h5>Your refrigerator:</h5>
            {/* using map to display each ingredient in the refrigerator */}
            {user.refrigerator.map(x => {
                return (
                    <div>
                        {x}
                        <button onClick={() => { deleteItem(x) }}>Delete this item</button>
                    </div>)
            })}
            <h5><a href="/addItems">Add Something!</a></h5>
            <h5><a href="/recipes">Check what you can make!</a></h5>
            <button onClick={() => clearAll}>Delete all ingredients.</button>
        </div>
    )
}
export default HomeComp;
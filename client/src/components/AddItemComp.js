import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
//The section of the app that adds an Item to the refrigerator
function AddItem(props) {
    //Setting the state, and history
    const [ingredient, setIngredient] = useState("")
    let history = useHistory()
    //Giving the form an action
    function submitHandler(e) {
        //preventDefault necessary to keep form from trying to redirect to a page
        e.preventDefault()
        //pulling user from props
        let user = props.userProfile.getUser()
        //ensuring that state isn't empty, keeping someone from accidentally filling their fridge with empty strings
        if (ingredient != "") {
            user.refrigerator.push(ingredient)
            //setting the user via props to the new version of user created on this page
            props.userProfile.setUser(user)
            //actually updating the database with the ingredient by replacing it with the new fridge
            axios.post("http://localhost:8080/api/updateFridge", { email: user.email, refrigerator: user.refrigerator })
                .catch(error => console.log("An error occurred:", error))
            //redirecting back to the home page
            history.push("/home")
            //TODO create other button that does the same thing, but keeps you on the ingredient page, making adding multiple ingredients easier
        }
    }
    return (
        <div>
            {/* creating the form for submitting the ingredient's name */}
            <form onSubmit={submitHandler}>
                <label htmlFor="ingredient">Enter your ingredient</label>
                <input type="text" name="ingredient" onChange={e => setIngredient(e.target.value)} />
                <input type="submit" />
            </form>
            <a href="/home">Go Back</a>
        </div>
    )
}

export default AddItem;
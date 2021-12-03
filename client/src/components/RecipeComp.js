import axios from "axios";
import React, { useEffect, useState } from "react";

function RecipeComp(props) {
    //setting states, url beginning
    var user = props.userProfile.getUser();
    var url = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=";
    var [recipes, setRecipes] = useState([]);
    var [isLoaded, setIsLoaded] = useState(false);
    //adding ingredients to url as url queries
    for (let i = 0; i < user.refrigerator.length; i++) {
        if (i == 0) {
            url += user.refrigerator[i] + ",";
        }
        else if (i == user.refrigerator.length - 1) {
            url += "+" + user.refrigerator[i];
        }
        else {
            url += "+" + user.refrigerator[i] + ","
        }
    }
    //Might need to encapsulate this so people cannot use my API key. Would ask superior, since I believe server-side is inaccessable by outside actors but there may be some method I'm unaware of.
    url += "&apiKey=0c4bc7fc0d1342edafd2ee103363cba3"
    //using useEffect to ensure that the axios call only goes out once per reload
    useEffect(() => {
        axios.get(url)
            //setting recipes state to contain all recipes returned from url
            .then(res => setRecipes(res.data))
            //isLoaded necessary to ensure that the page doesn't load before the url call returns, rendering a blank page
            .then(setIsLoaded(true))
            .catch(err => console.log(err))
    }, [])
    //see function above about isLoaded
    if (isLoaded) {
        return (
            <div>
                {/* unfortunately spoonacular does not provide recipes, otherwise would have another page with the recipe and a link to it. I suppose just look up the title of the recipe */}
                {recipes.map(x => { return (<div>{x.title} <img src={x.image} /></div>) })}
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Error</h1>
            </div>
        )
    }
}
//TODO consider adding some kind of web scraper for finding the actual recipe?
export default RecipeComp;
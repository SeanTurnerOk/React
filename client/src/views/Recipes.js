import React from "react";
import RecipeComp from "../components/RecipeComp";

function Recipes(props){
    return(
        <div>
            <RecipeComp userProfile={props.userProfile}/>
        </div>
    )
}
export default Recipes;
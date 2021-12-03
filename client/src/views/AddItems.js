import React from "react";
import AddItem from "../components/AddItemComp";

function AddItems(props){
    return(
        <AddItem userProfile={props.userProfile}/>
    )
}
export default AddItems;
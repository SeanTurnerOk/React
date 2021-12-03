import React from "react";
import HomeComp from "../components/HomeComp";

function Home(props){
    return(
        <HomeComp userProfile={props.userProfile}/>
    )
}

export default Home;
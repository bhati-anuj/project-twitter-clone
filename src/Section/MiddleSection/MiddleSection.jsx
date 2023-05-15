import React from "react";
import style from "./MiddleSection.module.css";
import Feed from "./Feed";
import TweetForm from "../../Components/TweetForm/TweetForm";

function MiddleSection(){
    return(
        <>
        <h2>Home</h2>
        <TweetForm />
        <Feed />
        </>
    )
}

export default MiddleSection;
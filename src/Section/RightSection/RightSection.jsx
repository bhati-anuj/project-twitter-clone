import React from "react";
import style from "./RightSection.module.css";
import Searchbar from "../../Components/Searchbar/Searchbar";
import RightTrend from "../../Components/RightTrend/RightTrend";
import RightFollow from "../../Components/RightFollow/RightFollow";


function RightSection(){
    return(
        <>
        <Searchbar/>
        <RightTrend />
        <RightFollow />
        </>
    )
}

export default RightSection;
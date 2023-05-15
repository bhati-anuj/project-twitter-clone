import React from "react";

export default function Buttons({Sign, logo,image,className,btnnext}){
    return(
        <>
        <button className={className} onClick={btnnext}>
            {image}&nbsp;&nbsp;&nbsp;{Sign}&nbsp;&nbsp;{logo}
        </button>
        </>
    )
}
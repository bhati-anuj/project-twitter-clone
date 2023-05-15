import React, { useState } from "react";
import style from "./RightFollow.module.css";
import followData from "./followData.json"
import { Avatar, Paper } from "@mui/material";
import Buttons from "../Buttons/Buttons";

function RightFollow(){

    const handleClick =(id) => {
        const updatedFollowContainer = followContainer.map((item) => {
            if(item.id === id){
                item.followed = !item.followed;
            }
            return item;
            

        });

        setFollowContainer(updatedFollowContainer);
    };

    const [followContainer, setFollowContainer] = useState(followData);
    const[showMore, setShowMore] = useState(false);

    const userToShow = showMore? followContainer : followContainer.slice(0,3);
    
    const handleShowMoreClick = () => {
        setShowMore((followContainer) => !followContainer);
    }

    return(
        <>
        <Paper elevation={1} sx={{marginTop:"0.5rem",padding:"0.5rem"}}>

        <div className={style.container}>
            <h2> Who To Follow</h2>
            {userToShow.map((data,i) =>
            <div className={style.wrapper} key={i}>

            <div className={style.profile}>
                <Avatar alt="profile" src={data.src} />

                <div className={style.nameDiv}>

                <p className={style.name}>{data.text}</p>
                <p className={style.userName}>{data.text2}</p>
                </div>
            </div>
            <div className={style.followBtnDiv}>
               <Buttons Sign={data.followed?"Following" : "Follow"}
               btnnext={() => handleClick(data.id)}
               key={data.id}
               className={style.followBtn}
               disabled={data.followed}
               />
                </div>


            </div>
            )}

            {followContainer.length > 2 && (
                <a href="#" onClick={handleShowMoreClick}
                className={style.showMoreBtn} >
                    {showMore ? "Show Less" : "Show More"}
                </a>
            )}
                

        </div>
        
        </Paper>
        </>
    )
}

export default RightFollow;
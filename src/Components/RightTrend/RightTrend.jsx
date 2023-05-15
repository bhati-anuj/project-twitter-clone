import React, { useState } from "react";
import trendData from "./trendData.json";
import style from "./RightTrend.module.css";
import Paper from '@mui/material/Paper';
import MorePop from "../../Library/MorePop/MorePope";

function RightTrend() {
    const[isModelOpen,setIsModelOpen] =useState(false);
    const [data, setData] = useState(trendData);
    const[showMore, setShowMore] = useState(false);
    const userToShow = showMore? data: data.slice(0,3);

    const handleShowMoreClick = () => {
        setShowMore((data) => !data);
    }
  

  return (
    <>
       <Paper elevation={1} sx={{marginTop:"0.5rem", padding:"20px"}} >
      <div className={style.container}>
        <h2 >What's happening</h2>
        {userToShow.map((trendData, index) => (
          <div className={style.main} key={index}>
            <div className={style.trendtext}>
            <div className={style.Trends}> {trendData.Trends}</div>
            
            <div className={style.Hash}> <h4>{trendData.Hash}</h4></div>
            
            <div className={style.Tweets}> {trendData.Tweets}</div>
              </div>
            <div className={style.morePop}>
            <MorePop />
              .</div>
          </div>
        ))}

        {data.length > 2 && (
            <a href="#" onClick={handleShowMoreClick}
            className={style.showBtn}>

            {showMore ? "Show Less" : "Show More"}
            </a>
        )}

      </div>
      </Paper>
    </>
  );
}

export default RightTrend;

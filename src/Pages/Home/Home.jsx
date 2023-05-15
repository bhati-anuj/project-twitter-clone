import React  from "react";
import LeftSection from "../../Section/LeftSection/LeftSection";
import RightSection from "../../Section/RightSection/RightSection";
import style from "./Home.module.css"
import MiddleSection from "../../Section/MiddleSection/MiddleSection";

function Home(){
    return(
        <>
       <div className={style.container}>

       <div className={style.leftDiv}>

        <LeftSection />
       </div>
        <div className={style.feed}>
            
            <MiddleSection />
            
        </div>
        
        <div className={style.rightDiv}>

        <RightSection />
        </div>
        </div>
        </>
    )
}

export default Home;


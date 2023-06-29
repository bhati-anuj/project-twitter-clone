import React from "react";
import style from "./Searchbar.module.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Searchbar(){
    return(
        <>
        <div className={style.container}>
            <button className={style.searchBtn}><SearchOutlinedIcon color="disabled" sx={{fontSize: "xx-large", }}/>
            <input 
            placeholder="Search Twitter"
            className={style.searchbar}
            type="text"
            
            />
            </button>
        </div>
        </>
    )
}

export default Searchbar;
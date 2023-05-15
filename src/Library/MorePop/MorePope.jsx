import React, { useState } from "react";
import style from "./MorePop.module.css";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Popover, Typography } from "@mui/material";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";

const MorePop = (isModelOpen)=>{
    const[trend,set]=useState([])
    return(
        <PopupState variant="popover" popupId="demo-popup-popover" >
            {(popupState) =>(
                <div>
                    <button className={style.btn}
                    {...bindTrigger(popupState)}>
                        <MoreHorizOutlinedIcon className={style.more}/>
                    </button>
                    <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    > 
                    <Typography >Remove Tweet</Typography>
                    <Typography >This tweet is harmful</Typography>
                    </Popover>
                </div>
            )}

        </PopupState>
    )
}

export default MorePop;
import { Popover } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import PopupState, {bindTrigger, bindPopover} from "material-ui-popup-state";
import style from "./PopOver.module.css";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'; 
import {useNavigate} from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoginAtom, usersAtom } from "../../Atom/Atom";

const PopOver = () =>{

   // const tologin =useNavigate()
   // const [loginStatus, setLoginStatus] = useRecoilState(isLoginAtom)

    const user = JSON.parse(localStorage.getItem("UserDetail"))

    // function Loggedout(){
        
    //     setLoginStatus(false)
    //     tologin("/signUp")
    // }

    return(
        
        <PopupState variant="popover" popupId="demo-popup-popover" >
            {(popupState) => (
                <div className={style.container}>
                    <button className={style.btn}
                    {...bindTrigger(popupState)}>
                        <img src="https://i.pravatar.cc/150?img=0" alt="profile-image" className={style.profile} />
                        {/* {user[0].name} */}
                        {<h4>Kon hu mai @maiNhiToKon</h4>}
                        <MoreHorizOutlinedIcon />
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
                          }} >

                        <Typography sx={{ p: 2}}>Add an existing account</Typography>
                        <Typography sx={{ p: 2 }} >Log out </Typography>
                          </Popover>

                </div>
            )}

        </PopupState>
        
    )
}

export default PopOver;
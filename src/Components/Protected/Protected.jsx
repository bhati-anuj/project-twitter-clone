import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import {isLoginAtom} from "../../Atom/Atom";
import { useNavigate } from "react-router-dom";


function Protected({Component}){
    const  isUserLoggedIn = useRecoilValue(isLoginAtom);
    const navigate = useNavigate();

    useEffect(() => {
        if(isUserLoggedIn === false){
            navigate("/Signin")
        }else{
            navigate('/')
        }
    },[]);

    return(
        <div>
            <Component />
        </div>
    )
}

export default Protected;
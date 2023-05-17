import React, { useEffect, useState } from "react";
import style from "./SignIn.module.css";
import { Box, Modal, TextField, useMediaQuery } from "@mui/material";
import { IoLogoTwitch } from "react-icons/io5";
import { useTheme } from "@emotion/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoginAtom } from "../../Atom/Atom";
import { useNavigate } from "react-router-dom";

const SignIn =() =>{
    const[open, setOpen] =React.useState(true);
    const theme = useTheme();
    // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const setLoginStatus =useSetRecoilState(isLoginAtom);
    const isUserLoggedIn = useRecoilValue(isLoginAtom);
    const navigate = useNavigate();

    useEffect(() => {
        if(isUserLoggedIn){
            navigate("/");
        }
    });

    const [string, setString] = useState('')
    const [stringError, setStringError] = useState(false)
    const [password, setPassword] = useState("")
    const [passswordError, setPasswordError] = useState(false)
    const [next,setNext] = useState(false)
    const [user, setUser] = useState([])

    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem("UserDetail")) || [])
    }, [])

    function handleNext(e){
        e.preventDefault()
        if((!regEmail.test(string)) || (string.trim() ==='')){
            setStringError(true);
        }else{
            if(user.find(e => e.email === string) === undefined){
                setStringError(true)
                alert('user not found')
            }
            else{
                setStringError(false);
                setNext(true)
            }
        }
    }

    function handleLogin(e){
        e.preventDefault()
        if(password.trim() == ""){
            setPasswordError(true)
        }else{
            if(user.find(e =>e.password === password) === undefined){
                setPasswordError(true)
            }
            else{
                setPasswordError(false)
                setLoginStatus(true)
                navigate("/");
            }
        }
    }
    return(
        <>
        <div>
            <Modal
            open={open}
            aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
            <Box>

                <form onSubmit={() => {}}>
                    {next ? (<>
                    <IoLogoTwitch/>
                    <h1>Enter Your Password</h1>
                    <TextField
                    disabled
                    id="filled-disabled"
                    label="Email"
                    defaultValue={string}
                    variant="filled"
                    onChange={(e) => setString(e.target.value)}
                    InputProps={{ style: { height: "5rem", fontSize: 20 } }}
                    />
                    </>):
                    <>
                    </>}
                </form>
            </Box>

          </Modal>

        </div>
        </>
    )

}

export default SignIn;
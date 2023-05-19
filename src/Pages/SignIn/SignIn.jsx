import React, { useEffect, useState } from "react";
import style from "./SignIn.module.css";
import { Box, Modal, TextField } from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoginAtom } from "../../Atom/Atom";
import { Link, useNavigate } from "react-router-dom";
import Buttons from "../../Components/Buttons/Buttons";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 600,
  bgcolor: "background.paper",
  borderRadius: 6,
  boxShadow: 24,
  p: 4,
  outline: 0,
};

const SignIn = () => {
  const [open, setOpen] = React.useState(true);


  const setLoginStatus = useSetRecoilState(isLoginAtom);
  const isUserLoggedIn = useRecoilValue(isLoginAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate("/");
    }
  });

  const [string, setString] = useState("");
  const [stringError, setStringError] = useState(false);
  const [password, setPassword] = useState("");
  const [passswordError, setPasswordError] = useState(false);
  const [next, setNext] = useState(false);
  const [user, setUser] = useState([]);

  const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("UserDetail")) || []);
  }, []);

  function handleNext(e) {
    e.preventDefault();
    if (!regEmail.test(string) || string.trim() === "") {
      setStringError(true);
    } else {
      if (user.find((e) => e.email === string) === undefined) {
        setStringError(true);
        alert("user not found");
      } else {
        setStringError(false);
        setNext(true);
      }
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    if (password.trim() === "") {
      setPasswordError(true);
    } else {
      if (user.find((e) => e.password === password) === undefined) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
        setLoginStatus(true);
        navigate("/");
      }
    }
  }
  return (
    <>
      <div>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styles}>
            <form onSubmit={() => {}} className={style.formBox}>
              {next ? (
                <>
                  <TwitterIcon
                    sx={{
                      color: "rgb(29, 155, 240)",
                      size: "bigger",
                      fontSize: "3rem",
                    }}
                  />
                  <h1 style={{ fontSize: 45, margin: "2rem 0" }}>
                    Enter Your Password
                  </h1>
                  <TextField
                    disabled
                    id="filled-disabled"
                    label="Email"
                    defaultValue={string}
                    sx={{ background: "white", width: "35rem" }}
                    variant="filled"
                    onChange={(e) => setString(e.target.value)}
                    InputProps={{ style: { height: "5rem", fontSize: 20 } }}
                  />
                  <br />
                  {!passswordError ? (
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      value={password}
                      type="password"
                      variant="outlined"
                      sx={{ background: "white", width: "35rem" }}
                      onChange={(e) => setPassword(e.target.value)}
                      InputProps={{ style: { height: "5rem", fontSize: 20 } }}
                    />
                  ) : (
                    <TextField
                      error
                      id="outlined-basic"
                      label="Password"
                      value={password}
                      type="password"
                      variant="outlined"
                      sx={{ background: "white", width: "35rem" }}
                      onChange={(e) => setPassword(e.target.value)}
                      helperText="Please enter a valid password."
                      InputProps={{ style: { height: "5rem", fontSize: 20 } }}
                    />
                  )}
                  <span className={style.forgot}>Forgot password?</span>

                  <Buttons
                    logo="Log in"
                    btnnext={handleLogin}
                    className={style.btn3}
                  />
                </>
              ) : (
                <>
                  <TwitterIcon
                    sx={{
                      color: "rgb(29, 155, 240)",
                      size: "bigger",
                      fontSize: "3rem",
                    }}
                  />
                  <h1 style={{ fontSize: 30, margin: "2rem 0" }}>
                    Sign in to Twitter
                  </h1>
                  <Buttons
                    className={style.btn1}
                    Sign="Sign in with Google"
                    logo={<GoogleIcon style={{ fontSize: 25 }} />}
                  />
                  <br />
                  <Buttons
                    Sign="Sign in with Apple"
                    className={style.btn1}
                    logo={<AppleIcon style={{ fontSize: 25 }} />}
                  />
                  <br />

                  <div className={style.or}>
                    <p className={style.line}>___________________</p>
                    or
                    <p className={style.line}>___________________</p>
                  </div>
                    <br/>
                  {stringError ? (
                    <TextField
                      error
                      id="outlined-error-helper-text"
                      varient="outlined"
                      value={string}
                      sx={{ background: "white", width: "20rem" }}
                      onChange={(e) => setString(e.target.value)}
                      label="Phone, email or username"
                      helperText="Please enter a valid detail"
                      InputProps={{ style: { height: "3.5rem" } }}
                    />
                  ) : (
                    <TextField
                      id="outlined-basic"
                      varient="outlined"
                      value={string}
                      sx={{ background: "white", width: "20rem" }}
                      onChange={(e) => setString(e.target.value)}
                      label="Phone, email or username"
                      InputProps={{ style: { height: "3.5rem" } }}
                    />
                  )}
                  <Buttons
                    Sign="Next"
                    btnnext={handleNext}
                    className={style.btn2}
                  />
                  <Buttons Sign="Forgot password" className={style.btn1} />

                  <div className={style.txt2}>
                    Don't have an account?
                    <Link
                      style={{
                        color: "rgb(12, 145, 185)",
                        textDecoration: "none",
                      }}
                      to="/SignUp"
                    >
                      Sign Up
                    </Link>
                  </div>
                </>
              )}
            </form>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default SignIn;

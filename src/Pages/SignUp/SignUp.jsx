import * as React from 'react';
import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoginAtom } from "../../Atom/Atom";
import style from "./SignUp.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button, TextField } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { monthArray, dateArray, yearArray } from "../../Utils/constants";
import { IoLogoTwitter } from "react-icons/io5";
import Buttons from '../../Components/Buttons/Buttons';

const SignUp = () => {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [createAC, setCreateAC] = useState(false);
  const setLoginStatus = useSetRecoilState(isLoginAtom);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [toggleEmail, setToggleEmail] = useState(false);
  const [info, setInfo] = useState([]);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState(false);

  const handleNext = (e) => {
    e.preventDefault()

    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;

    if (!regEmail.test(email)) {
      setEmailError(true);
    } else if (!regPassword.test(password)) {
      setPasswordError(true);
    } else {
      setEmailError(false);
      setPasswordError(false);

      if (
        name.trim() === "" ||
        email.trim() === "" ||
        password.trim() === "" ||
        month === "" ||
        date === "" ||
        year === ""
      ) {
        setError(true);
        if (error == true) {
          alert("All field are mandatory");
        }
      } else {
        setError(false);
        alert("Successfully Registered");
        const data = {
          name: name,
          email: email,
          phone: phone,
          email: email,
          password: password,
          DOB: `${month + '/' + date + '/'  + year}`,
        };
        setInfo([...info, data]);
        localStorage.setItem("UserDetail", JSON.stringify([...info, data]));
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setDate("");
        setMonth("");
        setYear("");
        setLoginStatus(true);
        navigate("/");
      }
    }
  };
  const handleToggle = () => {
    setToggleEmail(!toggleEmail);
  };

  const handleCreate = () => {
    setCreateAC(!createAC);
  };

  return (
    <>
      <div className={style.container}>
        <Modal
          open={open}
          aria-labelledby="model-model-title"
          aria-describedby="model-modal-description"
        >
          <Box>
            {createAC ? (
              <form onSubmit={handleNext}>
                <h1>Create your Account</h1>
                <TextField
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  InputProps={{ style: { height: "3rem", fontSize: 20 } }}
                />

                {toggleEmail ? (
                  !emailError ? (
                    <TextField
                      label="Email"
                      variant="outlined"
                      
                      value={email}
                      onchange={(e) => setEmail(e.target.value)}
                      InputProps={{ style: { height: "3rem", fontSize: 20 } }}
                    />
                  ) : (
                    <TextField
                      error
                      id="outlined-error-helper-text"
                      variant="outlined"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      label="Email"
                      helperText="Please Enter a valid email."
                      InputProps={{ style: { height: '3rem' } }}
                    />
                  )
                ) : (
                  <TextField
                    label="Phone"
                    variant="outlined"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    InputProps={{ style: { height: "3rem", fontSize: 20 } }}
                  />
                )}
                <span onClick={handleToggle}>
                  Use{toggleEmail ? "Phone" : "Email"} instead
                </span>

                {!passwordError ? (
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{ style: { height: "3rem", fontSize: 20 } }}
                  />
                ) : (
                  <TextField
                    error
                    label="Password"
                    type="password"
                    varient="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    helperText="Please enter Strong Password"
                    InputProps={{ style: { height: "3rem", fontSize: 20 } }}
                  />
                )}

                <span>
                  <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  >
                    <option selected value="">
                      Month
                    </option>
                    {monthArray.map((day) => (
                      <option>{day}</option>
                    ))}
                  </select>

                  <select
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  >
                    <option selected value="">
                      {" "}
                      Day{" "}
                    </option>
                    {dateArray.map((day) => (
                      <option>{day}</option>
                    ))}
                  </select>

                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option selected value="">
                      {" "}
                      Year
                    </option>
                    {yearArray.map((year) => (
                      <option>{year}</option>
                    ))}
                  </select>
                </span>

                <Buttons 
                Sign="Next"
                btnnext={handleNext}
                />
              </form>
            ) : (
              <>
              
              <IoLogoTwitter/>
              <h1>Join Twitter Today</h1>
              <Button>Sign in with Google </Button>
              <Button>Sign in with Apple </Button>
              <br/>
              <Buttons
              Sign="Create Account"
              btnnext={handleCreate}
              />
              <p >
                  By signing up, you agree to the Terms of Service <br />
                  and Privacy Policy, including Cookie Use.
                </p>
                <div >
                  Have an Account Already?
                  <Link to="#">Log in</Link>
                </div>
              </>
            )}
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default SignUp;

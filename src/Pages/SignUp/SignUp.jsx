import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoginAtom } from "../../Atom/Atom";
import style from "./SignUp.module.css";
import { TextField } from "@mui/material";
import { useSetRecoilState } from "recoil";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { monthArray, dateArray, yearArray } from "../../Utils/constants";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import Buttons from "../../Components/Buttons/Buttons";

const SignUp = () => {
  const [open, setOpen] = React.useState(true);

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
  // const [info, setInfo] = useState([]);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState(false);

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

  const handleNext = (e) => {
    e.preventDefault();

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
        if (error === true) {
          alert("All field are mandatory");
        }
      } else {
        setError(false);
        alert("Successfully Registered");
        const data = {
          name: name,
          email: email,
          phone: phone,
          password: password,
          DOB: `${month + "/" + date + "/" + year}`,
        };

        const info = JSON.parse(localStorage.getItem("UserDetail") || "[]");
        info.push(data)
        localStorage.setItem("UserDetail",JSON.stringify(info));
        // setInfo([...info, data]);
        // localStorage.setItem("UserDetail", JSON.stringify([...info, data]));

        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setDate("");
        setMonth("");
        setYear("");
        setLoginStatus(false);
        navigate("/Signin");
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
      <div className={style.mainContainer}>
        <div className={style.container}>
          <Modal
            open={open}
            aria-labelledby="model-model-title"
            aria-describedby="model-modal-description"
          >
            <Box sx={styles}>
              {createAC ? (
                <form onSubmit={handleNext} className={style.formBox}>
                  <h1 className={style.heading}>Create your Account</h1>
                  <TextField
                    label="Name"
                    variant="outlined"
                    value={name}
                    sx={{ background: "white", width: "25rem" }}
                    onChange={(e) => setName(e.target.value)}
                    InputProps={{ style: { height: "3rem", fontSize: 20 } }}
                  />

                  {toggleEmail ? (
                    !emailError ? (
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        value={email}
                        sx={{ background: "white", width: "25rem" }}
                        onchange={(e) => setEmail(e.target.value)}
                        InputProps={{ style: { height: "3rem", fontSize: 20 } }}
                      />
                    ) : (
                      <TextField
                        error
                        id="outlined-error-helper-text"
                        variant="outlined"
                        value={email}
                        sx={{ background: "white", width: "25rem" }}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        helperText="Please Enter a valid email."
                        InputProps={{ style: { height: "3rem" } }}
                      />
                    )
                  ) : (
                    <TextField
                      id="outlined-basic"
                      label="Phone"
                      variant="outlined"
                      value={phone}
                      sx={{ background: "white", width: "25rem" }}
                      onChange={(e) => setPhone(e.target.value)}
                      InputProps={{ style: { height: "3rem", fontSize: 20 } }}
                    />
                  )}
                  <span onClick={handleToggle} className={style.toggle}>
                    Use{toggleEmail ? "Phone" : "Email"} instead
                  </span>

                  {!passwordError ? (
                    <TextField
                      label="Password"
                      type="password"
                      variant="outlined"
                      sx={{ background: "white", width: "25rem" }}
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
                      sx={{ background: "white", width: "25rem" }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      helperText="Please enter Strong Password"
                      InputProps={{ style: { height: "3rem", fontSize: 20 } }}
                    />
                  )}

                  <span className={style.date}>
                    <select
                      id="gMonth2"
                      style={{
                        width: "11rem",
                        height: "3rem",
                        margin: "1rem 0",
                      }}
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
                      id="gMonth2"
                      style={{
                        width: "5rem",
                        height: "3rem",
                        margin: "1rem 0",
                      }}
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
                      id="gMonth2"
                      style={{
                        width: "7rem",
                        height: "3rem",
                        margin: "1rem 0",
                      }}
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
                    className={style.btn3}
                  />
                </form>
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
                    Join Twitter Today
                  </h1>

                  <Buttons
                    Sign="Sign in with Google "
                    className={style.btn1}
                    logo={<GoogleIcon style={{ fontSize: 25 }} />}
                  ></Buttons>
                  <br />

                  <Buttons
                    Sign="Sign in with Apple"
                    className={style.btn1}
                    logo={<AppleIcon style={{ fontSize: 25 }} />}
                  >
                    {" "}
                  </Buttons>
                  <br />

                  <div className={style.or}>
                    <p className={style.line}>________________</p>
                    or
                    <p className={style.line}>________________</p>
                    <br />
                  </div>
                  <Buttons
                    Sign="Create Account"
                    btnnext={handleCreate}
                    className={style.btn2}
                  />
                  <p className={style.txt1}>
                    By signing up, you agree to the Terms of Service <br />
                    and Privacy Policy, including Cookie Use.
                  </p>
                  <div className={style.txt2}>
                    Have an Account Already?
                    <Link to="/Signin">Log in</Link>
                  </div>
                </>
              )}
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default SignUp;

import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import {fetchTweets} from "./Services/tweets";
import {fetchUsers} from "./Services/users";
import { tweetsAtom,usersAtom } from "./Atom/Atom";
import Protected from "./Components/Protected/Protected";

function App() {

  const setTweets = useSetRecoilState(tweetsAtom);
  const setUsers = useSetRecoilState(usersAtom);

  useEffect(() => {
    fetchTweets().then((tweets)=>{
      setTweets(tweets);
    });
    fetchUsers().then((users) =>{
      setUsers(users);
    });
  }, []);
  return (
  <div>
  <Routes>
    <Route path="/" element={<Protected Component={Home}/>} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/Signin" element={<SignIn />} />
    <Route path="/*" element={<h1>404: Page Not found</h1>} />
  </Routes>
  </div>
  
)}

export default App;

import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";

function App() {
  return (
  <div>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/Signin" element={<SignIn />} />
  
  </Routes>
  </div>
  
)}

export default App;

"use client";
import React from "react";
import { useState } from "react";
import Login from "../_Components/LoginPage/Login_c";
import SignUp from "../_Components/SignUpPage/SignUp_c";

const LoginHome = () => {
  const [login, setlogin] = useState(true);
  return (
    <div>
    <div className="col-7">

    </div>
    <div className="container-fluid col-5">
      {
        <button
          onClick={() => {
            setlogin(!login);
          }}
        >
          {
          login? "Already have an Account !! LogIn" : "Don't have an Account? SignUp" }
        </button>
      }
      <div>{login ? <Login /> : <SignUp />}</div>
    </div>
    </div>
  );
};

export default LoginHome;

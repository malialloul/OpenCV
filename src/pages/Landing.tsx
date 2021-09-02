import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import { GlobalContext } from "../services/AppContext";
import CommonFuntions from "../services/CommonFunctions";
import SignIn from "./Signin";
import SignUp from "./SignUp";
import Token from "./Token";

const Landing = ({ ...props }) => {
  const { data, updateUserDetails } = useContext(GlobalContext);
  const { Logout, InitializeUser } = CommonFuntions();
  InitializeUser();
  console.log(data)

  const [visibleSignIn, setVisiblitySignIn] = useState(false);
  const [visibleSignUp, setVisiblitySignUp] = useState(false);

  const setVisiblityTokenMethod = () => {
    data.userDetails.token = "";
    updateUserDetails(data.userDetails);
  };
  const LogoutUser = () => {
    Logout();
    window.location.reload();
  };

  return (
    <div className="pl-10 pr-10">
      <div className="grid grid-cols-12 justify-between items-center">
        <div className="col-span-6">
          <img src="logo.png" alt="" className="w-2/12" />
        </div>
        <div className="col-span-6 flex justify-end">
          {data.userDetails.verified ? (
            <div className="flex justify-center">
              <div className="flex-col">
                <div className="flex justify-center">
                  <span>Welcome {data.userDetails.username}</span>
                </div>
                <button
                  onClick={() => LogoutUser()}
                  className="rounded text-white p-3  w-full bg-indigo-500 text-center"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-x-0.5">
              <button
                className="rounded text-white p-3  bg-indigo-500 text-center"
                onClick={() => setVisiblitySignUp(true)}
              >
                SignUp
              </button>
              <button
                className="rounded text-white p-3  bg-indigo-500 text-center"
                onClick={() => setVisiblitySignIn(true)}
              >
                SignIn
              </button>
            </div>
          )}
        </div>
      </div>
      <div>
        <Modal
          Header={"SignIn"}
          Body={<SignIn {...props} />}
          visible={visibleSignIn}
          onClick={() => setVisiblitySignIn(false)}
        />

        <Modal
          Header={"SignUp"}
          Body={<SignUp {...props} />}
          visible={visibleSignUp}
          onClick={() => setVisiblitySignUp(false)}
        />

        <Modal
          Header={"Token"}
          Body={<Token {...props} />}
          visible={data.userDetails.token !== "" && !data.userDetails.verified}
          onClick={() => setVisiblityTokenMethod()}
        />
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-8 flex items-center justify-center p-3">
          <div className="flex-col p-3">
            <h2 className="text-indigo-500">
              Build Your CV Easily. We Guide You Through the Process
            </h2>
            <div className="flex items-center justify-center p-5">
              <Link to="/home">
                <button className="rounded text-white p-3 bg-indigo-500">
                  Create Your CV
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <img src="logo.png" alt="" className="w-full" />
        </div>
      </div>
      <div>
        <h3 className="text-indigo-500">WHY ARE WE HERE?</h3>
        <br />
        <span className="text-2xl">
          Job Seeking nowadays becomes very hard especially for fresh graduates.
          Good CV is the core key to find a job faster. We are here to help you
          create your professional CV easily. This will help you through your
          seeking process and increases yuor acceptance probability.
        </span>
      </div>
      <br />
      <br />
      <div>
        <h3 className="text-indigo-500">Who We Are?</h3>
        <span className="text-2xl">
          We are a business beginners trying to help job seekers to find their
          dream job by creating a professional CV.
        </span>
      </div>
    </div>
  );
};
export default Landing;

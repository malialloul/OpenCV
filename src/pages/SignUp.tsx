import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { GlobalContext } from "../services/AppContext";
import CommonFuntions from "../services/CommonFunctions";
import { addUser, getUsers, addUserSettings } from "../services/HTTPContext";

const SignUp = ({ ...props }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [messageError, setMessageError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { SendEmail } = CommonFuntions();
  const { data, updateUserDetails } = useContext(GlobalContext);
  const { GenerateToken } = CommonFuntions();

  const signUp = () => {
    if (userName === "" || password === "" || confirmPassword === "") {
      setMessageError("Please fill all fields");
      //to be modified
    } else if (password.length > 8) {
      setMessageError("Password length should be greater than 8");
    } else if (password !== confirmPassword) {
      setMessageError("Passwords don't match");
    } else {
      getUsers().then((response: any) => {
        let list = response.filter((user: any) => user.email === email);
        if (list.length === 0) {
          GenerateToken();
          const token = data.userDetails.token;
          const toSend = {
            from: "OpenCv",
            email: email,
            message: "This is a message " + token,
          };
          SendEmail(toSend);
          updateUserDetails({
            id: "",
            userName: userName,
            password: password,
            email: email,
            token: token,
          });
          setSuccessMessage("User Created Successfully");
        } else {
          setMessageError("This email already in use. User another one");
        }
      });
    }
  };

  return (
    <div>
      <div className=" rounded flex justify-center items-center">
        <div className="flex-col">
          <div className="text-red-500">{messageError}</div>
          <div className="text-green-500">{successMessage}</div>
          <div className="text-center">
            <input
              className="rounded p-3 bg-white border-b-2"
              placeholder="UserName"
              type="text"
              name="username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="rounded p-3 bg-white border-b-2"
              placeholder="Email"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="rounded p-3 bg-white border-b-2"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="rounded p-3 bg-white border-b-2"
              placeholder="Confirm Password"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <button
              type="submit"
              className="rounded-full text-white p-3 w-full  bg-indigo-500"
              onClick={() => signUp()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

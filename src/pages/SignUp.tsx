import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { GlobalContext } from "../services/AppContext";
import CommonFuntions from "../services/CommonFunctions";
import { addUser, getUsers } from "../services/HTTPContext";

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
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(email)) {
      setMessageError("Email Error");
    } else if (userName === "" || password === "" || confirmPassword === "") {
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
          console.log(token);
          addUser(userName, password, email, token, false).then((user) => {
            const toSend = {
              from: "OpenCv",
              email: email,
              message: "This is a message " + token,
            };
            // SendEmail(toSend);
            updateUserDetails({
              id: JSON.parse(JSON.stringify(user)).id,
              username: userName,
              password: password,
              email: email,
              token: token,
              verified: false,
            });
          });
          setSuccessMessage("User Created Successfully");
        } else if (list[0].verified === 0) {
          setMessageError(
            "This email already in use but not verified. User another one"
          );
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
              required
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="rounded p-3 bg-white border-b-2"
              placeholder="Email"
              type="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="rounded p-3 bg-white border-b-2"
              placeholder="Password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="rounded p-3 bg-white border-b-2"
              placeholder="Confirm Password"
              type="password"
              required
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

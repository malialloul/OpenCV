import React, { useContext } from "react";
import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { GlobalContext } from "../services/AppContext";
import {
  addUser,
  getUsers,
  getUserInfo,
  addUserSettings,
} from "../services/HTTPContext";
import CommonFuntions from "../services/CommonFunctions";

const Token = ({ ...props }) => {
  let { data, updateData, updateUserSettings, updateUserDetails } =
    useContext(GlobalContext);

  const { StoreUserInfo } = CommonFuntions();
  const [token, setToken] = useState("");
  const [messageError, setMessageError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const sendToken = () => {
    if (data.userDetails.token === token) {
      addUser(
        data.userDetails.userName,
        data.userDetails.password,
        data.userDetails.email
      ).then((response) => {
        addUserSettings(response.id);
      });
      setSuccessMessage("User added");
    } else {
      setMessageError("Token is wrong");
    }
  };

  return (
    <div>
      <div className="rounded flex justify-center items-center">
        <div className="flex-col">
          <div>
            <div className="text-red-500">{messageError}</div>
            <input
              className="rounded p-3 bg-white border-b-2"
              placeholder="Token"
              type="text"
              onChange={(e) => setToken(e.target.value)}
            />
          </div>

          <div className="p-3">
            <button
              onClick={() => sendToken()}
              className="rounded-full text-white p-3 w-full  bg-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;

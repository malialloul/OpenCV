import React, { useContext } from "react";
import { useState } from "react";
import { GlobalContext } from "../services/AppContext";
import { updateUser } from "../services/HTTPContext";
import CommonFuntions from "../services/CommonFunctions";

const Token = ({ ...props }) => {
  let { data, updateUserDetails } = useContext(GlobalContext);
  const [token, setToken] = useState("");
  const [messageError, setMessageError] = useState("");
  const sendToken = () => {
    if (data.userDetails.token === token) {
      //addUserSettings(data.userDetails.id);
      data.userDetails.verified = true;
      data.userDetails.token = "";
      updateUserDetails(data.userDetails);
      sessionStorage.setItem("OpenCVId", data.userDetails.id);
      updateUser(data.userDetails.id, data.userDetails.username,data.userDetails.password,data.userDetails.email,data.userDetails.token,data.userDetails.verified);
      window.location.reload();
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

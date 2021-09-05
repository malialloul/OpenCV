import React, { useContext } from "react";
import { GlobalContext } from "../../services/AppContext";
import CommonFuntions from "../../services/CommonFunctions";
import { updateSettings } from "../../services/HTTPContext";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="flex  justify-start items-center">
      <div className="flex-col w-full divide-y-2 gap-x-2 h-full justify-end items-center">
        <div className="cursor-pointer flex items-center hover:bg-gray-500 text-white p-3  bg-indigo-500">
          <Link
            to="/dashboard"
            className="text-white text-center w-full no-underline"
          >
            Dashboard
          </Link>
        </div>
        <div className="cursor-pointer flex items-center hover:bg-gray-500 text-white p-3  bg-indigo-500">
          <Link
            to="/home"
            className="text-white text-center w-full no-underline"
          >
            Home
          </Link>
        </div>

        <div className="cursor-pointer flex items-center hover:bg-gray-500 text-white p-3  bg-indigo-500">
          <Link
            to="/builder"
            className="text-white text-center w-full no-underline"
          >
            Builder
          </Link>
        </div>

        <div className="cursor-pointer flex items-center hover:bg-gray-500 text-white p-3  bg-indigo-500">
          <Link
            to="/user_profile"
            className="text-white text-center w-full no-underline"
          >
            User Profile
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SideMenu;

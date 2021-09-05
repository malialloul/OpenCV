import React, { useContext } from "react";
import { GlobalContext } from "../services/AppContext";
import CommonFuntions from "../services/CommonFunctions";
import DropDownMenu from "../components/inputs/DropDownMenu";
import { Link } from "react-router-dom";
import SideMenu from "./helper/SideMenu";

const Layout = ({ ...props }) => {
  const { Logout, InitializeUser } = CommonFuntions();
  const { data } = useContext(GlobalContext);
  InitializeUser();
  return (
    <div className="z-10 relative">
      <div className="grid grid-cols-12 bg-indigo-500">
        <div className="col-span-2">
          <img src="logo.png" alt="" className="w-20" />
        </div>
        <div className="col-span-8">{props.header}</div>
        <div className="col-span-2 flex justify-end items-center">
          <div className="flex z-1 items-center mr-3 z-1">
            <DropDownMenu
              backgroundColor="bg-indigo-500"
              title={"Hi, " + data.userDetails.username}
            >
              <Link to="/" className="no-underline text-white">
                <span onClick={() => Logout()}>Logout</span>
              </Link>
              <Link to="/user_profile" className="no-underline text-white">
                <span>User Profile</span>
              </Link>
            </DropDownMenu>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 h-screen">
        <div className="bg-indigo-500 col-span-2 h-full">
          <SideMenu />
        </div>
        <div className="col-span-10 p-3">{props.body}</div>
      </div>
    </div>
  );
};

export default Layout;

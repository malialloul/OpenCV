import React, { useContext } from "react";
import Modal from "../components/Modal";
import Configurations from "../components/templates/properties/Configurations";
import Settings from "../components/templates/properties/Settings";
import SideMenuSettings from "../components/templates/helper/SideMenuSettings";
import Wrapper from "../components/templates/helper/Wrapper";
import { GlobalContext } from "../services/AppContext";
import CommonFuntions from "../services/CommonFunctions";
import TemplateSteps from "../components/templates/properties/TemplateSteps";

const Builder = () => {
  const { Logout, InitializeUser } = CommonFuntions();
  InitializeUser();
  const { Header, Body } = Configurations();
  const { SettingsHeader, SettingsBody } = Settings();
  const { updateIndex, updateSettingsModal, data } = useContext(GlobalContext);
  const modifyTemplateVisibility = () => {
    updateIndex("");
  };
  const modifySettingsVisibility = () => {
    updateSettingsModal();
  };
  console.log(data)

  return (
    <div className="">
      <div className="grid grid-cols-12 h-screen">
        <div className="bg-indigo-500 col-span-2 h-full">
          <SideMenuSettings />
        </div>

        <div className="col-span-10">
        <div className="bg-indigo-500 flex justify-between p-1">
        <TemplateSteps />

        <div className="flex items-center">
            <div className="text-2xl text-white">Hi, {data.userDetails.username}</div>

        </div>
            </div>
          <div className="flex-col">
           
            {data.userSettings.published && (
              <div className="bg-green-300 p-3  rounded">
                <span>
                  You can view your CV on{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={"localhost:3000/template/" + data.userDetails.id}
                  >
                    localhost:3000/template/{data.userDetails.id}
                  </a>
                </span>
              </div>
            )}
            <div className="p-3">
            <Wrapper />
            </div>

            <div className="flex items-center">
              <Modal
                Header={Header}
                Body={Body}
                visible={data.sectionIndex !== ""}
                onClick={modifyTemplateVisibility}
              />
              <Modal
                Header={SettingsHeader}
                Body={SettingsBody}
                visible={data.settingsModal}
                onClick={modifySettingsVisibility}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;

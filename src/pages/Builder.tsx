import React, { useContext } from "react";
import Modal from "../components/Modal";
import Configurations from "../components/templates/properties/Configurations";
import Settings from "../components/templates/properties/Settings";
import SideMenu from "../components/templates/properties/TemplateSteps";
import SideMenuSettings from "../components/templates/sections/SideMenuSettings";
import Wrapper from "../components/templates/sections/Wrapper";
import { GlobalContext } from "../services/AppContext";
import CommonFuntions from "../services/CommonFunctions";
import { updateSettings } from "../services/HTTPContext";

const Builder = () => {
  const { Header, Body } = Configurations();

  const { SettingsHeader, SettingsBody } = Settings();
  const { updateIndex, updateSettingsModal, data } = useContext(GlobalContext);
  console.log(data.sectionIndex)
  const modifyTemplateVisibility = () => {
    updateIndex("");
  };
  const modifySettingsVisibility = () => {
    updateSettingsModal();
  };

  return (
    <div className="">
      <div className="grid grid-cols-12 h-screen">
        <div className="bg-indigo-500 col-span-2 h-full">
          <SideMenuSettings />
        </div>

        <div className="col-span-10 p-3">
          <div className="flex-col">
            <SideMenu />
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
            <Wrapper />

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

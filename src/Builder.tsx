import React, { useContext, useState } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Modal from "./components/Modal";
import PersonalProfile from "./components/PersonalProfile";
import Projects from "./components/Projects";
import Configurations from "./components/templates/properties/Configurations";
import Settings from "./components/templates/properties/Settings";
import SideMenu from "./components/templates/properties/SideMenu";
import Wrapper from "./components/Wrapper";
import { GlobalContext } from "./services/AppContext";
import { ExportToWord } from "./services/ExportToWord";

const Builder = () => {
  const { Header, Body } = Configurations();
  const { SettingsHeader, SettingsBody } = Settings();
  const {
    data,
    updateData,
    updateIndex,
    sectionIndex,
    settingsModal,
    updateSettingsModal,
    templateIndex,
  } = useContext(GlobalContext);
  const modifyTemplateVisibility = () => {
    updateIndex("");
  };
  const modifySettingsVisibility = () => {
    updateSettingsModal();
  };
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <div className="flex items-center">
            <img src="logo.png" className="w-1/4 h-1/2" alt="" />
            <span>v 1.0.0</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 h-screen">
        <div className="bg-indigo-500 col-span-3 h-full">
          <SideMenu />
        </div>

        <div className="col-span-9 p-3">
          <Wrapper />

          <div className="flex items-center">
            <Modal
              Header={Header}
              Body={Body}
              visible={sectionIndex !== ""}
              onClick={modifyTemplateVisibility}
            />
            <Modal
              Header={SettingsHeader}
              Body={SettingsBody}
              visible={settingsModal}
              onClick={modifySettingsVisibility}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Builder;

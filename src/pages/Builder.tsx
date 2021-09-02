import React, { useContext } from "react";
import Modal from "../components/Modal";
import Configurations from "../components/templates/properties/Configurations";
import Settings from "../components/templates/properties/Settings";
import Wrapper from "../components/templates/helper/Wrapper";
import { GlobalContext } from "../services/AppContext";
import CommonFuntions from "../services/CommonFunctions";
import TemplateSteps from "../components/templates/properties/TemplateSteps";
import Layout from "../components/Layout";
import BuilderSideMenu from "../components/templates/helper/BuilderSideMenu";

const Builder = () => {
  const { InitializeUser } = CommonFuntions();
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

  return (
    <>
      <Layout
        header={<TemplateSteps />}
        body={<Wrapper />}
        sideMenu={<BuilderSideMenu />}
      />
      <div className="flex-col z-0">
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
    </>
  );
};

export default Builder;

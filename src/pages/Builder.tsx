import React, { useContext } from "react";
import Modal from "../components/Modal";
import Configurations from "../components/properties/Configurations";
import Settings from "../components/properties/Settings";
import { GlobalContext } from "../services/AppContext";
import CommonFuntions from "../services/CommonFunctions";
import TemplateSteps from "../components/builder/TemplateSteps";
import Layout from "../components/Layout";
import BuilderSideMenu from "../components/builder/BuilderSettings";
import BuilderBody from "../components/builder/BuilderBody";

const Builder = () => {
  const { InitializeUser } = CommonFuntions();
  InitializeUser();
  const { Header, Body } = Configurations();
  const { updateBuilderSectionIndex, updateSettingsModal, data } =
    useContext(GlobalContext);
  const modifyTemplateVisibility = () => {
    updateBuilderSectionIndex("");
  };
 

  return (
    <>
      <Layout
        pageName="Builder"
        body={<BuilderBody />}
        sideMenu={<BuilderSideMenu />}
      />
      <div className="flex-col z-0">
        <div className="flex items-center">
          <Modal
            Header={Header}
            Body={Body}
            visible={data.builderSectionIndex !== ""}
            onClick={modifyTemplateVisibility}
          />
        </div>
      </div>
    </>
  );
};

export default Builder;

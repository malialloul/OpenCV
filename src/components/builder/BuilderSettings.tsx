import React, { useContext, useState } from "react";
import { GlobalContext } from "../../services/AppContext";
import CommonFuntions from "../../services/CommonFunctions";
import { updateSettings } from "../../services/HTTPContext";
import { Link } from "react-router-dom";
import DropDownMenu from "../inputs/DropDownMenu";
import classNames from "classnames";
import Modal from "../Modal";
import AddSection from "./AddSection";

const BuilderSettings = () => {
  const {
    PublishTemplate,
    AutoFill,
    ClearCV,
    UpdateTemplateVersion,
    UnpublishTemplate,
    CheckPersonalInfoStatus,
  } = CommonFuntions();
  const { data } = useContext(GlobalContext);

  const publish = () => {
    PublishTemplate();
    //  updateSettings();
  };

  const unpublish = () => {
    UnpublishTemplate();
    //updateSettings();
  };
  const saveSettings = () => {
    updateSettings(data).then(() => {
      alert("Saved");
    });
  };
  const [visibleAddSection, setVisibleAddSection] = useState(false);
  return (
    <div className="flex  justify-center items-center">
      <div
        onClick={() => AutoFill()}
        className="cursor-pointer flex items-center hover:bg-gray-500 text-white p-3  bg-indigo-500"
      >
        <img
          className="w-1/12 h-1/12"
          src="https://img.icons8.com/material-two-tone/100/000000/flash-auto.png"
        />
        <div className="text-center w-full">AutoFill</div>
      </div>
      {data.settings.personal_details.text !== "" && (
        <div
          onClick={() => ClearCV()}
          className="cursor-pointer flex text-white p-3 hover:bg-gray-500 bg-indigo-500"
        >
          <img
            className="w-1/12 h-1/12"
            src="https://img.icons8.com/material-two-tone/100/000000/flash-auto.png"
          />
          <div className="text-center w-full">Clear</div>
        </div>
      )}
      <div className="cursor-pointer flex text-white p-3 hover:bg-gray-500 bg-indigo-500">
        <img
          className="w-1/12 h-1/12"
          src="https://img.icons8.com/material-two-tone/100/000000/flash-auto.png"
        />
        <div className="w-full text-center">
          <DropDownMenu
            backgroundColor="bg-indigo-500"
            titleClass="text-center"
            title={
              sessionStorage.getItem("templateIndex") + "" === "0"
                ? "Template 1"
                : sessionStorage.getItem("templateIndex") + "" === "1"
                ? "Template 2"
                : "Template 3"
            }
          >
            <span
              className={classNames({
                "bg-gray-500":
                  sessionStorage.getItem("templateIndex") + "" === "0",
              })}
              onClick={() => UpdateTemplateVersion(0)}
            >
              {" "}
              Template 1
            </span>
            <span
              className={classNames({
                "bg-gray-500":
                  sessionStorage.getItem("templateIndex") + "" === "1",
              })}
              onClick={() => UpdateTemplateVersion(1)}
            >
              {" "}
              Template 2
            </span>
            <span
              className={classNames({
                "bg-gray-500":
                  sessionStorage.getItem("templateIndex") + "" === "2",
              })}
              onClick={() => UpdateTemplateVersion(2)}
            >
              {" "}
              Template 3
            </span>
          </DropDownMenu>
        </div>
      </div>
      {data.settings.personal_details.text !== "" && (
        <div
          onClick={() => saveSettings()}
          className="cursor-pointer flex text-white hover:bg-gray-500  p-3 bg-indigo-500"
        >
          <img
            className="w-1/12 h-1/12"
            src="https://img.icons8.com/material-two-tone/100/000000/flash-auto.png"
          />
          <div className="text-center w-full">Save</div>
        </div>
      )}
      {CheckPersonalInfoStatus() && !data.settings.published && (
        <div
          onClick={() => publish()}
          className="cursor-pointer flex text-white p-3 hover:bg-gray-500  bg-indigo-500"
        >
          <img
            className="w-1/12 h-1/12"
            src="https://img.icons8.com/material-two-tone/100/000000/flash-auto.png"
          />
          <div className="text-center w-full">Publish CV</div>
        </div>
      )}
      {data.settings.published && (
        <div
          onClick={() => unpublish()}
          className="cursor-pointer flex  text-white p-3 hover:bg-gray-500  bg-indigo-500"
        >
          <img
            className="w-1/12 h-1/12"
            src="https://img.icons8.com/material-two-tone/100/000000/flash-auto.png"
          />
          <div className="text-center w-full">Unpublish CV</div>
        </div>
      )}
      <div
        onClick={() => setVisibleAddSection(true)}
        className="cursor-pointer flex  text-white p-3 hover:bg-gray-500  bg-indigo-500"
      >
        <img
          className="w-1/12 h-1/12"
          src="https://img.icons8.com/material-two-tone/100/000000/flash-auto.png"
        />
        <div className="text-center w-full">Add Section</div>
      </div>
      <Modal
        Header={"Add Section"}
        Body={<AddSection submitted={() => setVisibleAddSection(false)} />}
        visible={visibleAddSection}
        onClick={() => setVisibleAddSection(false)}
      />
      ;
    </div>
  );
};
export default BuilderSettings;

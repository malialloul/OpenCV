import React, { useContext } from "react";
import { GlobalContext } from "../../services/AppContext";
import CommonFuntions from "../../services/CommonFunctions";
import { updateSettings } from "../../services/HTTPContext";
import { Link } from "react-router-dom";

const BuilderSideMenu = () => {
  const {
    PublishTemplate,
    AutoFill,
    ClearCV,
    UpdateTemplateVersion,
    UnpublishTemplate,
  } = CommonFuntions();
  const { data } = useContext(GlobalContext);
  const publish = () => {
    PublishTemplate();
    updateSettings();
    
  };

  const unpublish = () => {
    UnpublishTemplate();
    updateSettings();
  };
  return (
    <div className="flex  justify-start items-center">
      <div className="flex-col w-full divide-y-2 gap-x-2 h-full justify-end items-center">
       
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

        {data.userSettings.personal_details.text !== "" && (
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
            <select
              defaultValue={data.userSettings.templateIndex}
              onChange={(e) => UpdateTemplateVersion(parseInt(e.target.value))}
              className="bg-indigo-500 hover:bg-gray-500 text-white cursor-pointer"
            >
              <option className="cursor-pointer" value={0}>
                Template 1
              </option>
              <option className="cursor-pointer" value={1}>
                Template 2
              </option>
              <option className="cursor-pointer" value={2}>
                Template 3
              </option>
            </select>
          </div>
        </div>

        {data.userSettings.personal_details.text !== "" && (
          <div
            onClick={() => updateSettings()}
            className="cursor-pointer flex text-white hover:bg-gray-500  p-3 bg-indigo-500"
          >
            <img
              className="w-1/12 h-1/12"
              src="https://img.icons8.com/material-two-tone/100/000000/flash-auto.png"
            />
            <div className="text-center w-full">Save</div>
          </div>
        )}

        {data.userSettings.contact.sections.length !== 0 &&
          !data.userSettings.published && (
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

        {data.userSettings.published && (
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

        <Link
          to=""
          className="cursor-pointer no-underline flex items-center hover:bg-gray-500 text-white p-3  bg-indigo-500"
        >
          <img
            className="w-1/12 h-1/12"
            src="https://img.icons8.com/material-two-tone/100/000000/flash-auto.png"
          />
          <div className="text-center w-full">Create Template</div>
        </Link>
      </div>
    </div>
  );
};
export default BuilderSideMenu;

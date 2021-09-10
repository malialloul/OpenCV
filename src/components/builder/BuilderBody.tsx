import classNames from "classnames";
import React, { useContext } from "react";
import { useEffect } from "react";
import { GlobalContext } from "../../services/AppContext";
import CommonFuntions from "../../services/CommonFunctions";
import { getTemplateSettings } from "../../services/HTTPContext";
import Settings from "../properties/Settings";
import Builder1 from "../templates/Builder1";
import Builder2 from "../templates/Builder2";
import Builder3 from "../templates/Builder3";
import BuilderSettings from "./BuilderSettings";
import TemplateSteps from "./TemplateSteps";

const BuilderBody = ({ ...props }: any) => {
  const { data, updateSettings } = useContext(GlobalContext);
  const templateIndex = sessionStorage.getItem("templateIndex");
  const templateId = sessionStorage.getItem("templateId");
  const { CheckPersonalInfoStatus } = CommonFuntions();

  useEffect(() => {
    if (data.settings.templateId === "") {
      getTemplateSettings(templateId || "").then((response) => {
        updateSettings(response[0]);
      });
    }
  });

  return (
    <>
      <div className="grid grid-cols-12">
        <div
          className={classNames({
            "col-span-10": data.settingsSectionIndex !== "",
            "col-span-12": data.settingsSectionIndex === "",
          })}
        >
          <div className="relative p-3">
            <TemplateSteps />

            <BuilderSettings />
            <br />
            {templateIndex === "0" ? (
              <Builder1 debug={CheckPersonalInfoStatus()} />
            ) : templateIndex === "1" ? (
              <Builder2 debug={CheckPersonalInfoStatus()} />
            ) : templateIndex === "2" ? (
              <Builder3 debug={CheckPersonalInfoStatus()} />
            ) : (
              <></>
            )}
          </div>
        </div>

        <div
          className={classNames("bg-indigo-500", {
            "col-span-2": data.settingsSectionIndex !== "",
            hidden: data.settingsSectionIndex === "",
          })}
        >
          <Settings />
        </div>
      </div>
    </>
  );
};

export default BuilderBody;

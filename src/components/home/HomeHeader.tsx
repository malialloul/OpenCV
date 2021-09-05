import classNames from "classnames";
import React, { useContext } from "react";
import { useState } from "react";
import { GlobalContext } from "../../services/AppContext";
import CommonFuntions from "../../services/CommonFunctions";

const HomeHeader = ({ ...props }) => {
  const { data, updateHomeSectionIndex } = useContext(GlobalContext);
  const updateTemplateIndex = (condition: boolean, sectionName: string) => {
    if (condition) {
      updateHomeSectionIndex(sectionName);
    }
  };

  return (
    <div className="flex text-white  items-start p-2 z-0 relative">
      <div
        onClick={() => updateTemplateIndex(true, "name")}
        className={classNames(
          "flex-col p-3 cursor-pointer rounded hover:bg-gray-200",
          {
            "bg-gray-200": data.homeSectionIndex === "name",
          }
        )}
      >
        <div className={"flex items-center "}>
          <span className="">Name</span>
        </div>
      </div>
      <div
        onClick={() =>
          updateTemplateIndex(props.templateName !== "", "templates")
        }
        className={classNames("flex-col p-3 cursor-pointer rounded", {
          "hover:bg-gray-200": props.templateName !== "",
          "bg-gray-200": data.homeSectionIndex === "templates",
          "text-gray-500": props.templateName === "",
        })}
      >
        <div className={"flex items-center "}>
          <span className="">Template</span>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;

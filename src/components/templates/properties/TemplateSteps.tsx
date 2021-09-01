import classNames from "classnames";
import React, { useContext } from "react";
import { GlobalContext } from "../../../services/AppContext";
import CommonFuntions from "../../../services/CommonFunctions";

const TemplateSteps = () => {
  const { data, updateIndex } = useContext(GlobalContext);

  const { CheckSections, CheckProjectsStatus, CheckSectionTextStatus } =
    CommonFuntions();

  const updateTemplateIndex = (condition: boolean, sectionName: string) => {
    if (condition) {
      updateIndex(sectionName);
    }
  };
  return (
    <div className="flex justify-center items-start p-2 z-0 relative">
      <div
        onClick={() => updateIndex("personal_details")}
        className={classNames("flex-col p-3 cursor-pointer rounded", {
          "hover:bg-gray-200": data.sectionIndex !== "personal_details",
          "bg-gray-200": data.sectionIndex === "personal_details",
        })}
      >
        <div className={"flex items-center "}>
          <span className="">Personal Profile</span>
        </div>
      </div>

      <div
        onClick={() =>
          updateTemplateIndex(data.userSettings.personal_details.text !== "", "education")
        }
        className={classNames("flex-col p-3 cursor-pointer rounded", {
          "hover:bg-gray-200":
            data.sectionIndex !== "education" && data.userSettings.personal_details.text !== "",
          "bg-gray-200": data.sectionIndex === "education",
          "text-gray-500": data.userSettings.personal_details.text === "",
        })}
      >
        <div className={"flex items-center "}>
          <span className="">Education</span>
        </div>
      </div>

      <div
        onClick={() =>
          updateTemplateIndex(CheckSections("education"), "experience")
        }
        className={classNames("flex-col p-3 cursor-pointer rounded", {
          "hover:bg-gray-200":
            data.sectionIndex !== "experience" && CheckSections("education"),
          "bg-gray-200": data.sectionIndex === "experience",
          "text-gray-500": !CheckSections("education"),
        })}
      >
        <div className={"flex "}>
          <span className="">Experience</span>
        </div>
      </div>

      <div
        onClick={() =>
          updateTemplateIndex(CheckSections("experience"), "projects")
        }
        className={classNames("flex-col p-3 cursor-pointer rounded", {
          "hover:bg-gray-200":
            data.sectionIndex !== "projects" && CheckSections("experience"),
          "bg-gray-200": data.sectionIndex === "projects",
          "text-gray-500": !CheckSections("experience"),
        })}
      >
        <div className={"flex "}>
          <span className="">Projects</span>
        </div>
      </div>

      <div
        onClick={() => updateTemplateIndex(CheckProjectsStatus(), "languages")}
        className={classNames("flex-col p-3 cursor-pointer rounded", {
          "hover:bg-gray-200":
            data.sectionIndex !== "languages" && CheckProjectsStatus(),
          "bg-gray-200": data.sectionIndex === "languages",
          "text-gray-500": !CheckProjectsStatus(),
        })}
      >
        <div className={"flex "}>
          <span className="">Languages</span>
        </div>
      </div>

      <div
        onClick={() =>
          updateTemplateIndex(CheckSectionTextStatus("languages"), "contact")
        }
        className={classNames("flex-col p-3 cursor-pointer rounded", {
          "hover:bg-gray-200":
            data.sectionIndex !== "contact" && CheckSectionTextStatus("languages"),
          "bg-gray-200": data.sectionIndex === "contact",
          "text-gray-500": !CheckSectionTextStatus("languages"),
        })}
      >
        <div className={"flex "}>
          <span className="">Contact</span>
        </div>
      </div>
    </div>
  );
};

export default TemplateSteps;

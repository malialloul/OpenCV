import classNames from "classnames";
import React, { useContext } from "react";
import { GlobalContext } from "../../services/AppContext";
import CommonFuntions from "../../services/CommonFunctions";

const TemplateSteps = () => {
  const { data, updateBuilderSectionIndex } = useContext(GlobalContext);
  console.log(data);

  const { CheckSections, CheckProjectsStatus, CheckSectionTextStatus } =
    CommonFuntions();

  const updateTemplateIndex = (condition: boolean, sectionName: string) => {
    if (condition) {
      updateBuilderSectionIndex(sectionName);
    }
  };
  console.log(data)
  return (
    <div className="flex text-white  items-start p-2 z-0 relative">
      <div
        onClick={() => updateBuilderSectionIndex("personal_details")}
        className={classNames("flex-col p-3 cursor-pointer rounded", {
          "hover:bg-gray-200": data.builderSectionIndex !== "personal_details",
          "bg-gray-200": data.builderSectionIndex === "personal_details",
        })}
      >
        <div className={"flex items-center "}>
          <span className="">Personal Profile</span>
        </div>
      </div>
      <div
        onClick={() =>
          updateTemplateIndex(
            data.settings.personal_details.text !== "",
            "education"
          )
        }
        className={classNames("flex-col p-3 cursor-pointer rounded", {
          "hover:bg-gray-200":
            data.builderSectionIndex !== "education" &&
            data.settings.personal_details.text !== "",
          "bg-gray-200": data.builderSectionIndex === "education",
          "text-gray-500": data.settings.personal_details.text === "",
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
            data.builderSectionIndex !== "experience" && CheckSections("education"),
          "bg-gray-200": data.builderSectionIndex === "experience",
          "text-gray-500": !CheckSections("education"),
        })}
      >
        <div className={"flex "}>
          <span className="">Experience</span>
        </div>
      </div>
      <div
        onClick={() =>
          updateTemplateIndex(CheckSections("experience"), "skills")
        }
        className={classNames("flex-col p-3 cursor-pointer rounded", {
          "hover:bg-gray-200":
            data.builderSectionIndex !== "skills" && CheckSections("experience"),
          "bg-gray-200": data.builderSectionIndex === "skills",
          "text-gray-500": !CheckSections("experience"),
        })}
      >
        <div className={"flex "}>
          <span className="">Skills</span>
        </div>
      </div>
      <div
        onClick={() =>
          updateTemplateIndex(CheckSections("experience"), "projects")
        }
        className={classNames("flex-col p-3 cursor-pointer rounded", {
          "hover:bg-gray-200":
            data.builderSectionIndex !== "projects" && CheckSections("experience"),
          "bg-gray-200": data.builderSectionIndex === "projects",
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
            data.builderSectionIndex !== "languages" && CheckProjectsStatus(),
          "bg-gray-200": data.builderSectionIndex === "languages",
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
            data.builderSectionIndex !== "contact" &&
            CheckSectionTextStatus("languages"),
          "bg-gray-200": data.builderSectionIndex === "contact",
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

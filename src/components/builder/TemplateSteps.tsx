import classNames from "classnames";
import React, { useContext } from "react";
import { GlobalContext } from "../../services/AppContext";
import CommonFuntions from "../../services/CommonFunctions";

const TemplateSteps = () => {
  const { data, updateBuilderSectionIndex } = useContext(GlobalContext);
  const { CheckSections, CheckProjectsStatus, CheckPersonalInfoStatus } =
    CommonFuntions();

  const updateTemplateIndex = (condition: boolean, sectionName: string) => {
    if (true) {
      updateBuilderSectionIndex(sectionName);
    }
  };
  return (
    <div className="flex text-white bg-indigo-500 justify-center  items-start p-2 z-0 relative">
      <div
        onClick={() => updateBuilderSectionIndex("personal_info")}
        className={classNames("flex-col p-3 cursor-pointer rounded", {
          "hover:bg-gray-200": data.builderSectionIndex !== "personal_info",
          "bg-gray-200": data.builderSectionIndex === "personal_info",
        })}
      >
        <div className={"flex "}>
          <span className="">Personal Information</span>
        </div>
      </div>

      <div
        onClick={() =>
          updateTemplateIndex(CheckPersonalInfoStatus(), "personal_details")
        }
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
          "hover:bg-gray-200": data.builderSectionIndex !== "education",
          "bg-gray-200": data.builderSectionIndex === "education",
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
          "hover:bg-gray-200": data.builderSectionIndex !== "experience",
          "bg-gray-200": data.builderSectionIndex === "experience",
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
          "hover:bg-gray-200": data.builderSectionIndex !== "skills",
          "bg-gray-200": data.builderSectionIndex === "skills",
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
          "hover:bg-gray-200": data.builderSectionIndex !== "projects",
          "bg-gray-200": data.builderSectionIndex === "projects",
        })}
      >
        <div className={"flex "}>
          <span className="">Projects</span>
        </div>
      </div>
      <div
        onClick={() => updateTemplateIndex(CheckProjectsStatus(), "languages")}
        className={classNames("flex-col p-3 cursor-pointer rounded", {
          "hover:bg-gray-200": data.builderSectionIndex !== "languages",
          "bg-gray-200": data.builderSectionIndex === "languages",
        })}
      >
        <div className={"flex "}>
          <span className="">Languages</span>
        </div>
      </div>
      {data.settings.added_sections.map((section: any, index: any) => {
        return (
          <div
            onClick={() =>
              updateTemplateIndex(
                CheckProjectsStatus(),
                (section.sectionName + "").toLowerCase()
              )
            }
            key={"section" + index}
            className={classNames("flex-col p-3 cursor-pointer rounded", {
              "hover:bg-gray-200":
                data.builderSectionIndex !==
                (section.sectionName + "").toLowerCase(),
              "bg-gray-200":
                data.builderSectionIndex ===
                (section.sectionName + "").toLowerCase(),
            })}
          >
            <div className={"flex "}>
              <span className="">{section.sectionName}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TemplateSteps;

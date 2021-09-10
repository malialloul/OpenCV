import React, { useContext } from "react";
import { GlobalContext } from "../../services/AppContext";
import CommonFuntions from "../../services/CommonFunctions";

const Skills = ({ ...props }) => {
  const { data, updateSettingsSectionIndex } = useContext(GlobalContext);
  const { CheckSectionTextStatus } = CommonFuntions();
  return CheckSectionTextStatus("skills") ? (
    <div className="flex-col">
      <div className="flex justify-between">
        <h2>Skills </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() =>
            updateSettingsSectionIndex(
              data.settingsSectionIndex === "skills" ? "" : "skills"
            )
          }
        >
          <path
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

      {data.settings.skills.sections.map((section: any, index: number) => {
        return (
          <div
            key={"educ" + index}
            style={{ color: data.settings.skills.settings.textColor }}
            className={
              data.settings.skills.settings.fontSize +
              " flex " +
              data.settings.skills.settings.textPosition
            }
          >
            <div className="flex-col gap-y-3">
              <div className="flex">
                <span className="">{section.title}</span>
                {section.title !== "" && <span>: </span>}
                <span className="">{section.details}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <></>
  );
};

export default Skills;

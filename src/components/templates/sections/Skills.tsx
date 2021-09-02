import React, { useContext } from "react";
import { GlobalContext } from "../../../services/AppContext";
import CommonFuntions from "../../../services/CommonFunctions";

const Skills = ({ ...props }) => {
  const { data } = useContext(GlobalContext);
  const { CheckSectionTextStatus } = CommonFuntions();
  return CheckSectionTextStatus("skills") ? (
    <div className="flex-col">
      <h2>Skills</h2>

      {data.userSettings.skills.sections.map((section: any, index: number) => {
        return (
          <div
            key={"educ" + index}
            style={{ color: data.userSettings.skills.settings.textColor }}
            className={
              data.userSettings.skills.settings.fontSize +
              " flex " +
              data.userSettings.skills.settings.textPosition
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
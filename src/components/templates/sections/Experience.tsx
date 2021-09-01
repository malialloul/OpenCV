import React, { useContext } from "react";
import { GlobalContext } from "../../../services/AppContext";
import CommonFuntions from "../../../services/CommonFunctions";

const Experience = () => {
  const { data } = useContext(GlobalContext);
  const { CheckSections } = CommonFuntions();
  return CheckSections("experience") ? (
    <div className="flex-col">
      <h2>Experience</h2>

      {data.userSettings.experience.sections.map((section: any, index: number) => {
        return (
          <div
            key={"ex" + index}
            style={{ color: data.userSettings.experience.settings.textColor }}
            className={
              data.userSettings.experience.settings.fontSize +
              " flex " +
              data.userSettings.experience.settings.textPosition
            }
          >
            <div className="mr-1">{index + 1}.</div>
            <div className="flex-col gap-y-3">
              <div className="flex">
                <div>
                  <span className="">{section.from}</span>
                  <span> into </span>
                  <span className="">{section.to}</span>
                </div>
              </div>
              <div>
                <span className="">{section.text}</span>
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

export default Experience;

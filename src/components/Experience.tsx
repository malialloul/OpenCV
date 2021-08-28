import React, { useContext } from "react";
import { GlobalContext } from "../services/AppContext";
import CommonFuntions from "./CommonFunctions";

const Experience = () => {
  const { data } = useContext(GlobalContext);
  const { CheckSections } =
    CommonFuntions();
  return CheckSections("experience") ? (
    <div className="flex-col">
      <div>Experience</div>

      {data.experience.sections.map((section: any, index: number) => {
        return (
          <div
            key={"ex" + index}
            style={{ color: data.experience.settings.textColor }}
            className={
              data.experience.settings.fontSize +
              " flex " +
              data.experience.settings.textPosition
            }
          >
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

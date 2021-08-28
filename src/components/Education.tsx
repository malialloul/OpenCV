import React, { useContext } from "react";
import { GlobalContext } from "../services/AppContext";
import CommonFuntions from "./CommonFunctions";

const Education = () => {
  const { data } = useContext(GlobalContext);
  const { CheckSections} =
  CommonFuntions();

  return CheckSections('education') ? (
    <div className="flex-col">
      <div>Education</div>

      {data.education.sections.map((section: any, index: number) => {
        return (
          <div
            key={"educ" + index}
            style={{ color: data.education.settings.textColor }}
            className={
              data.education.settings.fontSize +
              " flex " +
              data.education.settings.textPosition
            }
          >
            <div className="flex-col gap-y-3">
              <div className="flex">
                <div>
                  <span className="">{section.from}</span>
                  {section.from !== "" && <span> into </span>}
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

export default Education;

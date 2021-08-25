import React, { useContext } from "react";
import { GlobalContext } from "../services/AppContext";

const Education = () => {
  const { data } = useContext(GlobalContext);
  return data.education.sections.length !== 0 ? (
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
                  {section.from !== "" && <span>-</span>}
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

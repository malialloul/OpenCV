import React, { useContext } from "react";
import { GlobalContext } from "../../services/AppContext";
import CommonFuntions from "../../services/CommonFunctions";

const Education = () => {
  const { data } = useContext(GlobalContext);
  const { CheckSections} =
  CommonFuntions();

  return CheckSections('education') ? (
    <div className="flex-col">
      <h2>Education</h2>

      {
        
      data.settings.education.sections.map((section: any, index: number) => {
        return (
          <div
            key={"educ" + index}
            style={{ color: data.settings.education.settings.textColor }}
            className={
              data.settings.education.settings.fontSize +
              " flex " +
              data.settings.education.settings.textPosition
            }
          >
            <div className="mr-1">
              {index +1}.
              </div>
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
      })
      
      }
    </div>
  ) : (
    <></>
  );
};

export default Education;

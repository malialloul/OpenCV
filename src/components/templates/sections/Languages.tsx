import React, { useContext } from "react";
import { GlobalContext } from "../../../services/AppContext";
import CommonFuntions from "../../../services/CommonFunctions";

const Languages = () => {
  const { data } = useContext(GlobalContext);
  const { CheckSectionTextStatus } = CommonFuntions();
  return CheckSectionTextStatus("languages") ? (
    <div className="flex-col">
      <h2>Languages</h2>
      {data.userSettings.languages.sections.map((text: string, index: number) => {
        return (
          <div
            key={"language" + index}
            style={{ color: data.userSettings.languages.settings.textColor }}
            className={
              data.userSettings.languages.settings.fontSize +
              " flex " +
              data.userSettings.languages.settings.textPosition
            }
          >
            <div className="flex-col gap-y-3">
             
              <div className="flex-col">{text}</div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <></>
  );
};

export default Languages;

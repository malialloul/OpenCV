import React, { useContext } from "react";
import { GlobalContext } from "../../services/AppContext";
import CommonFuntions from "../../services/CommonFunctions";

const Languages = () => {
  const { data } = useContext(GlobalContext);
  const { CheckSectionTextStatus } = CommonFuntions();
  return CheckSectionTextStatus("languages") ? (
    <div className="flex-col">
      <h2>Languages</h2>
      {data.settings.languages.sections.map((text: string, index: number) => {
        return (
          <div
            key={"language" + index}
            style={{ color: data.settings.languages.settings.textColor }}
            className={
              data.settings.languages.settings.fontSize +
              " flex " +
              data.settings.languages.settings.textPosition
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

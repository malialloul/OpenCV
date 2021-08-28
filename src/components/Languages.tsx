import React, { useContext } from "react";
import { GlobalContext } from "../services/AppContext";
import CommonFuntions from "./CommonFunctions";

const Languages = () => {
  const { data } = useContext(GlobalContext);
  const { CheckSectionTextStatus } =
    CommonFuntions();
  return CheckSectionTextStatus('languages') ? (
    <div className="flex-col">
      <div>Languages</div>
      {data.languages.sections.map((text: string, index: number) => {
        return (
          <div
            key={"language" + index}
            style={{ color: data.projects.settings.textColor }}
            className={
              data.projects.settings.fontSize +
              " flex " +
              data.projects.settings.textPosition
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

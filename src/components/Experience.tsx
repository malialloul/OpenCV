import React, { useContext } from "react";
import { GlobalContext } from "../services/AppContext";

const Experience = () => {
  const { data } = useContext(GlobalContext);
  return data.experience.sections.length !== 0 ? (
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
                  <span>-</span>
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

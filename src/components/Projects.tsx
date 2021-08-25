import React, { useContext } from "react";
import { GlobalContext } from "../services/AppContext";

const Projects = () => {
  const { data } = useContext(GlobalContext);
  return data.projects.text !== "" ? (
    <div className="flex-col">
      <div>Projects</div>
      <div>{data.projects.text}</div>
      {data.projects.sections.map((section: any, index: number) => {
        return (
          <div
            key={"project" + index}
            style={{ color: data.projects.settings.textColor }}
            className={
              data.projects.settings.fontSize +
              " flex " +
              data.projects.settings.textPosition
            }
          >
            <div className="flex-col gap-y-3">
              <div className="flex-col">
                <span className="">{section.projectName}</span>

                <span className="">{section.projectDescription}</span>
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

export default Projects;

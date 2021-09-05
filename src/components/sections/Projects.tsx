import React, { useContext } from "react";
import { GlobalContext } from "../../services/AppContext";
import CommonFuntions from "../../services/CommonFunctions";

const Projects = () => {
  const { data } = useContext(GlobalContext);
  const { CheckProjectsStatus } = CommonFuntions();
  return CheckProjectsStatus() ? (
    <div className="flex-col">
      <h2>Projects</h2>
      <div>{data.settings.projects.text}</div>
      <br/>
      {data.settings.projects.sections.map((section: any, index: number) => {
        return (
          <div
            key={"project" + index}
            style={{ color: data.settings.projects.settings.textColor }}
            className={
              data.settings.projects.settings.fontSize +
              " flex " +
              data.settings.projects.settings.textPosition
            }
          >
            <div className="mr-1">{index + 1}.</div>
            <div className="flex-col gap-y-3">
              <div className="flex-col">
                <span className="">{section.projectName}: </span>

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

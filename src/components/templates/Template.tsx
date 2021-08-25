import classNames from "classnames";
import React, { useContext } from "react";
import { GlobalContext } from "../../services/AppContext";

const Template = () => {
  const { data, updateData, updateIndex, sectionIndex } =
    useContext(GlobalContext);
 
  return (
    <div className="flex-col justify-center items-start p-2 z-0 relative">
      <div
        onClick={() => updateIndex("personal_details")}
        className={classNames("flex-col p-3 cursor-pointer rounded", {
          "hover:bg-gray-200": sectionIndex !== "personal_details",
          "bg-gray-200": sectionIndex === "personal_details",
        })}
      >
        <div className={"flex "}>
          <span className="">Personal Profile</span>
        </div>
       
      </div>

      <div
        onClick={() => updateIndex("education")}
        className={classNames("flex-col p-3 cursor-pointer rounded", {
          "hover:bg-gray-200": sectionIndex !== "education",
          "bg-gray-200": sectionIndex === "education",
        })}
      >
        <div className={"flex "}>
          <span className="">Education</span>
        </div>
       
      </div>

      <div
        onClick={() => updateIndex("experience")}
        className={classNames("flex-col p-3 cursor-pointer rounded", {
          "hover:bg-gray-200": sectionIndex !== "experience",
          "bg-gray-200": sectionIndex === "experience",
        })}
      >
        <div className={"flex "}>
          <span className="">Experience</span>
        </div>
      
      </div>

      <div
        onClick={() => updateIndex("languages")}
        className={classNames("flex-col p-3 cursor-pointer rounded", {
          "hover:bg-gray-200": sectionIndex !== "languages",
          "bg-gray-200": sectionIndex === "languages",
        })}
      >
        <div className={"flex "}>
          <span className="">Languages</span>
        </div>
       
      </div>

      <div
        onClick={() => updateIndex("projects")}
        className={classNames("flex-col p-3 cursor-pointer rounded", {
          "hover:bg-gray-200": sectionIndex !== "projects",
          "bg-gray-200": sectionIndex === "projects",
        })}
      >
        <div className={"flex "}>
          <span className="">Projects</span>
        </div>
        
      </div>
            
     
    </div>
  );
};

export default Template;

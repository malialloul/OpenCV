import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GlobalContext } from "../services/AppContext";
import CommonFuntions from "./CommonFunctions";

const Modal = () => {
  const { data, updateData, updateIndex, sectionIndex } =
    useContext(GlobalContext);
  const {
    AddEducation,
    ModifyText,
    UpdateFromSection,
    UpdateToSection,
    UpdateTextSection,
    AddExperience,
    AddLanguage,
    UpdateLanguage,
    AddProject,
    UpdateProjectDescription,
    UpdateProjectName,
  } = CommonFuntions();
  const [visible, isVisible] = useState(sectionIndex !== "");
  const modifyVisibility = () => {
    isVisible(false);
    updateIndex("");
  };
  useEffect(() => {
    if (sectionIndex !== "") {
      isVisible(true);
    }
  }, [sectionIndex]);

  return visible ? (
    <div className="absolute w-1/2 h-96 left-1/4 top-1/4 z-10 bg-green-600 overflow-scroll">
      <div className="flex justify-end">
        <span className="cursor-pointer" onClick={() => modifyVisibility()}>
          X
        </span>
      </div>
      {sectionIndex === "personal_details" ? (
        <div className="flex-col">
          <div className="flex justify-center">
            <span className="text-lg">Personal Profile Details</span>
          </div>
          <div className="flex justify-center">
            <textarea
              className={"flex h-52  "}
              onChange={(e) => ModifyText(e)}
              placeholder="Type your profile"
              value={data[sectionIndex].text}
              rows={20}
              cols={80}
            />
          </div>
        </div>
      ) : sectionIndex === "education" ? (
        <div className="flex-col">
          <div className="flex justify-center">
            <span className="text-lg">Experience Details</span>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => AddEducation()}
              className="rounded h-12 bg-blue-700"
            >
              Add Experience
            </button>
          </div>
          <br />
          <div className="flex-wrap flex">
            {data[sectionIndex].sections.map((section: any, index: any) => {
              return (
                <div className="flex-col gap-y-6 pl-2 pt-5">
                  <div className="flex justify-center">
                    <span>Experience {index + 1}</span>
                  </div>
                  <div className="border-2 p-2">
                  <div className="flex gap-x-3">
                    <div>
                      <input
                        onChange={(e) => UpdateFromSection(e, index)}
                        className="w-32 p-2 rounded"
                        placeholder="from"
                      />
                    </div>
                    <div>
                      <input
                        className="w-32 p-2 rounded"
                        placeholder="To"
                        onChange={(e) => UpdateToSection(e, index)}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="flex justify-center">
                    <textarea
                      className="rounded"
                      placeholder="Experience"
                      onChange={(e) => UpdateTextSection(e, index)}
                    />
                  </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : sectionIndex === "experience" ? (
        <div>
          <button onClick={() => AddExperience()} className="rounded w-12 h-12">
            Add
          </button>
          {data[sectionIndex].sections.map((section: any, index: any) => {
            return (
              <div className="flex-col gap-y-3">
                <div className="flex">
                  <div>
                    <input
                      onChange={(e) => UpdateFromSection(e, index)}
                      className=""
                      placeholder="from"
                    />
                  </div>
                  <div>
                    <input
                      className=""
                      placeholder="To"
                      onChange={(e) => UpdateToSection(e, index)}
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    className=""
                    placeholder="Experience"
                    onChange={(e) => UpdateTextSection(e, index)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      ) : sectionIndex === "languages" ? (
        <div>
          <button onClick={() => AddLanguage()} className="rounded w-12 h-12">
            Add
          </button>
          {data[sectionIndex].sections.map((text: any, index: any) => {
            return (
              <div className="flex-col gap-y-3">
                <div className="flex">
                  <div>
                    <input
                      onChange={(e) => UpdateLanguage(e, index)}
                      className=""
                      value={text}
                      placeholder="Language"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : sectionIndex === "projects" ? (
        <div className="flex-col">
          <textarea onChange={(e) => ModifyText(e)} /> <br />
          <button onClick={() => AddProject()} className="rounded w-12 h-12">
            Add
          </button>
          {data[sectionIndex].sections.map((section: any, index: any) => {
            return (
              <div className="flex-col gap-y-3">
                <div>
                  <input
                    onChange={(e) => UpdateProjectName(e, index)}
                    value={section.projectName}
                  ></input>
                </div>
                <div>
                  <textarea
                    className=""
                    placeholder="Experience"
                    onChange={(e) => UpdateProjectDescription(e, index)}
                  >
                    {section.projectDescription}
                  </textarea>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  ) : (
    <></>
  );
};
export default Modal;

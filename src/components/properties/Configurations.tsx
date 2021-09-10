import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../services/AppContext";
import CommonFuntions from "../../services/CommonFunctions";

const Configurations = () => {
  const { data, updateSettingsModal, updateData } = useContext(GlobalContext);
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
    DeleteSection,
    AddPersonalInfo,
    UpdateTitleSection,
    UpdateDetailsSection,
    AddSkill,
    UpdatePersonalInfoName,
    UpdatePersonalInfoPhoneNumber,
    UpdatePersonalInfoEmail,
    UpdatePersonalInfoSection,
    ModifyAddedSection,
  } = CommonFuntions();
 
  let temp: any = {
    sectionName: "",
    sectionDetails: "",
    settings: "",
  };

  const [addedSectionDetails, setAddedSectionDetails] = useState(temp);
  useEffect(() => {
    let details = data.settings.added_sections.filter(
      (item: any) => item.sectionName === data.builderSectionIndex
    );
    if (details.length !== 0) {
      setAddedSectionDetails(details[0]);
    }
  }, [data.builderSectionIndex]);

  const Header = (
    <div className="flex justify-between gap-x-0.5">
      <span> {data.builderSectionIndex.toUpperCase().replace("_", " ")}</span>
    </div>
  );

  const Body = (
    <div className="">
      {data.builderSectionIndex === "personal_details" ? (
        <div className="flex-col">
          <div className="flex justify-center">
            <textarea
              className={"flex h-52 w-full "}
              onChange={(e) => ModifyText(e)}
              placeholder="Type your profile"
              value={data.settings[data.builderSectionIndex].text}
            />
          </div>
        </div>
      ) : data.builderSectionIndex === "education" ? (
        <div className="flex-col">
          <div className="flex justify-center">
            <button
              onClick={() => AddEducation()}
              className="rounded h-12 w-full p-2 cursor-pointer bg-indigo-500"
            >
              Add Education
            </button>
          </div>
          <br />
          <div className="flex-wrap justify-center flex items-center">
            {data.settings[data.builderSectionIndex].sections.map(
              (section: any, index: any) => {
                return (
                  <div
                    key={"education" + index}
                    className="flex-col w-full gap-y-6 pl-2 pt-5"
                  >
                    <div className="flex justify-center">
                      <span>Education {index + 1}</span>
                    </div>
                    <div className="border-2 p-2 w-full">
                      <div className="flex-wrap w-full gap-x-3">
                        <input
                          onChange={(e) => UpdateFromSection(e, index)}
                          className="w-1/2 p-2 rounded"
                          placeholder="from"
                          type="date"
                          value={section.from}
                        />
                        <input
                          className="w-1/2 p-2 rounded"
                          placeholder="To"
                          onChange={(e) => UpdateToSection(e, index)}
                          type="date"
                          value={section.to}
                        />
                      </div>
                      <br />
                      <textarea
                        className="rounded w-full p-2"
                        placeholder="Education"
                        onChange={(e) => UpdateTextSection(e, index)}
                        value={section.text}
                      />
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={() => DeleteSection(index)}
                        className="p-3 w-full cursor-pointer bg-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      ) : data.builderSectionIndex === "experience" ? (
        <div className="flex-col">
          <div className="flex justify-center">
            <button
              onClick={() => AddExperience()}
              className="rounded w-full h-12 p-2 cursor-pointer bg-indigo-500"
            >
              Add Experience
            </button>
          </div>
          <br />
          <div className="flex-wrap justify-center flex items-center">
            {data.settings[data.builderSectionIndex].sections.map(
              (section: any, index: any) => {
                return (
                  <div
                    key={"experience" + index}
                    className="flex-col gap-y-6 pl-2 pt-5"
                  >
                    <div className="flex justify-center">
                      <span>Experience {index + 1}</span>
                    </div>
                    <div className="border-2 p-2">
                      <div className="flex-wrap gap-x-3">
                        <input
                          onChange={(e) => UpdateFromSection(e, index)}
                          className="w-1/2 p-2 rounded"
                          placeholder="from"
                          type="date"
                          value={section.from}
                        />
                        <input
                          className="w-1/2 p-2 rounded"
                          placeholder="To"
                          onChange={(e) => UpdateToSection(e, index)}
                          type="date"
                          value={section.to}
                        />
                      </div>
                      <br />
                      <textarea
                        className="rounded w-full p-2"
                        placeholder="Experience"
                        onChange={(e) => UpdateTextSection(e, index)}
                        value={section.text}
                      />
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={() => DeleteSection(index)}
                        className="p-3 w-full cursor-pointer bg-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      ) : data.builderSectionIndex === "languages" ? (
        <div className="flex-col">
          <div className="flex justify-center">
            <button
              onClick={() => AddLanguage()}
              className="rounded w-full h-12 p-2 cursor-pointer bg-indigo-500"
            >
              Add Language
            </button>
          </div>
          {data.settings[data.builderSectionIndex].sections.map(
            (text: any, index: any) => {
              return (
                <div key={"lang" + index} className="flex-col align-middle">
                  <div className="flex items-center">
                    <input
                      onChange={(e) => UpdateLanguage(e, index)}
                      className="p-2 mb-2 mt-2 w-full"
                      value={text}
                      placeholder={"Language " + (index + 1)}
                    />
                    <div
                      onClick={() => DeleteSection(index)}
                      className="rounded bg-red-500 cursor-pointer flex justify-center items-center w-10 h-10"
                    >
                      X
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      ) : data.builderSectionIndex === "projects" ? (
        <div className="flex-col gap-y-2">
          <div className="flex-col flex justify-center">
            <input
              placeholder="Projects Description "
              onChange={(e) => ModifyText(e)}
              className="p-2"
              value={data.settings.projects.text}
            />{" "}
            <br />
            <button
              onClick={() => AddProject()}
              className="rounded h-12 p-2 cursor-pointer bg-indigo-500"
            >
              Add Project
            </button>
          </div>
          <div className="p-3">
            {data.settings[data.builderSectionIndex].sections.map(
              (section: any, index: any) => {
                return (
                  <div key={"project" + index} className="flex-col mt-3">
                    <div className="flex justify-center">
                      <span>Project {index + 1}</span>
                    </div>
                    <div className="border-2">
                      <input
                        onChange={(e) => UpdateProjectName(e, index)}
                        placeholder="Project Title"
                        value={section.projectName}
                        className="p-2 mb-3 w-full"
                      ></input>
                      <textarea
                        className="w-full p-2"
                        placeholder={"Project " + (index + 1)}
                        onChange={(e) => UpdateProjectDescription(e, index)}
                        value={section.projectDescription}
                      />
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={() => DeleteSection(index)}
                        className="p-3 w-full cursor-pointer bg-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      ) : data.builderSectionIndex === "personal_info" ? (
        <div className="flex-col">
          <div className="flex justify-center">
            <button
              onClick={() => AddPersonalInfo()}
              className="rounded cursor-pointer w-full h-12 p-2 bg-indigo-500"
            >
              Add Personal Info
            </button>
          </div>

          <div className="flex-col align-middle">
            <div className="flex items-center">
              <div className="p-2 mb-2 mt-2 w-full">Name</div>

              <input
                onChange={(e) => UpdatePersonalInfoName(e.target.value)}
                className="p-2 mb-2 mt-2 w-full"
                value={data.settings.personal_info.info.name}
                placeholder={"Name"}
              />
            </div>

            <div className="flex items-center">
              <div className="p-2 mb-2 mt-2 w-full">Phone Number</div>

              <input
                onChange={(e) => UpdatePersonalInfoPhoneNumber(e.target.value)}
                className="p-2 mb-2 mt-2 w-full"
                value={data.settings.personal_info.info.phoneNumber}
                placeholder={"Phone Number"}
              />
            </div>

            <div className="flex items-center">
              <div className="p-2 mb-2 mt-2 w-full">Email</div>

              <input
                onChange={(e) => UpdatePersonalInfoEmail(e.target.value)}
                className="p-2 mb-2 mt-2 w-full"
                value={data.settings.personal_info.info.email}
                type="email"
                placeholder={"Email"}
              />
            </div>
          </div>

          {data.settings[data.builderSectionIndex].sections.map(
            (section: any, index: any) => {
              return (
                <div
                  key={"personal_info" + index}
                  className="flex-col align-middle"
                >
                  <div className="flex items-center">
                    <input
                      onChange={(e) => UpdatePersonalInfoSection(e, index)}
                      className="p-2 mb-2 mt-2 w-full"
                      value={section.details}
                      placeholder={"Details"}
                    />

                    <div
                      onClick={() => DeleteSection(index)}
                      className="rounded bg-red-500 flex justify-center cursor-pointer items-center w-10 h-10"
                    >
                      X
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      ) : data.builderSectionIndex === "skills" ? (
        <div className="flex-col">
          <div className="flex justify-center">
            <button
              onClick={() => AddSkill()}
              className="rounded cursor-pointer w-full h-12 p-2 bg-indigo-500"
            >
              Add Skill
            </button>
          </div>
          {data.settings[data.builderSectionIndex].sections.map(
            (section: any, index: any) => {
              return (
                <div key={"contact" + index} className="flex-col align-middle">
                  <div className="flex items-center">
                    <input
                      onChange={(e) => UpdateTitleSection(e, index)}
                      className="p-2 mb-2 mt-2 w-full"
                      value={section.title}
                      placeholder={"Contact " + (index + 1)}
                    />

                    <input
                      onChange={(e) => UpdateDetailsSection(e, index)}
                      className="p-2 mb-2 mt-2 w-full"
                      value={section.details}
                      placeholder={"Details"}
                    />

                    <div
                      onClick={() => DeleteSection(index)}
                      className="rounded bg-red-500 flex justify-center cursor-pointer items-center w-10 h-10"
                    >
                      X
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      ) : (
        data.settings.added_sections.map((section: any, index: any) => {
          if (
            (section.sectionName + "").toLowerCase() ===
            data.builderSectionIndex
          ) {
            return (
              <div
                key={section.sectionName + "_" + index}
                className="flex-col p-3"
              >
                <div className="flex w-full justify-center text-center">
                  <span>Section Details</span>
                </div>
                <div className="flex w-full justify-center text-center">
                  <textarea
                    className="rounded p-3 bg-white border-b-2"
                    placeholder="Section Details"
                    rows={4}
                    cols={30}
                    value={section.sectionDetails}
                    name="text"
                    onChange={(e) =>
                      ModifyAddedSection(
                        addedSectionDetails.sectionName,
                        e.target.value,
                        addedSectionDetails.settings
                      )
                    }
                    required
                  />
                </div>
              </div>
            );
          }
        })
      )}
    </div>
  );

  return { Header, Body } as const;
};

export default Configurations;

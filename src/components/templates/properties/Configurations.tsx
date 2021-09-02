import React, { useContext } from "react";
import { GlobalContext } from "../../../services/AppContext";
import CommonFuntions from "../../../services/CommonFunctions";

const Configurations = () => {
  const { data, updateSettingsModal } = useContext(GlobalContext);
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
    AddContact,
    UpdateTitleSection,
    UpdateDetailsSection,
    AddSkill,
    UpdateContactPhoneNumber,
    UpdateContactEmail,
  } = CommonFuntions();
  const Header = (
    <div className="flex justify-between gap-x-0.5">
      <span> {data.sectionIndex.toUpperCase().replace("_", " ")}</span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => updateSettingsModal()}
        >
          <path
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </span>
    </div>
  );

  const Body = (
    <div className="">
      {data.sectionIndex === "personal_details" ? (
        <div className="flex-col">
          <div className="flex justify-center">
            <textarea
              className={"flex h-52 w-full "}
              onChange={(e) => ModifyText(e)}
              placeholder="Type your profile"
              value={data.userSettings[data.sectionIndex].text}
            />
          </div>
        </div>
      ) : data.sectionIndex === "education" ? (
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
            {data.userSettings[data.sectionIndex].sections.map(
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
      ) : data.sectionIndex === "experience" ? (
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
            {data.userSettings[data.sectionIndex].sections.map(
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
      ) : data.sectionIndex === "languages" ? (
        <div className="flex-col">
          <div className="flex justify-center">
            <button
              onClick={() => AddLanguage()}
              className="rounded w-full h-12 p-2 cursor-pointer bg-indigo-500"
            >
              Add Language
            </button>
          </div>
          {data.userSettings[data.sectionIndex].sections.map(
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
      ) : data.sectionIndex === "projects" ? (
        <div className="flex-col gap-y-2">
          <div className="flex-col flex justify-center">
            <input
              placeholder="Projects Description "
              onChange={(e) => ModifyText(e)}
              className="p-2"
              value={data.userSettings.projects.text}
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
            {data.userSettings[data.sectionIndex].sections.map(
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
      ) : data.sectionIndex === "contact" ? (
        <div className="flex-col">
          <div className="flex justify-center">
            <button
              onClick={() => AddContact()}
              className="rounded cursor-pointer w-full h-12 p-2 bg-indigo-500"
            >
              Add Contact
            </button>
          </div>

          <div className="flex-col align-middle">
            <div className="flex items-center">
              <div className="p-2 mb-2 mt-2 w-full">Phone Number</div>

              <input
                onChange={(e) => UpdateContactPhoneNumber(e.target.value)}
                className="p-2 mb-2 mt-2 w-full"
                value={data.userSettings.contact.info.phoneNumber}
                placeholder={"Phone Number"}
              />
            </div>

            <div className="flex items-center">
              <div className="p-2 mb-2 mt-2 w-full">Email</div>

              <input
                onChange={(e) => UpdateContactEmail(e.target.value)}
                className="p-2 mb-2 mt-2 w-full"
                value={data.userSettings.contact.info.email}
                type="email"
                placeholder={"Email"}
              />
            </div>
          </div>

          {data.userSettings[data.sectionIndex].sections.map(
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
      ) : data.sectionIndex === "skills" ? (
        <div className="flex-col">
          <div className="flex justify-center">
            <button
              onClick={() => AddSkill()}
              className="rounded cursor-pointer w-full h-12 p-2 bg-indigo-500"
            >
              Add Skill
            </button>
          </div>
          {data.userSettings[data.sectionIndex].sections.map(
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
        <></>
      )}
    </div>
  );

  return { Header, Body } as const;
};

export default Configurations;

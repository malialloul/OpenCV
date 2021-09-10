import React, { useContext, useState } from "react";
import { GlobalContext } from "../../services/AppContext";
import CommonFuntions from "../../services/CommonFunctions";
import { updateSettings } from "../../services/HTTPContext";
import Modal from "../Modal";

const AdditionalSections = () => {
  const { data, updateData, updateSettingsSectionIndex } =
    useContext(GlobalContext);

  const [addedSectionName, setAddedSectionName] = useState("");
  const [originalName, setoriginalName] = useState("");
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const penClicked = (sectionName: string) => {
    setAddedSectionName(sectionName);
    setVisible(true);
    setoriginalName(sectionName);
  };
  const { ModifyAddedSectionName } = CommonFuntions();
  const DeleteAddedSection = (sectionName: string) => {
    let temp = data.settings.added_sections.filter(
      (section: any) =>
        section.sectionName.toLowerCase() !== sectionName.toLowerCase()
    );
    console.log(temp);

    data.settings.added_sections = temp;
    updateSettings(data);
    updateData(data);
  };
  const changeName = (index: number) => {
    if (addedSectionName === "") {
      setErrorMessage("Section Name is required");
    } else {
      ModifyAddedSectionName(addedSectionName, originalName);
      updateSettings(data);

      setVisible(false);
      console.log(index);
    }
  };
  return data.settings.added_sections.length !== 0 ? (
    data.settings.added_sections.map((section: any, index: any) => {
      return section.sectionDetails !== "" ? (
        <div key={section.sectionName + index} className="flex-col">
          <Modal
            visible={visible}
            onClick={() => setVisible(false)}
            Header={"Modify Section Name"}
            Body={
              <div className="p-3 flex-col">
                <div className="flex-col">
                  <div className="flex justify-center text-red-500">
                    <span>{errorMessage}</span>
                  </div>
                </div>
                <div className="flex-col">
                  <div className="flex justify-center">
                    <span>Template Name</span>
                  </div>
                  <div className="flex justify-center">
                    <input
                      type="text"
                      value={addedSectionName}
                      className="p-3 border-2"
                      placeholder="Template Name"
                      onChange={(e) => setAddedSectionName(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <div className="flex justify-center">
                  <button
                    onClick={() => changeName(index)}
                    className="bg-indigo-500 p-3 w-full"
                  >
                    Save
                  </button>
                </div>
              </div>
            }
          />
          <div className="flex justify-between">
            <h2>{section.sectionName}</h2>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => penClicked(section.sectionName)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() =>
                  updateSettingsSectionIndex(
                    data.settingsSectionIndex ===
                      section.sectionName.toLowerCase()
                      ? ""
                      : section.sectionName.toLowerCase()
                  )
                }
              >
                <path
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                onClick={() =>
                  DeleteAddedSection(section.sectionName.toLowerCase())
                }
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          </div>
          <div
            style={{ color: section.settings.textColor }}
            className={
              section.settings.fontSize +
              " flex " +
              section.settings.textPosition
            }
          >
            {section.sectionDetails}
          </div>
        </div>
      ) : (
        <></>
      );
    })
  ) : (
    <></>
  );
};
export default AdditionalSections;

import React, { useContext, useState } from "react";
import { GlobalContext } from "../../services/AppContext";
import { updateSettings } from "../../services/HTTPContext";
import Modal from "../Modal";

const AddSection = ({ ...props }: any) => {
  const { data, updateData } = useContext(GlobalContext);
  const sectionVars = {
    sectionName: "",
    sectionDetails: "",
    settings: {
      fontSize: "text-lg",
      textPosition: "justify-center",
      textColor: "#000000",
    },
  };
  const [section, setSection] = useState(sectionVars);
  const modifySectionVars = (
    sectionName: string = "",
    sectionDetails: string = ""
  ) => {
    let json = {
      sectionName: sectionName,
      sectionDetails: sectionDetails,
      settings: {
        fontSize: "text-lg",
        textPosition: "justify-center",
        textColor: "#000000",
      },
    };
    setSection(json);
  };
  const addSection = () => {
    data.settings.added_sections.push(section);
    updateData(data);
    updateSettings(data);
    if (props.submitted) {
      props.submitted();
    }
  };

  return (
    <div className="flex-col p-3">
      <div className="flex w-full justify-center text-center">
        <span>Section Name</span>
      </div>
      <div className="flex w-full justify-center text-center">
        <input
          className="rounded p-3 bg-white border-b-2"
          placeholder="Section Name"
          type="text"
          name="text"
          onChange={(e) =>
            modifySectionVars(e.target.value, section.sectionDetails)
          }
          required
        />
      </div>
      <br />
      <div className="flex w-full justify-center text-center">
        <span>Section Details</span>
      </div>
      <div className="flex w-full justify-center text-center">
        <textarea
          className="rounded p-3 bg-white border-b-2"
          placeholder="Section Details"
          rows={4}
          cols={30}
          name="text"
          onChange={(e) =>
            modifySectionVars(section.sectionName, e.target.value)
          }
          required
        />
      </div>
      <div className="flex w-full justify-center text-center">
        <button
          type="submit"
          className="rounded-full text-white p-3 w-full  bg-indigo-500"
          onClick={() => addSection()}
        >
          Add Section
        </button>
      </div>
    </div>
  );
};
export default AddSection;

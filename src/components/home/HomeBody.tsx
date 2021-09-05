import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Builder1 from "../templates/Builder1";
import Builder2 from "../templates/Builder2";
import Builder3 from "../templates/Builder3";
import { GlobalContext } from "../../services/AppContext";
import { useEffect } from "react";
import { addTemplate, addTemplateSettings } from "../../services/HTTPContext";
import CommonFuntions from "../../services/CommonFunctions";

const HomeBody = ({ ...props }) => {
  const { InitializeUser } = CommonFuntions();
  InitializeUser();
  const [index, setIndex] = useState(0);
  const templatesArray = [<Builder1 />, <Builder2 />, <Builder3 />];
  const { data, updateTempIndex } = useContext(GlobalContext);
  const [templateIndex, setTemplateIndex] = useState(0);
  const [templateName, setTemplateName] = useState("");

  useEffect(() => {
    if (data.homeSectionIndex === "name") {
      setTemplateIndex(-1);
    }
  }, [data.homeSectionIndex]);

  useEffect(() => {
    setTemplateName(props.templateName);
  }, [props.templateName]);

  const next = () => {
    if (index + 1 < templatesArray.length) {
      setIndex(index + 1);
    }
  };
  const previous = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  const buildTemplateSettings = () => {
    addTemplate(data.userDetails.id, templateIndex + "", templateName).then(
      (response) => {
        addTemplateSettings(JSON.parse(response).id);
        sessionStorage.setItem("templateIndex", templateIndex + "");
        sessionStorage.setItem("templateId", JSON.parse(response).id + "");
      }
    );

    updateTempIndex(templateIndex);
  };
  return data.homeSectionIndex === "name" ? (
    <div className="flex justify-center items-center h-full">
      <div className="flex-col">
        <div className="text-indigo-500 text-2xl text-center">CV Name</div>
        <br />

        <input
          type="text"
          onChange={(e) => props.onChangeName(e.target.value)}
          className="p-3 border-b-2"
          placeholder="CV Name"
          value={props.templateName}
        />
      </div>
    </div>
  ) : data.homeSectionIndex === "templates" && templateIndex === -1 ? (
    <div className="pl-10 pr-10">
      <div className="grid grid-cols-12">
        <div
          onClick={() => previous()}
          className="col-span-2 cursor-pointer flex justify-center items-center text-2xl"
        >
          {"<"}
        </div>

        <div
          onClick={() => setTemplateIndex(index)}
          className="col-span-8 cursor-pointer hover:bg-gray-300"
        >
          {templatesArray[index]}
        </div>
        <div
          onClick={() => next()}
          className="col-span-2 cursor-pointer flex justify-center items-center text-2xl"
        >
          {">"}
        </div>
      </div>
    </div>
  ) : templateIndex !== -1 ? (
    <div className="flex justify-center items-center h-full">
      <div className="flex-col">
        <div className="text-indigo-500 text-2xl text-center">
          You are on your way to create a new CV
        </div>
        <br />

        <Link className="flex text-center justify-center" to="/builder">
          <button
            onClick={() => buildTemplateSettings()}
            className="bg-indigo-500 p-3 text-center text-white"
          >
            Start
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default HomeBody;

import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../services/AppContext";
import CommonFuntions from "../../services/CommonFunctions";
import {
  addTemplate,
  deleteTemplate,
  getUserTemplates,
  updateTemplate,
} from "../../services/HTTPContext";
import Modal from "../Modal";
import Builder1 from "../templates/Builder1";
import Builder2 from "../templates/Builder2";
import Builder3 from "../templates/Builder3";

const DashboardBody = ({ ...props }) => {
  const { InitializeUser } = CommonFuntions();
  InitializeUser();
  const { data } = useContext(GlobalContext);
  
  const [userTemplates, setUserTemplates] = useState([]);
  useEffect(() => {
    getUserTemplates(data.userDetails.id).then((response) => {
      setUserTemplates(response);
    });
  });
  const [visible, setVisible] = useState(false);
  const [modalTemplate, setModalTemplate] = useState("");

  const tdClicked = (index: string) => {
    setModalTemplate(index);
    setVisible(true);
  };
  const [editVisible, setEditVisible] = useState(false);
  const [addVisible, setAddVisible] = useState(false);

  const details = {
    id: "",
    templateName: "",
    templateIndex: "",
  };
  const [templateDetails, setTemplateDetails] = useState(details);
  const editClicked = (
    templateID: string,
    templateName: string,
    templateIndex: string
  ) => {
    const templateDetailsTemp = {
      userID: sessionStorage.getItem("OpenCVId") + "",
      id: templateID,
      templateName: templateName,
      templateIndex: templateIndex,
    };
    setTemplateDetails(templateDetailsTemp);
    setEditVisible(true);
  };

  const createTemplate = () => {
    if (templateDetails.templateName === "") {
      setErrorMessage("Name field cannot be empty");
    } else {
      setTemplateDetails(templateDetails);
      let nameFound =
        userTemplates.filter(
          (template: any) =>
            template.templateName === templateDetails.templateName
        ).length !== 0;
      if (nameFound) {
        setErrorMessage("Name Already Found. Choose Another Name");
      } else {
        addTemplate(
          sessionStorage.getItem("OpenCVId") + "",
          templateDetails.templateIndex,
          templateDetails.templateName
        );
        setAddVisible(false);
      //  props.history.push("/builder");
      }
    }
  };
  const updateTemplateName = (e: any) => {
    templateDetails.templateName = e.target.value;
    setTemplateDetails(templateDetails);
  };

  const updateTemplateIndex = (e: any) => {
    templateDetails.templateIndex = e.target.value;
    setTemplateDetails(templateDetails);
  };

  const [errorMessage, setErrorMessage] = useState("");

  const submitTemplateEdit = () => {
    if (templateDetails.templateName === "") {
      setErrorMessage("Name field cannot be empty");
    } else {
      updateTemplate(templateDetails);
      setEditVisible(false);
    }
  };
  const setTemplateData = (templateId: string, templateIndex: string) => {
    sessionStorage.setItem("templateId", templateId);
    sessionStorage.setItem("templateIndex", templateIndex);

  }

  return (
    <div>
      <div className="flex-col justify-center p-3">
        <br />
        {userTemplates.length > 0 ? (
          <div className="w-full">
            <div className="flex items-center gap-x-2">
              {userTemplates.length} {userTemplates.length === 1 ? "Template" : "Templates"} Found
              <button
                onClick={() => setAddVisible(true)}
                className="bg-indigo-500 text-white p-2"
              >
                Create New CV
              </button>
            </div>
            <br />

            <table className="border-separate border border-indigo-500 w-full">
              <thead>
                <tr>
                  <th className="border border-indigo-500 text-center">
                    Template Name
                  </th>
                  <th className="border border-indigo-500 text-center">
                    Template Index
                  </th>

                  <th
                    className="border border-indigo-500 text-center "
                    rowSpan={2}
                  >
                    Actions
                  </th>
                  <th className="border border-indigo-500 text-center">
                    Builder
                  </th>
                </tr>
              </thead>
              <tbody>
                {userTemplates.map((template: any, index: number) => {
                  return (
                    <tr
                      className="hover:bg-gray-500 cursor-pointer"
                      key={index}
                    >
                      <td className="border border-indigo-500 ">
                        {template.templateName}
                      </td>
                      <td
                        onClick={() => tdClicked(template.templateIndex)}
                        className="border border-indigo-500 text-center"
                      >
                        Template {parseInt(template.templateIndex) + 1}
                      </td>

                      <td className="border border-indigo-500">
                        <div className="flex gap-x-2">
                          <button
                            onClick={() =>
                              editClicked(
                                template.id,
                                template.templateName,
                                template.templateIndex
                              )
                            }
                            className="p-3 w-1/2 bg-indigo-500 text-white"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteTemplate(template.id)}
                            className="p-3 w-1/2 bg-red-500 text-white"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                      <td className="border border-indigo-500">
                        <Link to="/builder" className="no-underline text-white">
                          <button
                            onClick={() => setTemplateData(template.id, template.templateIndex)}
                            className="p-3 w-full  bg-indigo-500 text-white"
                          >
                            Start Building
                          </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex-col">
            <div className="text-center">No CVs Found</div>
            <div className="text-center">
              <button
                onClick={() => setAddVisible(true)}
                className="bg-indigo-500 text-white p-3"
              >
                Create CV
              </button>
            </div>
          </div>
        )}
      </div>
      <Modal
        Header={"Template " + (parseInt(modalTemplate) + 1)}
        Body={
          modalTemplate === "0" ? (
            <Builder1 />
          ) : modalTemplate === "1" ? (
            <Builder2 />
          ) : (
            <Builder3 />
          )
        }
        visible={visible}
        onClick={() => setVisible(false)}
      />

      <Modal
        Header={"Edit Template"}
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
                  value={templateDetails.templateName}
                  className="p-3 border-2"
                  placeholder="Template Name"
                  onChange={(e) => updateTemplateName(e)}
                />
              </div>
            </div>
            <br />

            <div className="flex-col">
              <div className="flex justify-center">
                <span>Template Index</span>
              </div>
              <div className="flex justify-center">
                <select
                  defaultValue={templateDetails.templateIndex}
                  onChange={(e) => updateTemplateIndex(e)}
                  className="bg-indigo-500 p-3 hover:bg-gray-500 text-white cursor-pointer"
                >
                  <option className="cursor-pointer" value={"0"}>
                    Template 1
                  </option>
                  <option className="cursor-pointer" value={"1"}>
                    Template 2
                  </option>
                  <option className="cursor-pointer" value={"2"}>
                    Template 3
                  </option>
                </select>
              </div>
            </div>
            <br />
            <br />
            <div className="flex justify-center">
              <button
                onClick={() => submitTemplateEdit()}
                className="bg-indigo-500 p-3 w-full"
              >
                Save
              </button>
            </div>
          </div>
        }
        visible={editVisible}
        onClick={() => setEditVisible(false)}
      />

      <Modal
        Header={"Create Template"}
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
                  value={templateDetails.templateName}
                  className="p-3 border-2"
                  placeholder="Template Name"
                  onChange={(e) => updateTemplateName(e)}
                />
              </div>
            </div>
            <br />

            <div className="flex-col">
              <div className="flex justify-center">
                <span>Template Index</span>
              </div>
              <div className="flex justify-center">
                <select
                  defaultValue={templateDetails.templateIndex}
                  onChange={(e) => updateTemplateIndex(e)}
                  className="bg-indigo-500 p-3 hover:bg-gray-500 text-white cursor-pointer"
                >
                  <option className="cursor-pointer" value={"0"}>
                    Template 1
                  </option>
                  <option className="cursor-pointer" value={"1"}>
                    Template 2
                  </option>
                  <option className="cursor-pointer" value={"2"}>
                    Template 3
                  </option>
                </select>
              </div>
            </div>
            <br />
            <br />
            <div className="flex justify-center">
              <button
                onClick={() => createTemplate()}
                className="bg-indigo-500 p-3 w-full"
              >
                Add
              </button>
            </div>
          </div>
        }
        visible={addVisible}
        onClick={() => setAddVisible(false)}
      />
    </div>
  );
};
export default DashboardBody;

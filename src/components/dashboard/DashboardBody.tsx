import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../services/AppContext";
import CommonFuntions from "../../services/CommonFunctions";
import { getUserTemplates } from "../../services/HTTPContext";

const DashboardBody = () => {
  const { InitializeUser } = CommonFuntions();
  InitializeUser();
  const { data } = useContext(GlobalContext);
  const [userTemplates, setUserTemplates] = useState([]);
  useEffect(() => {
    getUserTemplates(data.userDetails.id).then((response) => {
      setUserTemplates(response);
    });
  });

  return (
    <div>
      {userTemplates.length > 0 ? (
        <table className="border-separate border border-indigo-500">
          <thead>
            <tr>
              <th className="border border-indigo-500">Template Name</th>
              <th className="border border-indigo-500" rowSpan={2}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {userTemplates.map((template: any, index: number) => {
              return (
                <tr key={index}>
                  <td className="border border-indigo-500">{template.templateName}</td>
                  <td className="border border-indigo-500">
                    <div className="flex gap-x-2">
                      <button className="p-3 bg-indigo-500 text-white">
                        Edit
                      </button>
                      <button className="p-3 bg-red-500 text-white">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="flex-col">
          <div className="text-center">No CVs Found</div>
          <div className="text-center">
            <Link to="/home" className="no-underline text-white">
              <button className="bg-indigo-500 text-white p-3">
                Create CV
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default DashboardBody;

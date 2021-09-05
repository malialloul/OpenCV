import React from "react";
import { useContext } from "react";
import { useState } from "react";
import Builder1 from "../components/templates/Builder1";
import Builder2 from "../components/templates/Builder2";
import Builder3 from "../components/templates/Builder3";
import { GlobalContext } from "../services/AppContext";
import CommonFuntions from "../services/CommonFunctions";
import { getUserInfo } from "../services/HTTPContext";

const MyTemplate = ({ ...props }: any) => {
  const { Logout } = CommonFuntions();
  const { data, updateData } = useContext(GlobalContext);
  const id = props.match.params.id;
  let templateIndex = -1;
  let published = false;
  getUserInfo(id).then((response) => {
 
  });
  //console.log(data)
  if (data.userSettings) {
    published = data.userSettings.published;
  }
  if (published) {
    templateIndex = data.userSettings.templateIndex;
  }
  return published ? (
    templateIndex === 0 ? (
      <Builder1 debug={true} />
    ) : templateIndex === 1 ? (
      <Builder2 debug={true} />
    ) : templateIndex === 2 ? (
      <Builder3 debug={true} />
    ) : (
      <span>
        This CV is not published yet or not ready. Try to
        <span onClick={() => window.location.reload()}>
          {" "}
          <a className="text-blue-500 cursor-pointer">Refresh</a>
        </span>{" "}
      </span>
    )
  ) : (
    <span>
      This CV is not published yet or not ready. Try to
      <span onClick={() => window.location.reload()}>
        {" "}
        <a className="text-blue-500 cursor-pointer">Refresh</a>
      </span>{" "}
    </span>
  );
};

export default MyTemplate;

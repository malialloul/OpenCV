import React, { useContext } from "react";
import { useEffect } from "react";
import { GlobalContext } from "../../services/AppContext";
import { getTemplateSettings } from "../../services/HTTPContext";
import Builder1 from "../templates/Builder1";
import Builder2 from "../templates/Builder2";
import Builder3 from "../templates/Builder3";

const BuilderBody = ({ ...props }: any) => {
  const { data, updateSettings } = useContext(GlobalContext);
  const templateIndex = sessionStorage.getItem("templateIndex");
  const templateId = sessionStorage.getItem("templateId");
  useEffect(() => {
    getTemplateSettings(templateId || "").then((response) => {
      //updateSettings(response[0]);
    });
  });

  return templateIndex === "0" ? (
    <Builder1 debug={data.settings.personal_details.text !== ""} />
  ) : templateIndex === "1" ? (
    <Builder2 debug={data.settings.personal_details.text !== ""} />
  ) : templateIndex === "2" ? (
    <Builder3 debug={data.settings.personal_details.text !== ""} />
  ) : (
    <></>
  );
};

export default BuilderBody;

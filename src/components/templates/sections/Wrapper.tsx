import React, { useContext } from "react";
import { GlobalContext } from "../../../services/AppContext";
import Builder1 from "../../templates/builder/Builder1";
import Builder2 from "../../templates/builder/Builder2";
import Builder3 from "../../templates/builder/Builder3";

const Wrapper = ({ ...props }: any) => {
  const { data } = useContext(GlobalContext);
  return data.userSettings.templateIndex === 0 ? (
    <Builder1 debug={data.userSettings.personal_details.text !== ""} />
  ) : data.userSettings.templateIndex === 1 ? (
    <Builder2 debug={data.userSettings.personal_details.text !== ""} />
  ) : data.userSettings.templateIndex === 2 ? (
    <Builder3 debug={data.userSettings.personal_details.text !== ""}/>
  ) : (
    <></>
  );
};

export default Wrapper;

import React, { useContext } from "react";
import { GlobalContext } from "../services/AppContext";
import PersonalProfile from "./PersonalProfile";
import Builder1 from "./templates/builder/Builder1";
import Builder2 from "./templates/builder/Builder2";

const Wrapper = ({ ...props }: any) => {
  const { templateIndex } = useContext(GlobalContext);
  return templateIndex === 0 ? (
    <Builder1 debug={true} />
  ) : templateIndex === 1 ? (
    <Builder2 debug={true} />
  ) : (
    <></>
  );
};

export default Wrapper;

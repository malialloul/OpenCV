import React from "react";
import Wrapper from "../components/templates/helper/Wrapper";
import CommonFuntions from "../services/CommonFunctions";
import TemplateSteps from "../components/templates/properties/TemplateSteps";

import Layout from "../components/Layout";

const UserProfile = () => {
  const { InitializeUser } = CommonFuntions();
  InitializeUser();
  

  return <Layout/>;
};

export default UserProfile;

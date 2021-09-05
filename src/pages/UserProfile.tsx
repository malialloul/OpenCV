import React from "react";
import Wrapper from "../components/builder/BuilderBody";
import CommonFuntions from "../services/CommonFunctions";
import TemplateSteps from "../components/builder/TemplateSteps";

import Layout from "../components/Layout";

const UserProfile = () => {
  const { InitializeUser } = CommonFuntions();
  InitializeUser();
  const header= <div className="flex h-full text-2xl items-center text-white">
    <span>User Profile</span>
  </div>

  return <Layout header={header}/>;
};

export default UserProfile;

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Builder1 from "../components/templates/Builder1";
import Builder2 from "../components/templates/Builder2";
import Builder3 from "../components/templates/Builder3";
import HomeBody from "../components/home/HomeBody";
import { GlobalContext } from "../services/AppContext";
import HomeHeader from "../components/home/HomeHeader";
import CommonFuntions from "../services/CommonFunctions";

const Home = () => {
  const { InitializeUser } = CommonFuntions();
  InitializeUser();
  const [templateName, setTemplateName] = useState("");
  const [templateIndex, setTemplateIndex] = useState(0);

  return (
    <Layout
      header={<HomeHeader templateName={templateName} />}
      body={
        <HomeBody onChangeName={setTemplateName} templateName={templateName} />
      }
    />
  );
};

export default Home;

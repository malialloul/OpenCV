import React, { useContext } from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Modal from "./components/Modal";
import PersonalProfile from "./components/PersonalProfile";
import Projects from "./components/Projects";
import Settings from "./components/templates/Settings";
import Template from "./components/templates/Template";
import { GlobalContext } from "./services/AppContext";
import { ExportToWord } from "./services/ExportToWord";

const App = () => {
  const { data, updateData, updateIndex, sectionIndex } =
    useContext(GlobalContext);
  return (
    <div className="relative z-0">
      {sectionIndex !== "" && <Settings />}
      {/*  <button
        onClick={() => ExportToWord(document.getElementById("exportToWord"))}
      >
        Export
    </button>*/}
      <div className="grid grid-cols-12">
        <div className="h-screen col-span-3 bg-gray-500">
          <Template />
        </div>

        <div className="col-span-9 bg-green-200" id="exportToWord">
          <PersonalProfile />
          <Experience />
          <Education />
          <Projects />
          <Languages />
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default App;

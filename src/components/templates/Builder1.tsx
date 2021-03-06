import React from "react";
import Contact from "../sections/PersonalInformation";
import Education from "../sections/Education";
import Experience from "../sections/Experience";
import Languages from "../sections/Languages";
import PersonalProfile from "../sections/PersonalProfile";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import PersonalInformation from "../sections/PersonalInformation";
import AdditionalSections from "../sections/AdditionalSections";

const Builder1 = ({ ...props }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 h-screen text-white bg-gray-700">
        {props.debug ? (
          <div className="p-3 flex-col">
            <PersonalInformation showTitle={true} />
          </div>
        ) : (
          <div className="p-3 flex-col">
            <span>Personal Information</span>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
          </div>
        )}
        {props.debug ? (
          <div className="p-3 flex-col">
            <Languages />
          </div>
        ) : (
          <div className="p-3 flex-col">
            <span>Langauges</span>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
          </div>
        )}
      </div>
      <div className="col-span-9 h-screen text-black">
        {props.debug ? (
          <div className="p-3 flex-col">
            <PersonalProfile />
          </div>
        ) : (
          <div className="p-3 flex-col">
            <span>Personal Profile</span>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
          </div>
        )}

        {props.debug ? (
          <div className="p-3 flex-col">
            <Education />
          </div>
        ) : (
          <div className="p-3 flex-col">
            <span>Education</span>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
          </div>
        )}

        {props.debug ? (
          <div className="p-3 flex-col">
            <Experience />
          </div>
        ) : (
          <div className="p-3 flex-col">
            <span>Experience</span>

            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
          </div>
        )}

        {props.debug ? (
          <div className="p-3 flex-col">
            <Skills />
          </div>
        ) : (
          <div className="p-3 flex-col">
            <span>Skills</span>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
          </div>
        )}

        {props.debug ? (
          <div className="p-3 flex-col">
            <Projects />
          </div>
        ) : (
          <div className="p-3 flex-col">
            <span>Projects</span>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
          </div>
        )}
        <AdditionalSections/>
      </div>
    </div>
  );
};

export default Builder1;

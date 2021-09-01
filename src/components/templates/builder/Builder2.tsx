import React from "react";
import Contact from "../sections/Contact";
import Education from "../../templates/sections/Education";
import Experience from "../../templates/sections/Experience";
import Languages from "../../templates/sections/Languages";
import PersonalProfile from "../../templates/sections/PersonalProfile";
import Projects from "../../templates/sections/Projects";

const Builder2 = ({ ...props }: any) => {
  return (
    <div className="flex-col">
      {props.debug ? (
        <div className="flex bg-gray-500  p-3 justify-center">
          <Contact />
        </div>
      ) : (
        <div className="bg-gray-500  flex-col p-3">
          <div className="flex justify-center items-center">
            <div className="w-1/2 p-3 bg-gray-400 mb-2"></div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-1/2 p-3 bg-gray-400 mb-2"></div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-1/2 p-3 bg-gray-400 mb-2"></div>
          </div>
        </div>
      )}

      {props.debug ? (
        <div className="p-3">
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
        <div className="p-3">
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
        <div className="p-3">
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
        <div className="p-3">
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

      {props.debug ? (
        <div className="p-3">
          <Languages />
        </div>
      ) : (
        <div className="p-3 flex-col">
          <span>Languages</span>
          <div className="w-full p-3 bg-gray-400 mb-2"></div>
          <div className="w-full p-3 bg-gray-400 mb-2"></div>
          <div className="w-full p-3 bg-gray-400 mb-2"></div>
        </div>
      )}
    </div>
  );
};

export default Builder2;

import React from "react";
import Contact from "../../Contact";
import Education from "../../Education";
import Experience from "../../Experience";
import Languages from "../../Languages";
import PersonalProfile from "../../PersonalProfile";
import Projects from "../../Projects";

const Builder1 = ({ ...props }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 h-screen text-white bg-gray-700">
        {props.debug ? (
          <Contact/>
        ) : (
          <div className="p-3 flex-col">
            <span>Contact</span>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
          </div>
        )}
        {props.debug ? (
         <Languages/>
        ) : (
          <div className="p-3 flex-col">
            <span>Langauges</span>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
          </div>
        )}
      </div>
      <div className="col-span-10 h-screen text-black">
        {props.debug ? (
         <PersonalProfile/>
        ) : (
          <div className="p-3 flex-col">
            <span>Personal Profile</span>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
          </div>
        )}

        {props.debug ? (
          <Education/>
        ) : (
          <div className="p-3 flex-col">
            <span>Education</span>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
          </div>
        )}

        {props.debug ? (
         <Projects/>
        ) : (
          <div className="p-3 flex-col">
            <span>Projects</span>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
          </div>
        )}

        {props.debug ? (
         <Experience/>
        ) : (
          <div className="p-3 flex-col">
            <span>Experience</span>

            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
            <div className="w-full p-3 bg-gray-400 mb-2"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Builder1;

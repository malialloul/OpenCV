import React from "react";
import Contact from "../../Contact";
import Education from "../../Education";
import Experience from "../../Experience";
import PersonalProfile from "../../PersonalProfile";
import Projects from "../../Projects";

const Builder2 = ({ ...props }: any) => {
  return (
    <div className="flex-col">
      {props.debug ? (
        <Contact />
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
        <PersonalProfile />
      ) : (
        <div className="p-3 flex-col">
          <span>Personal Profile</span>
          <div className="w-full p-3 bg-gray-400 mb-2"></div>
          <div className="w-full p-3 bg-gray-400 mb-2"></div>
          <div className="w-full p-3 bg-gray-400 mb-2"></div>
        </div>
      )}

      {props.debug ? (
        <Education />
      ) : (
        <div className="p-3 flex-col">
          <span>Education</span>
          <div className="w-full p-3 bg-gray-400 mb-2"></div>
          <div className="w-full p-3 bg-gray-400 mb-2"></div>
          <div className="w-full p-3 bg-gray-400 mb-2"></div>
        </div>
      )}

      {props.debug ? (
        <Experience />
      ) : (
        <div className="p-3 flex-col">
          <span>Experience</span>
          <div className="w-full p-3 bg-gray-400 mb-2"></div>
          <div className="w-full p-3 bg-gray-400 mb-2"></div>
          <div className="w-full p-3 bg-gray-400 mb-2"></div>
        </div>
      )}

      {props.debug ? (
        <Projects />
      ) : (
        <div className="p-3 flex-col">
          <span>Projects</span>
          <div className="w-full p-3 bg-gray-400 mb-2"></div>
          <div className="w-full p-3 bg-gray-400 mb-2"></div>
          <div className="w-full p-3 bg-gray-400 mb-2"></div>
        </div>
      )}
    </div>
  );
};

export default Builder2;

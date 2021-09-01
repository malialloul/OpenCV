import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Builder1 from "../components/templates/builder/Builder1";
import Builder2 from "../components/templates/builder/Builder2";
import Builder3 from "../components/templates/builder/Builder3";
import { GlobalContext } from "../services/AppContext";

const Home = () => {
  const [index, setIndex] = useState(0);
  const templatesArray = [<Builder1 />, <Builder2 />, <Builder3 />];
  const { data, updateTempIndex } = useContext(GlobalContext);

  const next = () => {
    if (index + 1 < templatesArray.length) {
      setIndex(index + 1);
    }
  };
  const previous = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };
  return (
    <div className="pl-10 pr-10">
      <div className="grid grid-cols-12">
        <div className="col-span-4 flex items-center">
          <img src="logo.png" className="w-1/4 h-1/2" alt="" />
        </div>
        <div className="col-span-5 flex items-center justify-start">
          <div className="flex items-center justify-start">
            <h1>Build Your CV Easily with OpenCV</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div
          onClick={() => previous()}
          className="col-span-2 cursor-pointer flex justify-center items-center text-2xl"
        >
          {"<"}
        </div>

        <div className="col-span-8 cursor-pointer hover:bg-gray-300">
          <Link to="/builder" onClick={() => updateTempIndex(index)}>
            {templatesArray[index]}
          </Link>
        </div>
        <div
          onClick={() => next()}
          className="col-span-2 cursor-pointer flex justify-center items-center text-2xl"
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useContext, useState } from "react";
import Builder1 from "./components/templates/builder/Builder1";
import Builder2 from "./components/templates/builder/Builder2";

const Home = () => {
  
  const [index, setIndex] = useState(0);
  const templatesArray = [<Builder1 />, <Builder2 />];
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
    <>
      <div className="flex justify-center">
        <h1>Choose Your CV Template</h1>
      </div>
      <div className="grid grid-cols-12">
        <div
          onClick={() => previous()}
          className="col-span-2 cursor-pointer flex justify-center items-center"
        >
          {"<"}
        </div>

        <div className="col-span-8 cursor-pointer hover:bg-gray-300">{templatesArray[index]}</div>
        <div
          onClick={() => next()}
          className="col-span-2 cursor-pointer flex justify-center items-center"
        >
          {">"}
        </div>
      </div>
    </>
  );
};

export default Home;

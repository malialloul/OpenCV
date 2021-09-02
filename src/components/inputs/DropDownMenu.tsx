import React from "react";
import classNames from "classnames";
import { useState } from "react";

const DropDownMenu = ({ ...props }: any) => {
  console.log(props.children);
  const [visible, isVisible] = useState(false);
  return (
    <div className="flex-col relative">
      <div className="text-white">
        <div className="flex items-center ">
          <span className="text-2xl"> {props.title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={() => isVisible(!visible)}
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {visible && (
          <div
            className={classNames(
              "absolute z-10   w-48 right-1 " + props.backgroundColor,
              {}
            )}
          >
            {props.children.map((ch: any, index: any) => {
              return (
                <div
                  onClick={() => isVisible(false)}
                  className="cursor-pointer p-3 w-full hover:bg-gray-500"
                  key={index}
                >
                  {ch}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default DropDownMenu;

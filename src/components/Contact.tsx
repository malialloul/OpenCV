import React, { useContext } from "react";
import { GlobalContext } from "../services/AppContext";
import CommonFuntions from "./CommonFunctions";

const Contact = () => {
  const { data } = useContext(GlobalContext);
  const { CheckSectionTextStatus } = CommonFuntions();
  return CheckSectionTextStatus("contact") ? (
    <div className="flex-col">
      <div>Contact</div>

      {data.contact.sections.map((section: any, index: number) => {
        return (
          <div
            key={"educ" + index}
            style={{ color: data.contact.settings.textColor }}
            className={
              data.contact.settings.fontSize +
              " flex " +
              data.contact.settings.textPosition
            }
          >
            <div className="flex-col gap-y-3">
              <div className="flex">
                <span className="">{section.title}</span>
                {section.title !== "" && <span>: </span>}
                <span className="">{section.details}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <></>
  );
};

export default Contact;

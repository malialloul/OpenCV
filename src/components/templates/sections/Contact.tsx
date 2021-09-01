import React, { useContext } from "react";
import { GlobalContext } from "../../../services/AppContext";
import CommonFuntions from "../../../services/CommonFunctions";

const Contact = ({ ...props }) => {
  const { data } = useContext(GlobalContext);
  const { CheckSectionTextStatus } = CommonFuntions();
  return CheckSectionTextStatus("contact") ? (
    <div className="flex-col">
      {props.showTitle && <h2>Contact</h2>}

      {data.userSettings.contact.sections.map((section: any, index: number) => {
        return (
          <div
            key={"educ" + index}
            style={{ color: data.userSettings.contact.settings.textColor }}
            className={
              data.userSettings.contact.settings.fontSize +
              " flex " +
              data.userSettings.contact.settings.textPosition
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

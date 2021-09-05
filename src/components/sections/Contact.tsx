import React, { useContext } from "react";
import { GlobalContext } from "../../services/AppContext";
import CommonFuntions from "../../services/CommonFunctions";

const Contact = ({ ...props }) => {
  const { data } = useContext(GlobalContext);
  const { CheckContactStatus } = CommonFuntions();
  return CheckContactStatus() ? (
    <div className="flex-col">
      {props.showTitle && <h2>Contact</h2>}
      <div
        style={{ color: data.settings.contact.settings.textColor }}
        className={
          data.settings.contact.settings.fontSize +
          " flex " +
          data.settings.contact.settings.textPosition
        }
      >
        <div className="flex-col gap-y-3">
          <div>{data.settings.contact.info.phoneNumber}</div>
          <div>{data.settings.contact.info.email}</div>
        </div>
      </div>
      {data.settings.contact.sections.map((section: any, index: number) => {
        return (
          <div
            key={"contact" + index}
            style={{ color: data.settings.contact.settings.textColor }}
            className={
              data.settings.contact.settings.fontSize +
              " flex " +
              data.settings.contact.settings.textPosition
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

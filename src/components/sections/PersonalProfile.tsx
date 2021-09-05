import React, { useContext } from "react";
import { GlobalContext } from "../../services/AppContext";

const PersonalProfile = () => {
  const { data } = useContext(GlobalContext);
  return (
    data.settings.personal_details.text !== "" ? (
      <div className="flex-col">
        <h2>Personal Profile</h2>
        <div
          style={{ color: data.settings.personal_details.settings.textColor }}
          className={
            data.settings.personal_details.settings.fontSize +
            " flex " +
            data.settings.personal_details.settings.textPosition
          }
        >
          {data.settings.personal_details.text}
        </div>
      </div>
    ) : <></>
  );
};

export default PersonalProfile;

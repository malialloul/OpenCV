import React, { useContext } from "react";
import { GlobalContext } from "../services/AppContext";

const PersonalProfile = () => {
  const { data } = useContext(GlobalContext);
  return (
    data.personal_details.text !== "" ? (
      <div className="flex-col">
        <div>Personal Profile</div>
        <div
          style={{ color: data.personal_details.settings.textColor }}
          className={
            data.personal_details.settings.fontSize +
            " flex " +
            data.personal_details.settings.textPosition
          }
        >
          {data.personal_details.text}
        </div>
      </div>
    ) : <></>
  );
};

export default PersonalProfile;

import React, { useContext } from "react";
import Builder1 from "../components/templates/builder/Builder1";
import Builder2 from "../components/templates/builder/Builder2";
import Builder3 from "../components/templates/builder/Builder3";
import { GlobalContext } from "../services/AppContext";
import CommonFuntions from "../services/CommonFunctions";
import { getUserInfo } from "../services/HTTPContext";

const MyTemplate = ({ ...props }: any) => {
  const { StoreUserInfo, GetUserInfo, Logout } = CommonFuntions();
  const id = props.match.params.id;
  let templateIndex = -1;
  let published = false;
  getUserInfo(id).then((response) => {
    Logout();

    if (response.userSettings) {
      console.log(response);
      StoreUserInfo(response);
    }
  });
  if (GetUserInfo().userSettings) {
    published = GetUserInfo().userSettings.published;
  }
  if (published) {
    templateIndex = GetUserInfo().userSettings.templateIndex;
  }
  return published ? (
    templateIndex === 0 ? (
      <Builder1 debug={true} />
    ) : templateIndex === 1 ? (
      <Builder2 debug={true} />
    ) : templateIndex === 2 ? (
      <Builder3 debug={true} />
    ) : (
      <span>This CV is not published yet</span>
    )
  ) : (
    <span>This CV is not published yet</span>
  );
};

export default MyTemplate;

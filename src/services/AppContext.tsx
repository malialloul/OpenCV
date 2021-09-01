import React, { createContext, useReducer } from "react";
import CommonFuntions from "./CommonFunctions";
import AppReducer from "../services/AppReducer";

const GetUserInfo = () => {
  const userInfoStorage = sessionStorage.getItem("info");
  let userInfo = {
    userDetails: { id: "", username: "", email:"" },
    userSettings: {
      personal_details: {
        text: "",
        settings: {
          fontSize: "text-lg",
          textPosition: "justify-start",
          textColor: "#000000",
        },
      },
      education: {
        sections: [],
        settings: {
          fontSize: "text-lg",
          textPosition: "justify-start",
          textColor: "#000000",
        },
      },
      experience: {
        sections: [],
        settings: {
          fontSize: "text-lg",
          textPosition: "justify-start",
          textColor: "#000000",
        },
      },
      projects: {
        text: "",
        sections: [],
        settings: {
          fontSize: "text-lg",
          textPosition: "justify-start",
          textColor: "#000000",
        },
      },
      languages: {
        sections: [],
        settings: {
          fontSize: "text-lg",
          textPosition: "justify-start",
          textColor: "#000000",
        },
      },
      contact: {
        sections: [],
        settings: {
          fontSize: "text-lg",
          textPosition: "justify-start",
          textColor: "#000000",
        },
      },
      templateIndex: 0,
      published: false
    },
  };
  if (userInfoStorage !== null) {
    userInfo = JSON.parse(userInfoStorage);
  }
  return userInfo;
};

const initialState = {
  data: {
    userDetails: GetUserInfo().userDetails,
    userSettings: GetUserInfo().userSettings,
    sectionIndex: "",
    settingsModal: false,
  },
} as {
  data: any;
  updateData: (item: any) => void;
  updateIndex: (item: string) => void;
  updateSettingsModal: () => void;
  updateTempIndex: (item: number) => void;
  updateUserSettings: (item: any) => void;
  updateUserDetails: (item: any) => void;
};

export const GlobalContext = createContext(initialState);

const GlobalProvider = ({ ...props }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const updateData = (item: any) => {
    dispatch({
      type: "UPDATE_DATA",
      payload: item,
    });
  };
  const updateIndex = (item: any) => {
    dispatch({
      type: "UPDATE_SECTION_INDEX",
      payload: item,
    });
  };
  const updateTempIndex = (item: number) => {
    dispatch({
      type: "UPDATE_TEMPLATE_INDEX",
      payload: item,
    });
  };
  const updateSettingsModal = () => {
    dispatch({
      type: "UPDATE_SETTINGS_MODAL",
      payload: !state.data.settingsModal,
    });
  };

  const updateUserSettings = (item: any) => {
    dispatch({
      type: "UPDATE_USER_SETTINGS",
      payload: item,
    });
  };

  const updateUserDetails = (item: any) => {
    dispatch({
      type: "UPDATE_USER_DETAILS",
      payload: item,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        data: state.data,
        updateData,
        updateIndex,
        updateSettingsModal,
        updateTempIndex,
        updateUserSettings,
        updateUserDetails,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;

import React, { createContext, useReducer } from "react";
import AppReducer from "../services/AppReducer";

const initialState = {
  data: {
    userDetails: {
      id: "",
      username: "",
      password: "",
      email: "",
      token: "",
      verified: false,
    },
    settings: {
      templateId: "",
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
      skills: {
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
      personal_info: {
        info: {
          phoneNumber: "",
          email: "",
          name: "",
        },
        sections: [],
        settings: {
          fontSize: "text-lg",
          textPosition: "justify-center",
          textColor: "#000000",
        },
      },
      added_sections: []
    },
    templates: [],
    builderSectionIndex: "",
    settingsSectionIndex: "",
    templateIndex: -1,
    settingsModal: false,
  },
} as {
  data: any;
  updateData: (item: any) => void;
  updateBuilderSectionIndex: (item: string) => void;
  updateSettingsSectionIndex: (item: string) => void;
  updateSettingsModal: () => void;
  updateTempIndex: (item: number) => void;
  updateSettings: (item: any) => void;
  updateUserDetails: (item: any) => void;
  updateTemplates: (item: any) => void;
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
  const updateBuilderSectionIndex = (item: any) => {
    dispatch({
      type: "UPDATE_BUILDER_SECTION_INDEX",
      payload: item,
    });
  };
  const updateSettingsSectionIndex = (item: any) => {
    dispatch({
      type: "UPDATE_SETTINGS_SECTION_INDEX",
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

  const updateSettings = (item: any) => {
    dispatch({
      type: "UPDATE_SETTINGS",
      payload: item,
    });
  };

  const updateUserDetails = (item: any) => {
    dispatch({
      type: "UPDATE_USER_DETAILS",
      payload: item,
    });
  };
  const updateTemplates = (item: []) => {
    dispatch({
      type: "UPDATE_TEMPLATES",
      payload: item,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        data: state.data,
        updateData,
        updateBuilderSectionIndex,
        updateSettingsSectionIndex,
        updateSettingsModal,
        updateTempIndex,
        updateSettings,
        updateUserDetails,
        updateTemplates,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;

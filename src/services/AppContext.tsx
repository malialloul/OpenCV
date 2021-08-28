import React, { createContext, useReducer } from "react";
import AppReducer from "../services/AppReducer";

const initialState = {
  data: {
    personal_details: {
      text: "",
      settings: {
        fontSize: "text-2xl",
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

    sectionIndex: "",
    settingsModal: false,
    templateIndex: 1,
  },
} as {
  data: any;
  updateData: (item: any) => void;
  updateIndex: (item: string) => void;
  updateSettingsModal: () => void;
  sectionIndex: string;
  settingsModal: boolean;
  templateIndex: number;
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
  const updateTempIndex = (item: any) => {
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

  return (
    <GlobalContext.Provider
      value={{
        data: state.data,
        updateData,
        updateIndex,
        updateSettingsModal,
        sectionIndex: state.data.sectionIndex,
        settingsModal: state.data.settingsModal,
        templateIndex: state.data.templateIndex,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;

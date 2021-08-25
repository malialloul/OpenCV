import React, { createContext, useReducer } from "react";
import AppReducer from "../services/AppReducer";

const initialState = {
  data: {
    personal_details: {
      text: "",
      settings: {
        fontSize: "text-2xl",
        textPosition: "justify-start",
        textColor: "#FFFFFF",
      },
    },

    education: {
      sections: [],
      settings: {
        fontSize: "text-lg",
        textPosition: "justify-start",
        textColor: "#FFFFFF",
      },
    },

    experience: {
      sections: [],
      settings: {
        fontSize: "text-lg",
        textPosition: "justify-start",
        textColor: "#FFFFFF",
      },
    },

    projects: {
      text: "",
      sections: [],
      settings: {
        fontSize: "text-lg",
        textPosition: "justify-start",
        textColor: "#FFFFFF",
      },
    },
    languages: {
      sections: [],
      settings: {
        fontSize: "text-lg",
        textPosition: "justify-start",
        textColor: "#FFFFFF",
      },
    },

    sectionIndex: "",
  },
} as {
  data: any;
  updateData: (item: any) => void;
  updateIndex: (item: string) => void;
  sectionIndex: string;
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
      type: "UPDATE_INDEX",
      payload: item,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        data: state.data,
        updateData,
        updateIndex,
        sectionIndex: state.data.sectionIndex,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;

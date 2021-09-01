import CommonFuntions from "./CommonFunctions";

const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "UPDATE_DATA":
      sessionStorage.setItem("info", JSON.stringify(action.payload));
      return {
        data: action.payload,
      };
    case "UPDATE_SECTION_INDEX":
      let temp = state.data;
      temp.sectionIndex = action.payload;
      return {
        data: temp,
      };
    case "UPDATE_TEMPLATE_INDEX":
      let tempIndex = state.data;
      tempIndex.userSettings.templateIndex = action.payload;
      return {
        data: tempIndex,
      };
    case "UPDATE_SETTINGS_MODAL":
      let tempList = state.data;
      tempList.settingsModal = action.payload;
      return {
        data: tempList,
      };
    case "UPDATE_USER_SETTINGS":
      let data = state.data;
      data.userSettings = action.payload;
      return {
        data: data,
      };
    case "UPDATE_USER_DETAILS":
      let userData = state.data;
      userData.userDetails = action.payload;
      return {
        data: userData,
      };

    default:
      return state;
  }
};

export default AppReducer;

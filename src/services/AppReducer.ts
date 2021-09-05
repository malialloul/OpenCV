const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "UPDATE_DATA":
      sessionStorage.setItem("info", JSON.stringify(action.payload));
      return {
        data: action.payload,
      };
    case "UPDATE_BUILDER_SECTION_INDEX":
      let temp = state.data;
      temp.builderSectionIndex = action.payload;
      return {
        data: temp,
      };
    case "UPDATE_HOME_SECTION_INDEX":
      let homeSection = state.data;
      homeSection.homeSectionIndex = action.payload;
      return {
        data: homeSection,
      };
    case "UPDATE_TEMPLATE_INDEX":
      let tempIndex = state.data;
      tempIndex.templateIndex = action.payload;
      return {
        data: tempIndex,
      };
    case "UPDATE_SETTINGS_MODAL":
      let tempList = state.data;
      tempList.settingsModal = action.payload;
      return {
        data: tempList,
      };
    case "UPDATE_SETTINGS":
      let data = state.data;
      data.settings = action.payload;
      return {
        data: data,
      };
    case "UPDATE_USER_DETAILS":
      let userData = state.data;
      userData.userDetails = action.payload;
      return {
        data: userData,
      };
    case "UPDATE_TEMPLATES":
      let allData = state.data;
      allData.templates = action.payload;
      return {
        data: allData,
      };

    default:
      return state;
  }
};

export default AppReducer;

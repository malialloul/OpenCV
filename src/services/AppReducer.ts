const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return {
        data: state.data,
      };
    case "UPDATE_SECTION_INDEX":
      let temp = state.data;
      temp.sectionIndex = action.payload;
      return {
        data: temp,
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

    default:
      return state;
  }
};

export default AppReducer;

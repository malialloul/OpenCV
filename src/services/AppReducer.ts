const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return {
        data: state.data,
      };
    case "UPDATE_INDEX":
      let temp = state.data;
      temp.sectionIndex = action.payload;
      return {
        data: temp,
      };

    default:
      return state;
  }
};

export default AppReducer;

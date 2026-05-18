export const initialState = {
  search: "",
  status: "all",
  priority: "all",
  sortBy: "Default",
};

export function filtersReducer(state, action) {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    case "SET_STATUS":
      return {
        ...state,
        status: action.payload,
      };
    case "SET_PRIORITY":
      return {
        ...state,
        priority: action.payload,
      };
    case "SET_SORT":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        search: "",
        status: "all",
        priority: "all",
        sortBy: "Default",
      };
    default:
      return state;
  }
}

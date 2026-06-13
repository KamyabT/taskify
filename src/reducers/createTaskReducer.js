export const recordInitialState = {
  title: "",
  description: "",
  project: "",
  priority: "Medium",
  status: "To Do",
  dueDate: "",
  projectTag: "",
};

export function createTaskReducer(state, action) {
  console.log(action, "state reducer");
  switch (action.type) {
    case "SET_TITLE":
      return {
        ...state,
        title: action.payload,
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: action.payload,
      };

    case "SET_PROJECT":
      return {
        ...state,
        project: action.payload,
      };
    case "SET_PRIORITY":
      return {
        ...state,
        priority: action.payload,
      };
    case "SET_STATUS":
      return {
        ...state,
        status: action.payload,
      };
    case "SET_DUE_DATE":
      return {
        ...state,
        dueDate: action.payload,
      };
    case "SET_TAGS":
      return {
        ...state,
        projectTag: action.payload,
      };
    default:
      return state;
  }
}

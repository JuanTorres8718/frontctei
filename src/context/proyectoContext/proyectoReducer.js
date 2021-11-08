const ProyectoReducer = (state, action) => {
  switch (action.type) {
    case "GET_PROJECTS_START":
      return {
        projects: [],
        isFetching: true,
        error: false,
      };
    case "GET_PROJECTS_SUCCESS":
      return {
        projects: action.payload,
        isFetching: false,
        error: false,
      };

    case "GET_PROJECTS_FAILURE":
      return {
        projects: [],
        isFetching: false,
        error: true,
        message: action.error,
      };

    case "CREATE_PROJECT_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_PROJECT_SUCCESS":
      return {
        projects: [...state.projects, action.payload],
        isFetching: false,
        error: false,
      };

    case "CREATE_PROJECT_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    // case "UPDATE_PROJECT_START":
    //   return {
    //     ...state,
    //     isFetching: true,
    //     error: false,
    //   };
    // case "UPDATE_PROJECT_SUCCESS":
    //   return {
    //     projects: state.projects.map(
    //       (project) => project._id === action.payload._id && action.payload
    //     ),
    //     isFetching: false,
    //     error: false,
    //   };

    // case "UPDATE_PROJECT_FAILURE":
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: true,
    //   };

    // case "DELETE_PROJECT_START":
    //   return {
    //     ...state,
    //     isFetching: true,
    //     error: false,
    //   };
    // case "DELETE_PROJECT_SUCCESS":
    //   return {
    //     projects: state.projects.filter(
    //       (project) => project._id !== action.payload
    //     ),
    //     isFetching: false,
    //     error: false,
    //   };

    // case "DELETE_PROJECT_FAILURE":
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: true,
    //   };

    default:
      return { ...state };
  }
};

export default ProyectoReducer;

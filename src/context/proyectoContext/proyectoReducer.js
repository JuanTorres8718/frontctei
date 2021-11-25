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

    case "UPDATE_PROJECT_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_PROJECT_SUCCESS":
      return {
        projects: state.projects.map(
          (project) =>
            project.codigo_proyecto === action.payload.codigo_proyecto &&
            action.payload
        ),
        isFetching: false,
        error: false,
      };

    case "UPDATE_PROJECT_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default ProyectoReducer;

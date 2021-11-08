export const TalentReducer = (state, action) => {
  switch (action.type) {
    case "GET_TALENTS_START":
      return {
        talents: [],
        isFetching: true,
        error: false,
      };

    case "GET_TALENTS_SUCCESS":
      return {
        talents: action.payload,
        isFetching: false,
        error: false,
      };

    case "GET_TALENTS_FAILURE":
      return {
        talents: [],
        isFetching: false,
        error: true,
      };
    default: {
      return { ...state };
    }
  }
};

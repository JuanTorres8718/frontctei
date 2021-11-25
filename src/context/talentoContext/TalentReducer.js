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

    case "UPDATE_TALENT_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "UPDATE_TALENT_SUCCESS":
      return {
        talents: state.talents.map(
          (talent) =>
            talent.codigo_talento === action.payload.codigo_talento &&
            action.payload
        ),
        isFetching: false,
        error: false,
      };

    case "UPDATE_TALENT_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default: {
      return { ...state };
    }
  }
};

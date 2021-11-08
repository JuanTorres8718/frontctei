const TsReducer = (state, action) => {
  switch (action.type) {
    case "GET_RED_START":
      return {
        tables: {},
        isFetching: true,
        error: false,
      };
    case "GET_RED_SUCCESS":
      return {
        tables: { ...state.tables, redes: action.payload },
        isFetching: false,
        error: false,
      };

    case "GET_RED_FAILURE":
      return {
        tables: {},
        isFetching: false,
        error: true,
      };

    case "GET_REGIONAL_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "GET_REGIONAL_SUCCESS":
      return {
        tables: { ...state.tables, regionales: action.payload },
        isFetching: false,
        error: false,
      };

    case "GET_REGIONAL_FAILURE":
      return {
        tables: {},
        isFetching: false,
        error: true,
      };

    case "GET_TIPOLOGIAS_START":
      return {
        tables: {},
        isFetching: true,
        error: false,
      };
    case "GET_TIPOLOGIAS_SUCCESS":
      return {
        tables: { ...state.tables, tipologias: action.payload },
        isFetching: false,
        error: false,
      };

    case "GET_TIPOLOGIAS_FAILURE":
      return {
        tables: {},
        isFetching: false,
        error: true,
      };

    case "GET_DEPARTAMENTOS_START":
      return {
        tables: {},
        isFetching: true,
        error: false,
      };
    case "GET_DEPARTAMENTOS_SUCCESS":
      return {
        tables: { ...state.tables, departamentos: action.payload },
        isFetching: false,
        error: false,
      };

    case "GET_DEPARTAMENTOS_FAILURE":
      return {
        tables: {},
        isFetching: false,
        error: true,
      };

    case "GET_SUBAREAS_START":
      return {
        tables: {},
        isFetching: true,
        error: false,
      };
    case "GET_SUBAREAS_SUCCESS":
      return {
        tables: { ...state.tables, subareas: action.payload },
        isFetching: false,
        error: false,
      };

    case "GET_SUBAREAS_FAILURE":
      return {
        tables: {},
        isFetching: false,
        error: true,
      };

    case "GET_MUNICIPIOS_START":
      return {
        tables: {},
        isFetching: true,
        error: false,
      };
    case "GET_MUNICIPIOS_SUCCESS":
      return {
        tables: { ...state.tables, municipios: action.payload },
        isFetching: false,
        error: false,
      };

    case "GET_MUNICIPIOS_FAILURE":
      return {
        tables: {},
        isFetching: false,
        error: true,
      };

    case "GET_CENTROS_START":
      return {
        tables: {},
        isFetching: true,
        error: false,
      };
    case "GET_CENTROS_SUCCESS":
      return {
        tables: { ...state.tables, centros: action.payload },
        isFetching: false,
        error: false,
      };

    case "GET_CENTROS_FAILURE":
      return {
        tables: {},
        isFetching: false,
        error: true,
      };

    case "GET_GRUPO_START":
      return {
        tables: {},
        isFetching: true,
        error: false,
      };
    case "GET_GRUPO_SUCCESS":
      return {
        tables: { ...state.tables, grupos: action.payload },
        isFetching: false,
        error: false,
      };

    case "GET_GRUPO_FAILURE":
      return {
        tables: {},
        isFetching: false,
        error: true,
      };

    case "GET_NIVEL_START":
      return {
        tables: {},
        isFetching: true,
        error: false,
      };
    case "GET_NIVEL_SUCCESS":
      return {
        tables: { ...state.tables, niveles: action.payload },
        isFetching: false,
        error: false,
      };

    case "GET_NIVEL_FAILURE":
      return {
        tables: {},
        isFetching: false,
        error: true,
      };

    case "GET_SEMILLERO_START":
      return {
        tables: {},
        isFetching: true,
        error: false,
      };
    case "GET_SEMILLERO_SUCCESS":
      return {
        tables: { ...state.tables, semilleros: action.payload },
        isFetching: false,
        error: false,
      };

    case "GET_SEMILLERO_FAILURE":
      return {
        tables: {},
        isFetching: false,
        error: true,
      };

    case "GET_ROLSENNOVA_START":
      return {
        tables: {},
        isFetching: true,
        error: false,
      };
    case "GET_ROLSENNOVA_SUCCESS":
      return {
        tables: { ...state.tables, rolSennova: action.payload },
        isFetching: false,
        error: false,
      };

    case "GET_ROLSENNOVA_FAILURE":
      return {
        tables: {},
        isFetching: false,
        error: true,
      };

    case "GET_RUBRO_START":
      return {
        tables: {},
        isFetching: true,
        error: false,
      };
    case "GET_RUBRO_SUCCESS":
      return {
        tables: { ...state.tables, rubros: action.payload },
        isFetching: false,
        error: false,
      };

    case "GET_RUBRO_FAILURE":
      return {
        tables: {},
        isFetching: false,
        error: true,
      };

    case "GET_PROJECT_START":
      return {
        tables: {},
        isFetching: true,
        error: false,
      };
    case "GET_PROJECT_SUCCESS":
      return {
        tables: { ...state.tables, proyectos: action.payload },
        isFetching: false,
        error: false,
      };

    case "GET_PROJECT_FAILURE":
      return {
        tables: {},
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default TsReducer;

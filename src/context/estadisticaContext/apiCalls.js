import axios from "axios";
import {
  getAllValuesFailure,
  getAllValuesStart,
  getAllValuesSuccess,
  getCategoryFailure,
  getCategorySuccess,
  getValueYearFailure,
  getValueYearStart,
  getValueYearSuccess,
} from "./EstadisticaActions";

export const getAllValues = async (dispatch) => {
  dispatch(getAllValuesStart());
  try {
    const res = await axios.get(
      process.env.REACT_APP_API_URL + "/stadistics/values"
    );
    dispatch(getAllValuesSuccess(res.data));
  } catch (err) {
    dispatch(getAllValuesFailure());
  }
};

export const getCategoriesTalent = async (dispatch) => {
  dispatch(getCategorySuccess());
  try {
    let values = {
      rol: [],
      nivel: [],
      tipo: [],
    };

    let tipoContrato = [
      {
        codigo_contrato: 2001,
        nombre_contrato: "Aprendiz",
      },
      {
        codigo_contrato: 2002,
        nombre_contrato: "Contratista",
      },
      {
        codigo_contrato: 2003,
        nombre_contrato: "Planta",
      },
      {
        codigo_contrato: 2004,
        nombre_contrato: "Temporal",
      },
      {
        codigo_contrato: 2005,
        nombre_contrato: "Provisional",
      },
    ];

    const resCat = await axios.get(
      process.env.REACT_APP_API_URL + "/stadistics/categories"
    );
    const resRol = await axios.get(
      process.env.REACT_APP_API_URL + "/table/rol_sennova"
    );
    const resNiv = await axios.get(
      process.env.REACT_APP_API_URL + "/table/nivel_academico"
    );

    resCat.data.forEach((cat) => {
      let bool = { bRol: true, bNivel: true, bTipo: true };
      let names = {};

      for (const valueRol of values.rol) {
        if (valueRol.codigo_rol_sennova === cat.codigo_rol_sennova) {
          valueRol.cantidad += 1;
          bool.bRol = false;
        }
      }

      for (const valueNivel of values.nivel) {
        if (valueNivel.codigo_nivel === cat.codigo_nivel) {
          valueNivel.cantidad += 1;
          bool.bNivel = false;
        }
      }

      for (const valueTipo of values.tipo) {
        if (valueTipo.codigo_tipo_contrato === cat.codigo_tipo_contrato) {
          valueTipo.cantidad += 1;
          bool.bTipo = false;
        }
      }

      if (bool.bRol) {
        for (const rol of resRol.data) {
          cat.codigo_rol_sennova === rol.codigo_rol_sennova &&
            (names["rol_sennova"] = rol.nombre_rol_sennova);
        }
        values.rol.push({
          name: names.rol_sennova,
          cantidad: 1,
          codigo_rol_sennova: cat.codigo_rol_sennova,
        });
      }

      if (bool.bNivel) {
        for (const nivel of resNiv.data) {
          cat.codigo_nivel === nivel.codigo_nivel_academico &&
            (names["nivel"] = nivel.nivel_academico);
        }
        values.nivel.push({
          name: names.nivel,
          cantidad: 1,
          codigo_nivel: cat.codigo_nivel,
        });
      }

      if (bool.bTipo) {
        for (const tipo of tipoContrato) {
          cat.codigo_tipo_contrato === tipo.codigo_contrato &&
            (names["tipo"] = tipo.nombre_contrato);
        }
        values.tipo.push({
          name: names.tipo,
          cantidad: 1,
          codigo_tipo_contrato: cat.codigo_tipo_contrato,
        });
      }
    });

    dispatch(getCategorySuccess(values));
  } catch (err) {
    dispatch(getCategoryFailure());
  }
};

export const getValueForYear = async (dispatch) => {
  dispatch(getValueYearStart());
  try {
    let values = [];
    const res = await axios.get(process.env.REACT_APP_API_URL + "/projects");
    res.data.forEach((project) => {
      let bool = true;
      let date = project.fecha_cierre_proyecto.split("-")[0];
      for (const value of values) {
        if (value.fecha === date) {
          value.valorProyectos += project.valor_proyecto;
          value.valorTalentos += project.valor_servicios_personales;
          value.valorMaquinarias += project.valor_compra_equipos;
          value.valorSoftware += project.valor_software;
          value.valorOtrosGastos += project.valor_otros_gastos;
          bool = false;
        }
      }
      bool &&
        values.push({
          fecha: date,
          valorProyectos: project.valor_proyecto,
          valorTalentos: project.valor_servicios_personales,
          valorMaquinarias: project.valor_compra_equipos,
          valorSoftware: project.valor_software,
          valorOtrosGastos: project.valor_otros_gastos,
          // nameValue :
        });
    });

    dispatch(getValueYearSuccess(values));
  } catch (err) {
    dispatch(getValueYearFailure());
  }
};

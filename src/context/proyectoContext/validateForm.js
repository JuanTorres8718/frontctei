const yup = require("yup");

export const schemaProject = yup.object().shape({
  codigo_estado_proyecto: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  informe_investigacion: yup
    .mixed()
    .typeError("Solo se permite el tipo de dato string")
    .required("El archivo PDF es obligatorio"),
  archivo_proyecto: yup
    .mixed()
    .typeError("Solo se permite el tipo de dato string")
    .required("El archivo PDF es obligatorio"),
  video_proyecto: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .required("El campo es obligatorio"),
  resumen_proyecto: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .required("El campo es obligatorio"),
  codigo_red_conocimiento: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  codigo_linea_programatica: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  codigo_centro: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  fecha_cierre_proyecto: yup
    .date()
    .typeError("Solo se permite enviar el campo en fecha")
    .required("El campo es obligatorio"),
  fecha_inicio_proyecto: yup
    .date()
    .typeError("Solo se permite enviar el campo en fecha")
    .required("El campo es obligatorio"),
  observacion_general: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .required("El campo es obligatorio"),
  presupuesto_asignado: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  presupuesto_aprobado: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  presupuesto_solicitado: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  nombre_proyecto: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .required("El campo es obligatorio")
    .max(255, "Solo se permite un máximo de 255 caracteres"),
  codigo_proyecto: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Solo se permite números")
    .min(4, "El codigo es de 4 digitos exactamente")
    .max(4, "El codigo es de 4 digitos exactamente")
    .required("El campo es obligatorio"),
});

export const schemaEditProject = yup.object().shape({
  codigo_estado_proyecto: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  video_proyecto: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .required("El campo es obligatorio"),
  resumen_proyecto: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .required("El campo es obligatorio"),
  codigo_red_conocimiento: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  codigo_linea_programatica: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  codigo_centro: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  fecha_cierre_proyecto: yup
    .date()
    .typeError("Solo se permite enviar el campo en fecha")
    .required("El campo es obligatorio"),
  fecha_inicio_proyecto: yup
    .date()
    .typeError("Solo se permite enviar el campo en fecha")
    .required("El campo es obligatorio"),
  observacion_general: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .required("El campo es obligatorio"),
  presupuesto_asignado: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  presupuesto_aprobado: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  presupuesto_solicitado: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  nombre_proyecto: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .required("El campo es obligatorio")
    .max(255, "Solo se permite un máximo de 255 caracteres"),
});

export const schemaMaquinary = yup.object().shape({
  codigo_tipo_equipo: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  fecha_compra: yup
    .date()
    .typeError("Solo se permite enviar el campo en fecha")
    .required("El campo es obligatorio"),
  valor_equipo: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  descripcion_equipo: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .required("El campo es obligatorio"),
});

export const schemaTalent = yup.object().shape({
  codigo_estado_contrato: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  codigo_rol_proyecto: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  codigo_rol_sennova: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .nullable(),
  codigo_nivel: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .nullable(),
  codigo_tipo_contrato: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  fecha_fin_contrato: yup
    .date()
    .typeError("Solo se permite enviar el campo en fecha")
    .required("El campo es obligatorio"),
  fecha_inicio_contrato: yup
    .date()
    .typeError("Solo se permite enviar el campo en fecha")
    .required("El campo es obligatorio"),
  tiempo_dedicacion_semanal: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .nullable(),
  genero: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .required("El campo es obligatorio"),
  valor_total_contrato: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  valor_mensual_contrato: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .nullable(),
  sena_sennova: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .required("El campo es obligatorio"),
  objeto_contrato: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .nullable(),
  nombre_persona: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .required("El campo es obligatorio")
    .max(255, "Solo se permite un máximo de 255 caracteres"),
});

export const schemaRubros = yup.object().shape({
  valor_rubro: yup
    .number()
    .typeError("Debe ser dato tipo númerico")
    .required("El campo es obligatorio"),
  codigo_rubro: yup
    .number()
    .typeError("Debe ser dato tipo númerico")
    .required("El campo es obligatorio"),
});

// export const createProjectValidator = (data) => {
//   const dataTalent = data.talent;

//   schemaProject.validateSync(data.project);

//   if (data.maquinary) {

//     schemaMaquinary.validateSync(data.maquinary);
//   }

//   // eslint-disable-next-line array-callback-return
//   dataTalent.map((talent) => {
//     schemaTalent.validateSync(talent);
//   });
// };

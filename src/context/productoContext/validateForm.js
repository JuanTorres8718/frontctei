const yup = require("yup");

export const schemaProduct = yup.object().shape({
  asociado: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  codigo_semillero: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  codigo_tipologia: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  fecha_registro_producto: yup
    .date()
    .typeError("Solo se permite enviar el campo en fecha")
    .required("El campo es obligatorio"),
  intangible: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .required("El campo es obligatorio"),
  tipo_intangible: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  aval_autor: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  link_producto: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .required("El campo es obligatorio"),
  descripcion_producto: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .required("El campo es obligatorio"),
  nombre_productos: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .required("El campo es obligatorio")
    .max(255, "Solo se permite un máximo de 255 caracteres"),
  codigo_productos: yup
    .number()
    .typeError("Solo se permite datos númericos")
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

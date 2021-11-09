const yup = require("yup");

export const schemaUser = yup.object().shape({
  codigo_rol: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  fecha_fin_cuenta: yup
    .date()
    .typeError("Solo se permite dato tipo fecha")
    .required("El campo es obligatorio"),
  codigo_centro: yup
    .number()
    .typeError("Solo se permite datos númericos")
    .required("El campo es obligatorio"),
  correo_respaldo: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .email("Solo se permite correos electronicos validos")
    .required("El campo es obligatorio"),
  correo_electronico: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .email("Solo se permite correos electronicos validos")
    .required("El campo es obligatorio"),
  confirmar_contrasena: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .required("El campo es obligatorio")
    .max(30, "Solo se permite un máximo de 30 caracteres")
    .oneOf([yup.ref("contrasena"), null], "Las contraseñas deben coincidir"),
  contrasena: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .required("El campo es obligatorio")
    .max(30, "Solo se permite un máximo de 30 caracteres"),
  nombre_usuario: yup
    .string()
    .typeError("Solo se permite el tipo de dato string")
    .required("El campo es obligatorio")
    .max(255, "Solo se permite un máximo de 255 caracteres"),
});

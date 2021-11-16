import { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import {
  getAllCentros,
  getAllEmail,
} from "../../../context/tableSecundaryContext/apiCalls";
import { TsContext } from "../../../context/tableSecundaryContext/TsContext";
import { EditUser } from "../../../context/usuarioContext/apiCalls";
import { UsuarioContext } from "../../../context/usuarioContext/UsuarioContext";
import { schemaUserEdit } from "../../../context/usuarioContext/validateForm";
import "./editarUsuario.scss";

export default function EditarUsuario() {
  const location = useLocation();
  const { dispatch } = useContext(UsuarioContext);
  const { tables, dispatch: dispatchTable } = useContext(TsContext);

  let history = useHistory();

  const [userEdit, setUserEdit] = useState(location.user);
  let checked = false;
  const [errores, setErrores] = useState({
    path: "",
    message: "",
  });

  useEffect(() => {
    getAllCentros(dispatchTable);
    getAllEmail(dispatchTable);
  }, [dispatchTable]);

  const handleChange = (e) => {
    if (e.target.name === "correo_electronico") {
      checked = true;
      const value = e.target.value;
      setUserEdit({ ...userEdit, [e.target.name]: value, checked: true });
    } else {
      const value = e.target.value;
      setUserEdit({ ...userEdit, [e.target.name]: value });
    }
  };

  const handleChangeInt = (e) => {
    const value = parseInt(e.target.value);
    setUserEdit({ ...userEdit, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let result = false;
    schemaUserEdit
      .validate(userEdit)
      .then(() => {
        if (checked) {
          tables.emails.forEach((email) => {
            if (email.correo_electronico === userEdit.correo_electronico) {
              result = true;
            }
          });
          if (result) {
            Swal.fire({
              title: "Upss!",
              text: "El correo electronico del sena esta en uso",
              icon: "warning",
              confirmButtonText: "Cerrar",
            });
          } else {
            EditUser(userEdit, dispatch);
            history.push("/users");
          }
        } else {
          EditUser(userEdit, dispatch);
          history.push("/users");
        }
      })
      .catch((error) => {
        setErrores({
          path: error.path,
          message: error.errors[0],
        });
      });
  };

  return (
    <div className="editUser">
      <h1 className="editUserTitle">Actualización del Usuario</h1>
      <div className="contentEditUser">
        <form action="">
          <div className="contentEditUserGroup">
            <p className="pLetter">Nombre Completo</p>
            <input
              type="text"
              name="nombre_usuario"
              className="contentEditUserInput"
              placeholder="Ingresar el nombre completo"
              onChange={handleChange}
              value={userEdit.nombre_usuario}
            />
          </div>
          {errores.path === "nombre_usuario" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentEditUserGroup">
            <p className="pLetter">Correo electrónico SENA</p>
            <input
              type="text"
              name="correo_electronico"
              className="contentEditUserInput"
              placeholder="Ingresar el correo electrónico SENA"
              onChange={handleChange}
              value={userEdit.correo_electronico}
            />
          </div>
          {errores.path === "correo_electronico" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentEditUserGroup">
            <p className="pLetter">Correo electrónico de respaldo</p>
            <input
              type="text"
              name="correo_respaldo"
              className="contentEditUserInput"
              placeholder="Ingresar un correo electrónico de respaldo"
              onChange={handleChange}
              value={userEdit.correo_respaldo}
            />
          </div>
          {errores.path === "correo_respaldo" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentEditUserGroup">
            <p className="pLetter">Centro de formación</p>
            <select
              className="contentEditUserSelect"
              name="codigo_centro"
              id="codigo_centro"
              onChange={handleChangeInt}
              value={userEdit.codigo_centro}
            >
              <option value="">Selecciona un centro de formación</option>
              {tables.centros &&
                tables.centros.map((centro, id) => (
                  <option key={id} value={centro.codigo_centro}>
                    {centro.nombre_centro}
                  </option>
                ))}
            </select>
          </div>
          {errores.path === "codigo_centro" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentEditUserGroup">
            <p className="pLetter">Fecha de finalización del contrato*</p>
            <input
              type="date"
              name="fecha_fin_cuenta"
              className="contentEditUserInput"
              onChange={handleChange}
              value={userEdit.fecha_fin_cuenta.split("T", 2)[0]}
            />
          </div>
          {errores.path === "fecha_fin_cuenta" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentEditUserGroup">
            <p className="pLetter">Rol</p>
            <select
              className="contentEditUserSelect"
              onChange={handleChangeInt}
              name="codigo_rol"
              id="rol"
              value={userEdit.codigo_rol}
            >
              <option value="">Seleccione el rol</option>
              <option value={2}>Director</option>
              <option value={3}>Dinamizador</option>
              <option value={4}>Auxiliar</option>
            </select>
          </div>
          {errores.path === "codigo_rol" && (
            <p className="error">{errores.message}*</p>
          )}
          <button className="contentEditUserButton" onClick={handleSubmit}>
            Editar
          </button>
        </form>
      </div>
      <div className="containerFooter">
        <small>Derechos de autor ©2021 SENNOVA</small>
      </div>
    </div>
  );
}

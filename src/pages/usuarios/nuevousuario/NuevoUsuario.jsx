import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import {
  getAllCentros,
  getAllEmail,
} from "../../../context/tableSecundaryContext/apiCalls";
import { TsContext } from "../../../context/tableSecundaryContext/TsContext";
import { register } from "../../../context/usuarioContext/apiCalls";
import { UsuarioContext } from "../../../context/usuarioContext/UsuarioContext";
import { schemaUser } from "../../../context/usuarioContext/validateForm";
import "./nuevoUsuario.scss";

export default function NuevoUsuario() {
  const { dispatch } = useContext(UsuarioContext);
  const { tables, dispatch: dispatchTable } = useContext(TsContext);

  let history = useHistory();

  const [user, setUser] = useState({
    codigo_estado: 1,
  });
  const [errores, setErrores] = useState({
    path: "",
    message: "",
  });

  useEffect(() => {
    getAllCentros(dispatchTable);
    getAllEmail(dispatchTable);
  }, [dispatchTable]);

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleChangeInt = (e) => {
    const value = parseInt(e.target.value);
    setUser({ ...user, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let result = false;
    schemaUser
      .validate(user)
      .then(() => {
        tables.emails.forEach((email) => {
          if (email.correo_electronico === user.correo_electronico) {
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
          register(user, dispatch);
          history.push("/users");
        }
      })
      .catch((error) => {
        console.log(error);
        setErrores({
          path: error.path,
          message: error.errors[0],
        });
      });
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">Registrar Usuario</h1>
      <div className="contentNewUser">
        <form action="">
          <div className="contentNewUserGroup">
            <p className="pLetter">Nombre Completo*</p>
            <input
              type="text"
              name="nombre_usuario"
              className="contentNewUserInput"
              placeholder="Ingresar el nombre completo"
              onChange={handleChange}
            />
          </div>
          {errores.path === "nombre_usuario" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentNewUserGroup">
            <p className="pLetter">Contraseña*</p>
            <input
              type="password"
              name="contrasena"
              className="contentNewUserInput"
              placeholder="Ingresar el nombre completo"
              onChange={handleChange}
            />
          </div>
          {errores.path === "contrasena" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentNewUserGroup">
            <p className="pLetter">Confirmar Contraseña*</p>
            <input
              type="password"
              name="confirmar_contrasena"
              className="contentNewUserInput"
              placeholder="Ingresar el nombre completo"
              onChange={handleChange}
            />
          </div>
          {errores.path === "confirmar_contrasena" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentNewUserGroup">
            <p className="pLetter">Correo electrónico SENA</p>
            <input
              type="text"
              name="correo_electronico"
              className="contentNewUserInput"
              placeholder="Ingresar el correo electrónico SENA"
              onChange={handleChange}
            />
          </div>
          {errores.path === "correo_electronico" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentNewUserGroup">
            <p className="pLetter">Correo electrónico de respaldo</p>
            <input
              type="text"
              name="correo_respaldo"
              className="contentNewUserInput"
              placeholder="Ingresar un correo electrónico de respaldo"
              onChange={handleChange}
            />
          </div>
          {errores.path === "correo_respaldo" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentNewUserGroup">
            <p className="pLetter">Centro de formación*</p>
            <select
              className="contentNewUserSelect"
              name="codigo_centro"
              id="codigo_centro"
              onChange={handleChangeInt}
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
          <div className="contentNewUserGroup">
            <p className="pLetter">Fecha de finalización del contrato*</p>
            <input
              type="date"
              name="fecha_fin_cuenta"
              className="contentNewUserInput"
              onChange={handleChange}
            />
          </div>
          {errores.path === "fecha_fin_cuenta" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentNewUserGroup">
            <p className="pLetter">Rol</p>
            <select
              className="contentNewUserSelect"
              onChange={handleChangeInt}
              name="codigo_rol"
              id="rol"
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
          <button className="contentNewUserButton" onClick={handleSubmit}>
            Registrar
          </button>
        </form>
      </div>
      <div className="containerFooter">
        <small>Derechos de autor ©2021 SENNOVA</small>
      </div>
    </div>
  );
}

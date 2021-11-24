import React, { useContext, useState } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { updateMaquinary } from "../../../context/maquinariaContext/apiCalls";
import { MaquinaryContext } from "../../../context/maquinariaContext/MaquinaryContext";
import { schemaMaquinary } from "../../../context/proyectoContext/validateForm";
import "./editMaquinary.scss";

export default function EditMaquinary() {
  const { maquinary } = useLocation();
  const { dispatch } = useContext(MaquinaryContext);

  let history = useHistory();

  const [errores, setErrores] = useState({
    path: "",
    message: "",
  });
  const [editMaquinary, setEditMaquinary] = useState(maquinary);

  const handleChange = (e) => {
    const value = e.target.value;
    setEditMaquinary({ ...editMaquinary, [e.target.name]: value });
  };

  const handleChangeInt = (e) => {
    const value = parseInt(e.target.value);
    setEditMaquinary({ ...editMaquinary, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    schemaMaquinary
      .validate(editMaquinary, dispatch)
      .then(() => {
        updateMaquinary(editMaquinary, dispatch);
        history.push("/machinery");
      })
      .catch((error) => {
        setErrores({
          path: error.path,
          message: error.errors[0],
        });
      });
  };

  return (
    <>
      {editMaquinary ? (
        <div className="editMaquinary">
          <h1 className="editMaquinaryTitle">
            Actualización de la maquina/equipo
          </h1>
          <div className="contentEditMaquinary">
            <form action="">
              <div className="contentEditMaquinaryGroup TextArea">
                <p className="pLetter">Descripción del equipo:*</p>
                <textarea
                  name="descripcion_equipo"
                  id="text_descripcion_equipo"
                  cols="10"
                  rows="5"
                  maxLength="250"
                  placeholder="Escribe aquí la descripción del equipo..."
                  style={{ fontSize: "16px" }}
                  value={editMaquinary.descripcion_equipo}
                  onChange={handleChange}
                ></textarea>
              </div>
              {errores.path === "descripcion_equipo" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentEditMaquinaryGroup">
                <p className="pLetter">Valor total del equipo*</p>
                <input
                  type="number"
                  name="valor_equipo"
                  className="contentEditMaquinaryInput"
                  placeholder="Ingresar el valor total del equipo"
                  value={editMaquinary.valor_equipo}
                  onChange={handleChangeInt}
                  disabled={editMaquinary.codigo_producto ? true : false}
                />
              </div>
              {errores.path === "valor_equipo" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentEditMaquinaryGroup">
                <p className="pLetter">Fecha de compra del equipo*</p>
                <input
                  type="date"
                  name="fecha_compra"
                  className="contentEditMaquinaryInput"
                  value={editMaquinary.fecha_compra.split("T")[0]}
                  onChange={handleChange}
                />
              </div>
              {errores.path === "fecha_compra" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentEditMaquinaryGroup">
                <p className="pLetter">Tipo de equipo*</p>
                <select
                  className="contentEditMaquinarySelect"
                  name="codigo_tipo_equipo"
                  id="codigo_tipo_equipo"
                  value={editMaquinary.codigo_tipo_equipo}
                  onChange={handleChangeInt}
                >
                  <option value="">Seleccione el tipo de equipo</option>
                  <option value={1}>Maquinaria</option>
                  <option value={2}>Equipo de Computo</option>
                </select>
              </div>
              {errores.path === "codigo_tipo_equipo" && (
                <p className="error">{errores.message}*</p>
              )}
              <button
                className="contentEditMaquinaryButton"
                onClick={handleSubmit}
              >
                Editar
              </button>
            </form>
          </div>
          <div className="containerFooter">
            <small>Derechos de autor ©2021 SENNOVA</small>
          </div>
        </div>
      ) : (
        <Redirect to="/machinery" />
      )}
    </>
  );
}

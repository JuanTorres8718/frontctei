import React, { useState } from "react";
import "./editarTalentoHumano.scss";
import { schemaTalent } from "../../../context/proyectoContext/validateForm";
import { TalentContext } from "../../../context/talentoContext/TalentContext";
import { useLocation, Redirect } from "react-router-dom";
import { useContext } from "react";
import { TsContext } from "../../../context/tableSecundaryContext/TsContext";
import { useEffect } from "react";
import {
  getAllNivel,
  getAllRolSennova,
} from "../../../context/tableSecundaryContext/apiCalls";

export default function EditarTalentoHumano() {
  const { talent } = useLocation();
  const { dispatch } = useContext(TalentContext);
  const { tables, dispatch: dispatchTables } = useContext(TsContext);

  useEffect(() => {
    getAllNivel(dispatchTables);
    getAllRolSennova(dispatchTables);
  }, [dispatchTables]);

  const [editTalent, setEditTalent] = useState(talent);

  const [errores, setErrores] = useState({
    path: "",
    message: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEditTalent({ ...editTalent, [e.target.name]: value });
  };

  const handleChangeInt = (e) => {
    const value = parseInt(e.target.value);
    setEditTalent({ ...editTalent, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    schemaTalent
      .validate(editTalent)
      .then(() => {
        console.log("Enviado");
      })
      .catch((error) => {
        setErrores({
          path: error.path,
          message: error.errors[0],
        });
      });
  };

  console.log(editTalent);

  return (
    <>
      {editTalent ? (
        <div className="editTalent">
          <h1 className="editTalentTitle">Editar responsable</h1>
          <div className="contentEditTalent">
            <form action="">
              <div className="contentEditTalentGroup">
                <p className="pLetter">Nombre Completo*</p>
                <input
                  type="text"
                  name="nombre_persona"
                  className="contentEditTalentInput"
                  placeholder="Ingresar el nombre completo"
                  onChange={handleChange}
                  value={editTalent.nombre_persona}
                />
              </div>
              {errores.path === "nombre_persona" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentEditTalentGroup">
                <p className="pLetter">Objeto del contrato</p>
                <input
                  type="text"
                  name="objeto_contrato"
                  className="contentEditTalentInput"
                  placeholder="Ingresar el objeto del contrato"
                  onChange={handleChange}
                  value={editTalent.objeto_contrato}
                />
              </div>
              {errores.path === "objeto_contrato" && (
                <p className="error">{errores.message}*</p>
              )}
              {/* <div className="contentEditTalentGroup">
            <p className="pLetter">SENA SENNOVA*</p>
            <select
              className="contentEditTalentSelect"
              name="sena_sennova"
              id="sena_sennova"
              onChange={handleChange}
              value={editTalent.sena_sennova}
            >
              <option value="">
                Selecciones si pertenece a SENA o SENNOVA
              </option>
              <option value="sena">SENA</option>
              <option value="sennova">SENNOVA</option>
            </select>
          </div>
          {errores.path === "sena_sennova" && (
            <p className="error">{errores.message}*</p>
          )} */}
              {/* <div className="contentEditTalentGroup">
            <p className="pLetter">Valor mensual del contrato</p>
            <input
              type="number"
              name="valor_mensual_contrato"
              id="valor_mensual_contrato"
              className="contentEditTalentInput"
              placeholder="Ingresar el valor mensual del contrato"
              onChange={handleChangeInt}
              value={editTalent.valor_mensual_contrato}
            />
          </div>
          {errores.path === "valor_mensual_contrato" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentEditTalentGroup">
            <p className="pLetter">Valor Total del contrato*</p>
            <input
              type="number"
              name="valor_total_contrato"
              id="valor_total_contrato"
              className="contentEditTalentInput"
              placeholder="Ingresar el valor total del contrato"
              onChange={handleChangeInt}
              value={editTalent.valor_total_contrato}
            />
          </div>
          {errores.path === "valor_total_contrato" && (
            <p className="error">{errores.message}*</p>
          )} */}
              <div className="contentEditTalentGroup">
                <p className="pLetter">Género*</p>
                <select
                  className="contentEditTalentSelect"
                  name="genero"
                  id="genero"
                  onChange={handleChange}
                  value={editTalent.genero}
                >
                  <option value="">Selecciona tu género</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              {errores.path === "genero" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentEditTalentGroup">
                <p className="pLetter">Tiempo de dedicación semanal</p>
                <input
                  type="text"
                  name="tiempo_dedicacion_semanal"
                  className="contentEditTalentInput"
                  placeholder="Ingresar el tiempo dedicado semanal por la persona"
                  onChange={handleChange}
                  value={editTalent.tiempo_dedicacion_semanal}
                />
              </div>
              {errores.path === "tiempo_dedicacion_semanal" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentEditTalentGroup">
                <p className="pLetter">Fecha de inicio del contrato*</p>
                <input
                  type="date"
                  name="fecha_inicio_contrato"
                  className="contentEditTalentInput"
                  onChange={handleChange}
                  value={editTalent.fecha_inicio_contrato.split("T")[0]}
                />
              </div>
              {errores.path === "fecha_inicio_contrato" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentEditTalentGroup">
                <p className="pLetter">Fecha de finalización del contrato*</p>
                <input
                  type="date"
                  name="fecha_fin_contrato"
                  className="contentEditTalentInput"
                  onChange={handleChange}
                  value={editTalent.fecha_fin_contrato.split("T")[0]}
                />
              </div>
              {errores.path === "fecha_fin_contrato" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentEditTalentGroup">
                <p className="pLetter">Tipo de contrato*</p>
                <select
                  className="contentEditTalentSelect"
                  name="codigo_tipo_contrato"
                  id="codigo_tipo_contrato"
                  onChange={handleChangeInt}
                  value={editTalent.codigo_tipo_contrato}
                >
                  <option value="">Seleccione el tipo de contrato</option>
                  <option value={2001}>Aprendiz</option>
                  <option value={2002}>Contratista</option>
                  <option value={2003}>Planta</option>
                  <option value={2004}>Temporal</option>
                  <option value={2005}>Provisional</option>
                </select>
              </div>
              {errores.path === "codigo_tipo_contrato" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentEditTalentGroup">
                <p className="pLetter">Nivel Academico</p>
                <select
                  className="contentEditTalentSelect"
                  name="codigo_nivel"
                  id="codigo_nivel"
                  onChange={handleChangeInt}
                  value={editTalent.codigo_nivel}
                >
                  <option value="">Selecciona el nivel academico</option>
                  {tables.niveles &&
                    tables.niveles.map((nivel, id) => (
                      <option key={id} value={nivel.codigo_nivel_academico}>
                        {nivel.nivel_academico}
                      </option>
                    ))}
                </select>
              </div>
              <div className="contentEditTalentGroup">
                <p className="pLetter">Rol Sennova</p>
                <select
                  className="contentEditTalentSelect"
                  name="codigo_rol_sennova"
                  id="codigo_rol_sennova"
                  onChange={handleChangeInt}
                  value={editTalent.codigo_rol_sennova}
                >
                  <option value="">Selecciona el rol sennova</option>
                  {tables.rolSennova &&
                    tables.rolSennova.map((rol, id) => (
                      <option key={id} value={rol.codigo_rol_sennova}>
                        {rol.nombre_rol_sennova}
                      </option>
                    ))}
                </select>
              </div>
              <div className="contentEditTalentGroup">
                <p className="pLetter">Rol en el proyecto*</p>
                <select
                  className="contentEditTalentSelect"
                  name="codigo_rol_proyecto"
                  id="codigo_rol_proyecto"
                  onChange={handleChangeInt}
                  value={editTalent.codigo_rol_proyecto}
                >
                  <option value="">Selecciona el rol en el proyecto</option>
                  <option value={10001}>Líder</option>
                  <option value={10002}>Coordinador</option>
                  <option value={10003}>Investigador</option>
                  <option value={10004}>Aprendíz</option>
                  <option value={10005}>Monitor</option>
                </select>
              </div>
              {errores.path === "codigo_rol_proyecto" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentEditTalentGroup">
                <p className="pLetter">Estado del contrato*</p>
                <select
                  className="contentEditTalentSelect"
                  name="codigo_estado_contrato"
                  id="codigo_estado_contrato"
                  onChange={handleChangeInt}
                  value={editTalent.codigo_estado_contrato}
                >
                  <option value="">Seleccione el estado del contrato</option>
                  <option value={1}>Sin iniciar</option>
                  <option value={2}>Ejecución</option>
                  <option value={3}>Terminado</option>
                  <option value={4}>Suspendido</option>
                </select>
              </div>
              {errores.path === "codigo_estado_contrato" && (
                <p className="error">{errores.message}*</p>
              )}
              <button
                className="contentEditTalentButton registro"
                onClick={handleSubmit}
              >
                Editar
              </button>
            </form>
          </div>
        </div>
      ) : (
        <Redirect to="/talents" />
      )}
    </>
  );
}

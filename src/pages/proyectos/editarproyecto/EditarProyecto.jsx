import { useContext, useEffect, useState } from "react";
import "./editarProyecto.scss";
import { TsContext } from "../../../context/tableSecundaryContext/TsContext";
import {
  getAllCentros,
  getAllCiiu,
  getAllDisciplina,
  getAllRed,
  getAllRolSennova,
  getAllSubareas,
} from "../../../context/tableSecundaryContext/apiCalls";
import { schemaEditProject } from "../../../context/proyectoContext/validateForm";
import { useHistory, useLocation, Redirect } from "react-router-dom";
import { updateProject } from "../../../context/proyectoContext/apiCalls";
import { ProductoContext } from "../../../context/productoContext/ProductoContext";

export default function EditarProyecto() {
  const { project } = useLocation();

  let history = useHistory();

  const [editProject, setEditProject] = useState(project);

  const [errores, setErrores] = useState({
    path: "",
    message: "",
  });

  const { tables, dispatch } = useContext(TsContext);
  const { dispatch: dispatchProducto } = useContext(ProductoContext);

  useEffect(() => {
    getAllCentros(dispatch);
    getAllSubareas(dispatch);
    getAllRed(dispatch);
    getAllRolSennova(dispatch);
    getAllCiiu(dispatch);
    getAllDisciplina(dispatch);
  }, [dispatch]);

  const hoverSwitch = (e) => {
    if (e.target.name === "industria") {
      document.getElementById("industria_4_0").classList.toggle("displayText");
      document.getElementById("text_industria_4_0").value = "";
      setEditProject({ ...editProject, industria_4_0: "" });
    } else if (e.target.name === "economia") {
      document
        .getElementById("economia_naranja")
        .classList.toggle("displayText");
      document.getElementById("text_economia_naranja").value = "";
      setEditProject({ ...editProject, economia_naranja: "" });
    } else if (e.target.name === "politica") {
      document
        .getElementById("politica_institucional")
        .classList.toggle("displayText");
      document.getElementById("text_politica_institucional").value = "";
      setEditProject({ ...editProject, politica_institucional: "" });
    } else if (e.target.name === "proyecto_financiado") {
      if (project.proyecto_financiado === 1) {
        setEditProject({ ...editProject, [e.target.name]: 0 });
      } else {
        setEditProject({ ...editProject, [e.target.name]: 1 });
      }
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEditProject({ ...editProject, [e.target.name]: value });
  };

  const handleChangeInt = (e) => {
    if (e.target.name === "codigo_area_ocde") {
      const value = parseInt(e.target.value);
      setEditProject({ ...editProject, [e.target.name]: value });
      tables["filter_subarea"] = tables.subareas.filter(
        (subarea) => subarea.codigo_area_conocimiento === value
      );
    } else if (e.target.name === "codigo_subarea_conocimiento") {
      const value = parseInt(e.target.value);
      setEditProject({ ...editProject, [e.target.name]: value });
      tables["filter_disciplina"] = tables.disciplinas.filter(
        (disciplina) => disciplina.codigo_subarea === value
      );
    } else {
      const value = parseInt(e.target.value);
      setEditProject({ ...editProject, [e.target.name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    schemaEditProject
      .validate(editProject)
      .then(() => {
        updateProject(editProject, dispatchProducto);
        history.push("/projects");
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
      {editProject ? (
        <div className="newProject">
          <h1 className="newProjectTitle">Editar Proyecto</h1>
          <div className="contentNewProject">
            <form action="" encType="multipart/form-data">
              <div className="contentNewProjectGroup">
                <p className="pLetter">Nombre del Proyecto*</p>
                <input
                  type="text"
                  name="nombre_proyecto"
                  className="contentNewProjectInput"
                  placeholder="Ingresar el nombre del Proyecto"
                  onChange={handleChange}
                  value={editProject.nombre_proyecto}
                />
              </div>
              {errores.path === "nombre_proyecto" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentNewProjectGroup">
                <p className="pLetter">Presupuesto solicitado*</p>
                <input
                  type="number"
                  name="presupuesto_solicitado"
                  className="contentNewProjectInput"
                  placeholder="Ingresar el valor del presupuesto solicitado"
                  onChange={handleChangeInt}
                  value={editProject.presupuesto_solicitado}
                />
              </div>
              {errores.path === "presupuesto_solicitado" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentNewProjectGroup">
                <p className="pLetter">Presupuesto aprobado*</p>
                <input
                  type="number"
                  name="presupuesto_aprobado"
                  className="contentNewProjectInput"
                  placeholder="Ingresar el valor del presupuesto aprobado"
                  onChange={handleChangeInt}
                  value={editProject.presupuesto_aprobado}
                />
              </div>
              {errores.path === "presupuesto_aprobado" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentNewProjectGroup">
                <p className="pLetter">Presupuesto asignado*</p>
                <input
                  type="number"
                  name="presupuesto_asignado"
                  className="contentNewProjectInput"
                  placeholder="Ingresar el valor del presupuesto asignado"
                  onChange={handleChangeInt}
                  value={editProject.presupuesto_asignado}
                />
              </div>
              {errores.path === "presupuesto_asignado" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentNewProjectGroup TextArea">
                <p className="pLetterQuestion">Observación General*</p>
                <textarea
                  name="observacion_general"
                  id="text_observacion_general"
                  cols="9"
                  rows="5"
                  maxLength="250"
                  placeholder="Escribe aquí la observación del proyecto..."
                  style={{ fontSize: "16px" }}
                  onChange={handleChange}
                  value={editProject.observacion_general}
                ></textarea>
              </div>
              {errores.path === "observacion_general" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentNewProjectGroup">
                <p className="pLetter">Fecha de inicio del proyecto*</p>
                <input
                  type="date"
                  name="fecha_inicio_proyecto"
                  className="contentNewProjectInput"
                  onChange={handleChange}
                  value={editProject.fecha_inicio_proyecto.split("T")[0]}
                />
              </div>
              {errores.path === "fecha_inicio_proyecto" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentNewProjectGroup">
                <p className="pLetter">Fecha de cierre del proyecto*</p>
                <input
                  type="date"
                  name="fecha_cierre_proyecto"
                  className="contentNewProjectInput"
                  onChange={handleChange}
                  value={editProject.fecha_cierre_proyecto.split("T")[0]}
                />
              </div>
              {errores.path === "fecha_cierre_proyecto" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentNewProjectGroup">
                <p className="pLetter">Centro de formación*</p>
                <select
                  className="contentNewProjectSelect"
                  name="codigo_centro"
                  id="codigo_centro"
                  onChange={handleChangeInt}
                  value={editProject.codigo_centro}
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
              <div className="contentNewProjectGroup">
                <p className="pLetter">Línea programática*</p>
                <select
                  className="contentNewProjectSelect"
                  name="codigo_linea_programatica"
                  onChange={handleChangeInt}
                  id="codigo_linea_programatica"
                  value={editProject.codigo_linea_programatica}
                >
                  <option value="">Selecciona una línea programática</option>
                  <option value={23}>Mordenización</option>
                  <option value={65}>Divulgación</option>
                  <option value={66}>Investigación aplicada</option>
                  <option value={82}>Innovación</option>
                </select>
              </div>
              {errores.path === "codigo_linea_programatica" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentNewProjectGroup">
                <p className="pLetter">Red de conocimiento sectorial*</p>
                <select
                  className="contentNewProjectSelect"
                  name="codigo_red_conocimiento"
                  id="codigo_red_conocimiento"
                  onChange={handleChangeInt}
                  value={editProject.codigo_red_conocimiento}
                >
                  <option value="">Selecciona una red de conocimiento</option>
                  {tables.redes &&
                    tables.redes.map((red, id) => (
                      <option key={id} value={red.codigo_red}>
                        {red.nombre_red}
                      </option>
                    ))}
                </select>
              </div>
              {errores.path === "codigo_red_conocimiento" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentNewProjectGroup">
                <p className="pLetter">Actividad económica(CIIU)*</p>
                <select
                  className="contentNewProjectSelect"
                  name="codigo_ciiu"
                  id="codigo_ciiu"
                  onChange={handleChange}
                  value={editProject.codigo_ciiu}
                >
                  <option value="">Selecciona la actividad económica</option>
                  {tables.ciiu &&
                    tables.ciiu.map((ciiu, id) => (
                      <option key={id} value={ciiu.codigo_ciiu}>
                        {ciiu.nombre_ciiu.slice(0, 40) + "..."}
                      </option>
                    ))}
                </select>
              </div>
              {errores.path === "codigo_ciiu" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentNewProjectGroup">
                <p className="pLetter">Area de conocimiento OCDE</p>
                <select
                  className="contentNewProjectSelect"
                  name="codigo_area_ocde"
                  id="codigo_area_ocde"
                  onChange={handleChangeInt}
                  value={editProject.codigo_area_ocde || ""}
                >
                  <option value="">
                    Selecciona un area de conocimiento OCDE
                  </option>
                  <option value={1}>CIENCIAS NATURALES Y EXACTAS</option>
                  <option value={2}>INGENIERÍAS Y TECNOLOGÍAS</option>
                  <option value={3}>CIENCIAS MÉDICAS Y DE LA SALUD</option>
                  <option value={4}>CIENCIAS AGRÍCOLAS</option>
                  <option value={5}>CIENCIAS SOCIALES</option>
                  <option value={6}>HUMANIDADES</option>
                </select>
              </div>
              <div className="contentNewProjectGroup">
                <p className="pLetter">Subarea de conocimiento OCDE</p>
                <select
                  className="contentNewProjectSelect"
                  name="codigo_subarea_conocimiento"
                  id="codigo_subarea_conocimiento"
                  onChange={handleChangeInt}
                  value={editProject.codigo_subarea_conocimiento || ""}
                >
                  <option value="">
                    Selecciona una subarea de conocimiento OCDE
                  </option>
                  {tables.filter_subarea &&
                    tables.filter_subarea.map((subareaFilter) => (
                      <option
                        key={subareaFilter.codigo_subarea}
                        value={subareaFilter.codigo_subarea}
                      >
                        {subareaFilter.nombre_subarea}
                      </option>
                    ))}
                </select>
              </div>
              <div className="contentNewProjectGroup">
                <p className="pLetter">Disciplina</p>
                <select
                  className="contentNewProjectSelect"
                  name="codigo_disciplina"
                  id="codigo_disciplina"
                  onChange={handleChange}
                  value={editProject.codigo_disciplina || ""}
                >
                  <option value="">Selecciona la disciplina</option>
                  {tables.filter_disciplina &&
                    tables.filter_disciplina.map((disciplinaFilter) => (
                      <option
                        key={disciplinaFilter.codigo_disciplina}
                        value={disciplinaFilter.codigo_disciplina}
                      >
                        {disciplinaFilter.nombre_disciplina.slice(0, 40) +
                          "..."}
                      </option>
                    ))}
                </select>
              </div>
              <div className="contentDataBankCheckAll">
                <p className="pLetter">¿El proyecto esta financiado?*</p>
                <div className="contentRadioButtons">
                  <p>Si</p>
                  <label className="switch">
                    <input
                      className="radio"
                      name="proyecto_financiado"
                      id="proyecto_financiado"
                      type="checkbox"
                      onClick={hoverSwitch}
                      defaultChecked={editProject.proyecto_financiado}
                    />
                    <div className="slider round"></div>
                  </label>
                  <p>No</p>
                </div>
              </div>
              {errores.path === "proyecto_financiado" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentNewProjectGroup TextArea">
                <p className="pLetterQuestion">Resumen del proyecto*</p>
                <textarea
                  name="resumen_proyecto"
                  id="text_resumen_proyecto"
                  cols="9"
                  rows="5"
                  maxLength="250"
                  placeholder="Escribe aquí el resumen del proyecto..."
                  style={{ fontSize: "16px" }}
                  onChange={handleChange}
                  value={editProject.resumen_proyecto}
                ></textarea>
              </div>
              {errores.path === "resumen_proyecto" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentNewProjectGroup">
                <p className="pLetter">Video del Proyecto*</p>
                <input
                  type="text"
                  name="video_proyecto"
                  className="contentNewProjectInput"
                  placeholder="Ingresar el link del video del Proyecto"
                  onChange={handleChange}
                  value={editProject.video_proyecto}
                />
              </div>
              {errores.path === "video_proyecto" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentNewProjectGroup">
                <p className="pLetter">Estado del proyecto*</p>
                <select
                  className="contentNewProjectSelect"
                  name="codigo_estado_proyecto"
                  id="codigo_estado_proyecto"
                  onChange={handleChangeInt}
                  value={editProject.codigo_estado_proyecto}
                >
                  <option value="">Selecciona el estado del proyecto</option>
                  <option value={1}>Sin iniciar</option>
                  <option value={2}>Ejecución</option>
                  <option value={3}>Terminado</option>
                  <option value={4}>Suspendido</option>
                </select>
              </div>
              {errores.path === "codigo_estado_proyecto" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentDataBankCheckAll">
                <p className="pLetter">
                  ¿El proyecto pertenece a la industria 4.0?
                </p>
                <div className="contentRadioButtons">
                  <p>Si</p>
                  <label className="switch">
                    <input
                      className="radio"
                      name="industria"
                      id="industria"
                      type="checkbox"
                      onClick={hoverSwitch}
                    />
                    <div className="slider round"></div>
                  </label>
                  <p>No</p>
                </div>
              </div>
              <div
                className="contentNewProjectGroup displayText TextArea"
                id="industria_4_0"
              >
                <p className="pLetterQuestion">
                  Describe porque pertenece a la industria 4.0
                </p>
                <textarea
                  name="industria_4_0"
                  id="text_industria_4_0"
                  cols="10"
                  rows="5"
                  maxLength="250"
                  placeholder="Escribe aquí porque pertenece a la industria 4.0..."
                  style={{ fontSize: "16px" }}
                  onChange={handleChange}
                  value={editProject.industria_4_0 || ""}
                ></textarea>
              </div>
              <div className="contentDataBankCheckAll">
                <p className="pLetter">
                  ¿El proyecto pertenece a la economía naranja?
                </p>
                <div className="contentRadioButtons">
                  <p>Si</p>
                  <label className="switch">
                    <input
                      className="radio"
                      name="economia"
                      id="economia"
                      type="checkbox"
                      onClick={hoverSwitch}
                    />
                    <div className="slider round"></div>
                  </label>
                  <p>No</p>
                </div>
              </div>
              <div
                className="contentNewProjectGroup displayText TextArea"
                id="economia_naranja"
              >
                <p className="pLetterQuestion">
                  Describe porque pertenece a la economía naranja
                </p>
                <textarea
                  name="economia_naranja"
                  id="text_economia_naranja"
                  cols="10"
                  rows="5"
                  maxLength="250"
                  placeholder="Escribe aquí porque pertenece a la economía naranja..."
                  style={{ fontSize: "16px" }}
                  onChange={handleChange}
                  value={editProject.economia_naranja || ""}
                ></textarea>
              </div>
              <div className="contentDataBankCheckAll">
                <p className="pLetter">
                  ¿El proyecto aporta a la política institucional para la
                  atención a las personas con discapacidad?
                </p>
                <div className="contentRadioButtons">
                  <p>Si</p>
                  <label className="switch">
                    <input
                      className="radio"
                      name="politica"
                      id="politica"
                      type="checkbox"
                      onClick={hoverSwitch}
                    />
                    <div className="slider round"></div>
                  </label>
                  <p>No</p>
                </div>
              </div>
              <div
                className="contentNewProjectGroup displayText TextArea"
                id="politica_institucional"
              >
                <p className="pLetterQuestion">
                  Describe porque aporta a las políticas institucionales
                </p>
                <textarea
                  name="politica_institucional"
                  id="text_politica_institucional"
                  cols="10"
                  rows="5"
                  maxLength="250"
                  placeholder="Escribe aquí porque aporta a las políticas institucionales..."
                  style={{ fontSize: "16px" }}
                  onChange={handleChange}
                  value={editProject.politica_institucional || ""}
                ></textarea>
              </div>
              <button
                className="contentNewProjectButton"
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
        <Redirect to="/projects" />
      )}
    </>
  );
}

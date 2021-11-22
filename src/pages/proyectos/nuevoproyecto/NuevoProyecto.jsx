import { useContext, useEffect, useState } from "react";
import "./nuevoProyecto.scss";
import ModalProject from "../../../components/modalproduct/ModalProduct";
import { Add } from "@material-ui/icons";
import Maquinary from "../../../components/maquinaryComponent/Maquinary";
import { TsContext } from "../../../context/tableSecundaryContext/TsContext";
import {
  getAllCentros,
  getAllCiiu,
  getAllDisciplina,
  getAllMunicipios,
  getAllNivel,
  getAllRed,
  getAllRolSennova,
  getAllRubros,
  getAllSemilleros,
  getAllSubareas,
} from "../../../context/tableSecundaryContext/apiCalls";
import { createProject } from "../../../context/proyectoContext/apiCalls";
import ModalOtrosGastos from "../../../components/otrosGastosComponent/OtrosGastos";
import {
  schemaMaquinary,
  schemaProject,
} from "../../../context/proyectoContext/validateForm";
import { useHistory } from "react-router-dom";
import Select from "react-select";

export default function NuevoProyecto() {
  let history = useHistory();

  const [project, setProject] = useState({
    codigo_proyecto: undefined,
    nombre_proyecto: undefined,
    presupuesto_solicitado: undefined,
    presupuesto_aprobado: undefined,
    presupuesto_asignado: undefined,
    observacion_general: undefined,
    fecha_inicio_proyecto: undefined,
    fecha_cierre_proyecto: undefined,
    industria_4_0: undefined,
    economia_naranja: undefined,
    politica_institucional: undefined,
    proyecto_financiado: 1,
    resumen_proyecto: undefined,
    video_proyecto: undefined,
    archivo_proyecto: undefined,
    informe_investigacion: undefined,
    codigo_linea_programatica: undefined,
    codigo_ciiu: undefined,
    codigo_area_ocde: undefined,
    codigo_subarea_conocimiento: undefined,
    codigo_disciplina: undefined,
    codigo_red_conocimiento: undefined,
    codigo_estado_proyecto: undefined,
    codigo_centro: undefined,
  });
  const [autores, setAutores] = useState([]);
  const [rubros, setRubros] = useState([]);
  const [maquinary, setMaquinary] = useState();
  const [municipios, setMunicipios] = useState([]);
  const [semilleros, setSemilleros] = useState([]);

  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [openRubro, setOpenRubro] = useState(false);
  const [errores, setErrores] = useState({
    path: "",
    message: "",
  });

  const { tables, dispatch } = useContext(TsContext);

  useEffect(() => {
    getAllCentros(dispatch);
    getAllSemilleros(dispatch);
    getAllSubareas(dispatch);
    getAllRed(dispatch);
    getAllMunicipios(dispatch);
    getAllNivel(dispatch);
    getAllRolSennova(dispatch);
    getAllRubros(dispatch);
    getAllCiiu(dispatch);
    getAllDisciplina(dispatch);
  }, [dispatch]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenRubro = () => {
    setOpenRubro(true);
  };

  const handleCloseRubro = () => {
    setOpenRubro(false);
  };

  const handleChecked = (e) => {
    if (checked) {
      setChecked(false);
      setMaquinary();
    } else {
      setChecked(true);
    }
  };

  const hoverSwitch = (e) => {
    if (e.target.name === "industria") {
      document.getElementById("industria_4_0").classList.toggle("displayText");
      document.getElementById("text_industria_4_0").value = "";
      setProject({ ...project, industria_4_0: "" });
    } else if (e.target.name === "economia") {
      document
        .getElementById("economia_naranja")
        .classList.toggle("displayText");
      document.getElementById("text_economia_naranja").value = "";
      setProject({ ...project, economia_naranja: "" });
    } else if (e.target.name === "politica") {
      document
        .getElementById("politica_institucional")
        .classList.toggle("displayText");
      document.getElementById("text_politica_institucional").value = "";
      setProject({ ...project, politica_institucional: "" });
    } else if (e.target.name === "proyecto_financiado") {
      if (project.proyecto_financiado === 1) {
        setProject({ ...project, [e.target.name]: 0 });
      } else {
        setProject({ ...project, [e.target.name]: 1 });
      }
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setProject({ ...project, [e.target.name]: value });
  };

  const handleChangeInt = (e) => {
    if (e.target.name === "codigo_area_ocde") {
      const value = parseInt(e.target.value);
      setProject({ ...project, [e.target.name]: value });
      tables["filter_subarea"] = tables.subareas.filter(
        (subarea) => subarea.codigo_area_conocimiento === value
      );
    } else if (e.target.name === "codigo_subarea_conocimiento") {
      const value = parseInt(e.target.value);
      setProject({ ...project, [e.target.name]: value });
      tables["filter_disciplina"] = tables.disciplinas.filter(
        (disciplina) => disciplina.codigo_subarea === value
      );
    } else {
      const value = parseInt(e.target.value);
      setProject({ ...project, [e.target.name]: value });
    }
  };

  const handleChangeFile = (e) => {
    console.log(e.target.name);
    if (e.target.id === "acta") {
      if (e.target.files[0]) {
        if (e.target.files[0].type === "application/pdf") {
          const value = e.target.files[0].name;
          const file = e.target.files[0];
          const form = new FormData();
          form.append("name", e.target.name);
          form.append("file", file, "form-data");
          setProject({
            ...project,
            archivo_proyecto: value,
            file_proyecto: file,
          });
          setErrores({
            path: "",
            message: "",
          });
        } else {
          setErrores({
            path: "archivo_proyecto",
            message: "Solo se permiten archivos PDF",
          });
        }
      }
    } else {
      if (e.target.files[0]) {
        if (e.target.files[0].type === "application/pdf") {
          const value = e.target.files[0].name;
          const file = e.target.files[0];
          const form = new FormData();
          form.append("name", "mierda");
          form.append("file", file);
          setProject({
            ...project,
            informe_investigacion: value,
            file_investigacion: file,
          });
          setErrores({
            path: "",
            message: "",
          });
        } else {
          setErrores({
            path: "informe_investigacion",
            message: "Solo se permiten archivos PDF",
          });
        }
      }
    }
  };

  const handleChangeSemillero = (e) => {
    console.log(e);
    setSemilleros(e);
  };

  const handleChangeMunicipios = (e) => {
    setMunicipios(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      project: project,
      talent: autores,
      maquinary: maquinary,
      rubros: rubros,
      semilleros: semilleros,
      municipios: municipios,
    };
    // const images = [
    //   data.project.file_proyecto,
    //   data.project.file_investigacion,
    // ];
    schemaProject
      .validate(data.project)
      .then(() => {
        if (data.rubros.length === 0) {
          setErrores({
            path: "button_rubros",
            message: "Agrega los rubros invertidos en el proyecto",
          });
        } else if (data.talent.length === 0) {
          setErrores({
            path: "button_talent",
            message: "Agrega los responsables que participan en el proyecto",
          });
        } else if (data.semilleros.length === 0) {
          setErrores({
            path: "semilleros",
            message: "Agrega los semilleros en el proyecto",
          });
        } else if (data.municipios.length === 0) {
          setErrores({
            path: "municipios",
            message: "Agrega los municipios beneficiados en el proyecto",
          });
        } else if (maquinary) {
          schemaMaquinary
            .validate(data.maquinary)
            .then(() => {
              createProject(data, dispatch);
              history.push("/projects");
            })
            .catch((error) => {
              console.log(error);
              setErrores({
                path: error.path,
                message: error.errors[0],
              });
            });
        } else {
          createProject(data, dispatch);
          history.push("/projects");
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
    <div className="newProject">
      <h1 className="newProjectTitle">Registrar Nuevo Proyecto</h1>
      <div className="contentNewProject">
        <form action="" encType="multipart/form-data">
          <div className="contentNewProjectGroup">
            <p className="pLetter">Código del Proyecto*</p>
            <input
              type="number"
              name="codigo_proyecto"
              className="contentNewProjectInput"
              placeholder="Ingresar el código del Proyecto"
              onChange={handleChangeInt}
            />
          </div>
          {errores.path === "codigo_proyecto" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentNewProjectGroup">
            <p className="pLetter">Nombre del Proyecto*</p>
            <input
              type="text"
              name="nombre_proyecto"
              className="contentNewProjectInput"
              placeholder="Ingresar el nombre del Proyecto"
              onChange={handleChange}
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
            ></textarea>
          </div>
          {errores.path === "observacion_general" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentAutores" id="autores">
            <p className="pLetter">
              Agregar los rubros generados por el proyecto*
            </p>
            <div className="contentContAutores">
              <button
                className="contentAutorButton"
                name="button_rubros"
                type="button"
                onClick={handleOpenRubro}
              >
                <Add className="addButton" />
              </button>
              <ModalOtrosGastos
                open={openRubro}
                handleClose={handleCloseRubro}
                setRubros={setRubros}
                rubros={rubros}
                tables={tables}
              />
            </div>
            {errores.path === "button_rubros" && (
              <p className="errorTalentRubro">{errores.message}*</p>
            )}
            <div className="rowContentAutores rowContentRubro">
              {rubros.map((data, id) => (
                <div className="rowRubro" key={id}>
                  <div className="rowColumn">
                    {tables.rubros &&
                      tables.rubros
                        .filter(
                          (rubro) => rubro.codigo_rubro === data.codigo_rubro
                        )
                        .map((rubroFilter) => (
                          <p key={rubroFilter.codigo_rubro}>
                            {rubroFilter.nombre_rubro}
                          </p>
                        ))}
                  </div>
                  <div className="rowColumn">
                    <p className="pvalue">${data.valor_rubro}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="contentNewProjectGroup">
            <p className="pLetter">Fecha de inicio del proyecto*</p>
            <input
              type="date"
              name="fecha_inicio_proyecto"
              className="contentNewProjectInput"
              onChange={handleChange}
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
          <div className="contentNewSelectGroup">
            <p className="pLetter">Semilleros*</p>
            {tables.semilleros && (
              <Select
                placeholder="Selecciona los semilleros"
                closeMenuOnSelect={false}
                // defaultValue="Selecciona un semillero"
                isMulti
                name="semillero"
                options={tables.semilleros}
                onChange={handleChangeSemillero}
              />
            )}
          </div>
          {errores.path === "semilleros" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentNewProjectGroup">
            <p className="pLetter">Red de conocimiento sectorial*</p>
            <select
              className="contentNewProjectSelect"
              name="codigo_red_conocimiento"
              id="codigo_red_conocimiento"
              onChange={handleChangeInt}
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
            >
              <option value="">Selecciona un area de conocimiento OCDE</option>
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
            >
              <option value="">Selecciona la disciplina</option>
              {tables.filter_disciplina &&
                tables.filter_disciplina.map((disciplinaFilter) => (
                  <option
                    key={disciplinaFilter.codigo_disciplina}
                    value={disciplinaFilter.codigo_disciplina}
                  >
                    {disciplinaFilter.nombre_disciplina.slice(0, 40) + "..."}
                  </option>
                ))}
            </select>
          </div>
          <div className="contentNewSelectGroup">
            <p className="pLetter">
              ¿Cuales fueron los municipios benificiados con el proyecto?*
            </p>
            {tables.municipios && (
              <Select
                placeholder="Selecciona los municipios"
                closeMenuOnSelect={false}
                // defaultValue="Selecciona un semillero"
                isMulti
                name="municipios"
                options={tables.municipios}
                onChange={handleChangeMunicipios}
              />
            )}
          </div>
          {errores.path === "municipios" && (
            <p className="error">{errores.message}*</p>
          )}
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
            />
          </div>
          {errores.path === "video_proyecto" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentNewProjectGroup">
            <p className="pLetter">Subir Archivo de Acta de Cierre en PDF*</p>
            <div
              className="file-upload-wrapper"
              data-text={
                project.archivo_proyecto
                  ? project.archivo_proyecto
                  : "Selecciona el Acta en pdf"
              }
            >
              <input
                name="file"
                type="file"
                id="acta"
                className="file-upload-field"
                onChange={handleChangeFile}
              />
            </div>
          </div>
          {errores.path === "archivo_proyecto" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentNewProjectGroup">
            <p className="pLetter">
              Subir Archivo de informe de investigación en PDF*
            </p>
            <div
              className="file-upload-wrapper"
              data-text={
                project.informe_investigacion
                  ? project.informe_investigacion
                  : "Selecciona el Acta en pdf"
              }
            >
              <input
                name="file"
                type="file"
                id="informe"
                className="file-upload-field"
                onChange={handleChangeFile}
              />
            </div>
          </div>
          {errores.path === "informe_investigacion" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentNewProjectGroup">
            <p className="pLetter">Estado del proyecto*</p>
            <select
              className="contentNewProjectSelect"
              name="codigo_estado_proyecto"
              id="codigo_estado_proyecto"
              onChange={handleChangeInt}
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
            ></textarea>
          </div>
          <div className="contentDataBankCheckAll">
            <p className="pLetter">
              ¿El proyecto aporta a la política institucional para la atención a
              las personas con discapacidad?
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
            ></textarea>
          </div>
          <div className="contentDataBankCheckAll">
            <p className="pLetter">
              ¿Se compro equipos de computo o maquinaria?
            </p>
            <div className="contentRadioButtons">
              <p>Si</p>
              <label className="switch">
                <input
                  className="radio"
                  name="maquinaria"
                  id="maquinaria"
                  type="checkbox"
                  onClick={handleChecked}
                />
                <div className="slider round"></div>
              </label>
              <p>No</p>
            </div>
          </div>
          {checked && (
            <Maquinary
              maquinary={maquinary}
              setMaquinary={setMaquinary}
              errores={errores}
              setErrores={setErrores}
            />
          )}
          <div className="contentAutores" id="autores">
            <p className="pLetter">Agrega a los Responsables del Proyecto</p>
            <div className="contentContAutores">
              <button
                className="contentAutorButton"
                type="button"
                name="button_talent"
                onClick={handleOpen}
              >
                <Add className="addButton" />
              </button>
              <ModalProject
                open={open}
                handleClose={handleClose}
                setAutores={setAutores}
                autores={autores}
                tables={tables}
              />
            </div>
            {errores.path === "button_talent" && (
              <p className="errorTalentRubro">{errores.message}*</p>
            )}
            <div className="rowContentAutores">
              {autores.map((data, id) => (
                <div className="row" key={id}>
                  <div className="rowColumn">
                    <h3>Responsable</h3>
                    <p>{data.nombre_persona}</p>
                  </div>
                  <div className="rowColumn">
                    <h3>Rol en el proyecto</h3>
                    {data.codigo_rol_proyecto === 10001 && <p>Líder</p>}
                    {data.codigo_rol_proyecto === 10002 && <p>Coordinador</p>}
                    {data.codigo_rol_proyecto === 10003 && <p>Investigador</p>}
                    {data.codigo_rol_proyecto === 10004 && <p>Aprendíz</p>}
                    {data.codigo_rol_proyecto === 10005 && <p>Monitor</p>}
                  </div>
                  <div className="rowColumn rowDate">
                    <div className="columnDate">
                      <h4>Fecha de inicio del contrato</h4>
                      <p>{data.fecha_inicio_contrato}</p>
                    </div>
                    <div className="columnDate">
                      <h4>Fecha de final del contrato</h4>
                      <p>{data.fecha_fin_contrato}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="contentNewProjectButton" onClick={handleSubmit}>
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

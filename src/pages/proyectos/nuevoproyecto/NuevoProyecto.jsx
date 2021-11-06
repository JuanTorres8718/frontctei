import { useContext, useEffect, useState } from "react";
import "./nuevoProyecto.scss";
import ModalProject from "../../../components/modalproduct/ModalProduct";
import { Add } from "@material-ui/icons";
import Maquinary from "../../../components/maquinaryComponent/Maquinary";
import { TsContext } from "../../../context/tableSecundaryContext/TsContext";
import {
  getAllCentros,
  getAllRed,
  getAllSemilleros,
  getAllSubareas,
} from "../../../context/tableSecundaryContext/apiCalls";

export default function NuevoProyecto() {
  const [project, setProject] = useState({});
  const [autores, setAutores] = useState([]);
  const [maquinary, setMaquinary] = useState({});

  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const { tables, dispatch } = useContext(TsContext);

  useEffect(() => {
    getAllCentros(dispatch);
    getAllSemilleros(dispatch);
    getAllSubareas(dispatch);
    getAllRed(dispatch);
  }, [dispatch]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckedOpen = () => {
    setChecked(true);
  };

  const handleChekedClose = () => {
    setChecked(false);
    setMaquinary({});
  };

  const hoverInfoProject = (e) => {
    if (e.target.name === "industria" && e.target.value === "0") {
      document.getElementById("industria_4_0").classList.remove("displayText");
    } else if (e.target.name === "industria" && e.target.value === "1") {
      document.getElementById("industria_4_0").classList.add("displayText");
      setProject({ ...project, industria_4_0: "" });
      document.getElementById("text_industria_4_0").value = "";
    } else if (e.target.name === "economia" && e.target.value === "0") {
      document
        .getElementById("economia_naranja")
        .classList.remove("displayText");
    } else if (e.target.name === "economia" && e.target.value === "1") {
      document.getElementById("economia_naranja").classList.add("displayText");
      setProject({ ...project, economia_naranja: "" });
      document.getElementById("text_economia_naranja").value = "";
    } else if (e.target.name === "politica" && e.target.value === "0") {
      document
        .getElementById("politica_institucional")
        .classList.remove("displayText");
    } else if (e.target.name === "politica" && e.target.value === "1") {
      document
        .getElementById("politica_institucional")
        .classList.add("displayText");
      setProject({ ...project, politica_institucional: "" });
      document.getElementById("text_politica_institucional").value = "";
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setProject({ ...project, [e.target.name]: value });
  };

  const handleChangeInt = (e) => {
    const value = parseInt(e.target.value);
    setProject({ ...project, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      project: project,
      talent: autores,
      maquinary: maquinary,
    };
    console.log(data);
  };

  // console.log(tables);
  // console.log(project);

  return (
    <div className="newProject">
      <h1 className="newProjectTitle">Registrar Nuevo Proyecto</h1>
      <div className="contentNewProject">
        <form action="">
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
          <div className="contentNewProjectGroup">
            <p className="pLetter">Fecha de inicio del proyecto*</p>
            <input
              type="date"
              name="fecha_inicio_proyecto"
              className="contentNewProjectInput"
              onChange={handleChange}
            />
          </div>
          <div className="contentNewProjectGroup">
            <p className="pLetter">Fecha de cierre del proyecto*</p>
            <input
              type="date"
              name="fecha_cierre_proyecto"
              className="contentNewProjectInput"
              onChange={handleChange}
            />
          </div>
          <div className="contentNewProjectGroup">
            <p className="pLetter">Subir Archivo de Acta de Cierre*</p>
            <input
              type="file"
              name="archivo_proyecto"
              className="contentNewProjectInput"
            />
          </div>
          <div className="contentNewProjectGroup">
            <p className="pLetter">Centro de formación</p>
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
          <div className="contentNewProjectGroup">
            <p className="pLetter">Línea programática</p>
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
          <div className="contentNewProjectGroup">
            <p className="pLetter">Semillero</p>
            <select
              className="contentNewProjectSelect"
              name="codigo_semillero"
              id="codigo_semillero"
              onChange={handleChangeInt}
            >
              <option value="">Selecciona un semillero</option>
              {tables.semilleros &&
                tables.semilleros.map((semillero, id) => (
                  <option key={id} value={semillero.codigo_semillero}>
                    {semillero.nombre_semillero}
                  </option>
                ))}
            </select>
          </div>
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
              {tables.subareas &&
                project.codigo_area_ocde &&
                tables.subareas
                  .filter(
                    (subarea) =>
                      subarea.codigo_area_conocimiento ===
                      project.codigo_area_ocde
                  )
                  .map((subareaFilter) => (
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
            <p className="pLetter">Estado del proyecto</p>
            <select
              className="contentNewProjectSelect"
              name="estado_proyecto"
              id="estado_proyecto"
              onChange={handleChangeInt}
            >
              <option value="">Selecciona el estado del proyecto</option>
              <option value={1}>Sin iniciar</option>
              <option value={2}>Ejecución</option>
              <option value={3}>Terminado</option>
              <option value={4}>Suspendido</option>
            </select>
          </div>
          <div className="contentDataBankCheckAll">
            <p className="pLetter">
              ¿El proyecto pertenece a la industria 4.0?*
            </p>
            <div className="contentRadioButtons">
              <div className="contentRadio">
                <input
                  className="radio"
                  name="industria"
                  id="industria"
                  type="radio"
                  value="0"
                  onChange={hoverInfoProject}
                />
                <p>Si</p>
              </div>
              <div className="contentRadio">
                <input
                  className="radio"
                  name="industria"
                  id="industria"
                  type="radio"
                  value="1"
                  onChange={hoverInfoProject}
                />
                <p>No</p>
              </div>
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
              ¿El proyecto pertenece a la economía naranja?*
            </p>
            <div className="contentRadioButtons">
              <div className="contentRadio">
                <input
                  className="radio"
                  name="economia"
                  id="economia"
                  type="radio"
                  value="0"
                  onChange={hoverInfoProject}
                />
                <p>Si</p>
              </div>
              <div className="contentRadio">
                <input
                  className="radio"
                  name="economia"
                  id="economia"
                  type="radio"
                  value="1"
                  onChange={hoverInfoProject}
                />
                <p>No</p>
              </div>
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
              las personas con discapacidad?*
            </p>
            <div className="contentRadioButtons">
              <div className="contentRadio">
                <input
                  className="radio"
                  name="politica"
                  id="politica"
                  type="radio"
                  value="0"
                  onChange={hoverInfoProject}
                />
                <p>Si</p>
              </div>
              <div className="contentRadio">
                <input
                  className="radio"
                  name="politica"
                  id="politica"
                  type="radio"
                  value="1"
                  onChange={hoverInfoProject}
                />
                <p>No</p>
              </div>
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
              ¿Se compro equipos de computo o maquinaria?*
            </p>
            <div className="contentRadioButtons">
              <div className="contentRadio">
                <input
                  className="radio"
                  name="maquinaria"
                  id="maquinaria"
                  type="radio"
                  value="0"
                  onChange={handleCheckedOpen}
                />
                <p>Si</p>
              </div>
              <div className="contentRadio">
                <input
                  className="radio"
                  name="maquinaria"
                  id="maquinaria"
                  type="radio"
                  value="1"
                  onChange={handleChekedClose}
                />
                <p>No</p>
              </div>
            </div>
          </div>
          {checked && (
            <Maquinary maquinary={maquinary} setMaquinary={setMaquinary} />
          )}
          <div className="contentAutores" id="autores">
            <p className="pLetter">Agrega a los Responsables del Proyecto</p>
            <div className="contentContAutores">
              <button
                className="contentAutorButton"
                type="button"
                onClick={handleOpen}
              >
                <Add className="addButton" />
              </button>
              <ModalProject
                open={open}
                handleClose={handleClose}
                setAutores={setAutores}
                autores={autores}
              />
            </div>
            <div className="rowContentAutores">
              {autores.map((data, id) => (
                <div className="row" key={id}>
                  <div className="rowColumn">
                    <h3>Responsable</h3>
                    <p>{data.nombre_persona}</p>
                  </div>
                  <div className="rowColumn">
                    <h3>Tipo de contrato</h3>
                    <p>{data.tipo_contrato}</p>
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

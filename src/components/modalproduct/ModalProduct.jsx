import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import "./modalProduct.scss";
import { schemaTalent } from "../../context/proyectoContext/validateForm";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "60%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalProduct({
  open,
  handleClose,
  setAutores,
  autores,
  tables,
}) {
  const classes = useStyles();
  const [register, setRegister] = useState({
    nombre_persona: undefined,
    objeto_contrato: undefined,
    fecha_inicio_contrato: undefined,
    fecha_fin_contrato: undefined,
    tiempo_dedicacion_semanal: undefined,
    genero: undefined,
    valor_mensual_contrato: undefined,
    valor_total_contrato: undefined,
    sena_sennova: undefined,
    codigo_nivel: undefined,
    codigo_tipo_contrato: undefined,
    codigo_rol_sennova: undefined,
    codigo_rol_proyecto: undefined,
  });

  const [errores, setErrores] = useState({
    path: "",
    message: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "sennova") {
      setRegister({
        ...register,
        valor_total_contrato: 0,
        [e.target.name]: value,
      });
      document.getElementById("valor_total_contrato").value = 0;
      document.getElementById("valor_total_contrato").disabled = true;
      document.getElementById("valor_mensual_contrato").value = 0;
      document.getElementById("valor_mensual_contrato").disabled = true;
    } else {
      document.getElementById("valor_total_contrato").disabled = false;
      document.getElementById("valor_mensual_contrato").disabled = false;
      setRegister({ ...register, [e.target.name]: value });
    }
  };

  const handleChangeInt = (e) => {
    const value = parseInt(e.target.value);
    setRegister({ ...register, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    schemaTalent
      .validate(register)
      .then(() => {
        setAutores([...autores, register]);
        setRegister({
          nombre_persona: undefined,
          objeto_contrato: undefined,
          fecha_inicio_contrato: undefined,
          fecha_fin_contrato: undefined,
          tiempo_dedicacion_semanal: undefined,
          genero: undefined,
          valor_mensual_contrato: undefined,
          valor_total_contrato: undefined,
          sena_sennova: undefined,
          codigo_nivel: undefined,
          codigo_tipo_contrato: undefined,
          codigo_rol_sennova: undefined,
          codigo_rol_proyecto: undefined,
        });
        handleClose();
      })
      .catch((error) => {
        setErrores({
          path: error.path,
          message: error.errors[0],
        });
      });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <div className="createTalent">
            <h1 className="createTalentTitle">Agrega un responsable</h1>
            <div className="contentCreateTalent">
              <form action="">
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Nombre Completo*</p>
                  <input
                    type="text"
                    name="nombre_persona"
                    className="contentCreateTalentInput"
                    placeholder="Ingresar el nombre completo"
                    onChange={handleChange}
                  />
                </div>
                {errores.path === "nombre_persona" && (
                  <p className="error">{errores.message}*</p>
                )}
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Objeto del contrato</p>
                  <input
                    type="text"
                    name="objeto_contrato"
                    className="contentCreateTalentInput"
                    placeholder="Ingresar el objeto del contrato"
                    onChange={handleChange}
                  />
                </div>
                {errores.path === "objeto_contrato" && (
                  <p className="error">{errores.message}*</p>
                )}
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">SENA SENNOVA*</p>
                  <select
                    className="contentCreateTalentSelect"
                    name="sena_sennova"
                    id="sena_sennova"
                    onChange={handleChange}
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
                )}
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Valor mensual del contrato</p>
                  <input
                    type="number"
                    name="valor_mensual_contrato"
                    id="valor_mensual_contrato"
                    className="contentCreateTalentInput"
                    placeholder="Ingresar el valor mensual del contrato"
                    onChange={handleChangeInt}
                  />
                </div>
                {errores.path === "valor_mensual_contrato" && (
                  <p className="error">{errores.message}*</p>
                )}
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Valor Total del contrato*</p>
                  <input
                    type="number"
                    name="valor_total_contrato"
                    id="valor_total_contrato"
                    className="contentCreateTalentInput"
                    placeholder="Ingresar el valor total del contrato"
                    onChange={handleChangeInt}
                  />
                </div>
                {errores.path === "valor_total_contrato" && (
                  <p className="error">{errores.message}*</p>
                )}
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">G??nero*</p>
                  <select
                    className="contentCreateTalentSelect"
                    name="genero"
                    id="genero"
                    onChange={handleChange}
                  >
                    <option value="">Selecciona tu g??nero</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                {errores.path === "genero" && (
                  <p className="error">{errores.message}*</p>
                )}
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Tiempo de dedicaci??n semanal</p>
                  <input
                    type="text"
                    name="tiempo_dedicacion_semanal"
                    className="contentCreateTalentInput"
                    placeholder="Ingresar el tiempo dedicado semanal por la persona"
                    onChange={handleChange}
                  />
                </div>
                {errores.path === "tiempo_dedicacion_semanal" && (
                  <p className="error">{errores.message}*</p>
                )}
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Fecha de inicio del contrato*</p>
                  <input
                    type="date"
                    name="fecha_inicio_contrato"
                    className="contentCreateTalentInput"
                    onChange={handleChange}
                  />
                </div>
                {errores.path === "fecha_inicio_contrato" && (
                  <p className="error">{errores.message}*</p>
                )}
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Fecha de finalizaci??n del contrato*</p>
                  <input
                    type="date"
                    name="fecha_fin_contrato"
                    className="contentCreateTalentInput"
                    onChange={handleChange}
                  />
                </div>
                {errores.path === "fecha_fin_contrato" && (
                  <p className="error">{errores.message}*</p>
                )}
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Tipo de contrato*</p>
                  <select
                    className="contentCreateTalentSelect"
                    name="codigo_tipo_contrato"
                    id="codigo_tipo_contrato"
                    onChange={handleChangeInt}
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
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Nivel Academico</p>
                  <select
                    className="contentCreateTalentSelect"
                    name="codigo_nivel"
                    id="codigo_nivel"
                    onChange={handleChangeInt}
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
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Rol Sennova</p>
                  <select
                    className="contentCreateTalentSelect"
                    name="codigo_rol_sennova"
                    id="codigo_rol_sennova"
                    onChange={handleChangeInt}
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
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Rol en el proyecto*</p>
                  <select
                    className="contentCreateTalentSelect"
                    name="codigo_rol_proyecto"
                    id="codigo_rol_proyecto"
                    onChange={handleChangeInt}
                  >
                    <option value="">Selecciona el rol en el proyecto</option>
                    <option value={10001}>L??der</option>
                    <option value={10002}>Coordinador</option>
                    <option value={10003}>Investigador</option>
                    <option value={10004}>Aprend??z</option>
                    <option value={10005}>Monitor</option>
                  </select>
                </div>
                {errores.path === "codigo_rol_proyecto" && (
                  <p className="error">{errores.message}*</p>
                )}
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Estado del contrato*</p>
                  <select
                    className="contentCreateTalentSelect"
                    name="codigo_estado_contrato"
                    id="codigo_estado_contrato"
                    onChange={handleChangeInt}
                  >
                    <option value="">Seleccione el estado del contrato</option>
                    <option value={1}>Sin iniciar</option>
                    <option value={2}>Ejecuci??n</option>
                    <option value={3}>Terminado</option>
                    <option value={4}>Suspendido</option>
                  </select>
                </div>
                {errores.path === "codigo_estado_contrato" && (
                  <p className="error">{errores.message}*</p>
                )}
                <button
                  className="contentCreateTalentButton registro"
                  onClick={handleClose}
                >
                  Cancelar
                </button>
                <button
                  className="contentCreateTalentButton registro"
                  onClick={handleSubmit}
                >
                  Agregar Responsable
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

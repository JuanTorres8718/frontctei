import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import "./modalProduct.scss";
import { TsContext } from "../../context/tableSecundaryContext/TsContext";
import {
  getAllNivel,
  getAllRolSennova,
} from "../../context/tableSecundaryContext/apiCalls";

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
}) {
  const classes = useStyles();
  const [register, setRegister] = useState({});

  const { tables, dispatch } = useContext(TsContext);

  useEffect(() => {
    getAllNivel(dispatch);
    getAllRolSennova(dispatch);
  }, [dispatch]);

  const handleChange = (e) => {
    if (e.target.name === "sena_sennova" && e.target.value === "sennova") {
      setRegister({ ...register, valor_total_contrato: 0 });
      document.getElementById("valor_total_contrato").value = 0;
      document.getElementById("valor_total_contrato").disabled = true;
      document.getElementById("valor_mensual_contrato").value = 0;
      document.getElementById("valor_mensual_contrato").disabled = true;
    } else {
      document.getElementById("valor_total_contrato").disabled = false;
      document.getElementById("valor_mensual_contrato").disabled = false;

      const value = e.target.value;
      setRegister({ ...register, [e.target.name]: value });
    }
  };

  const handleChangeInt = (e) => {
    const value = parseInt(e.target.value);
    setRegister({ ...register, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAutores([...autores, register]);
    handleClose();
  };

  console.log(register);

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
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Tiempo de dedicación semanal</p>
                  <input
                    type="text"
                    name="tiempo_dedicacion_semanal"
                    className="contentCreateTalentInput"
                    placeholder="Ingresar el tiempo dedicado semanal por la persona"
                    onChange={handleChange}
                  />
                </div>
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Fecha de inicio del contrato*</p>
                  <input
                    type="date"
                    name="fecha_inicio_contrato"
                    className="contentCreateTalentInput"
                    onChange={handleChange}
                  />
                </div>
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Fecha de finalización del contrato*</p>
                  <input
                    type="date"
                    name="fecha_fin_contrato"
                    className="contentCreateTalentInput"
                    onChange={handleChange}
                  />
                </div>
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">SENA SENNOVA*</p>
                  <select
                    className="contentCreateTalentSelect"
                    name="sena_sennova"
                    id="sena_sennova"
                    onChange={handleChange}
                  >
                    <option value="sena">SENA</option>
                    <option value="sennova">SENNOVA</option>
                  </select>
                </div>
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Tipo de contrato*</p>
                  <select
                    className="contentCreateTalentSelect"
                    name="codigo_tipo_contrato"
                    id="codigo_tipo_contrato"
                    onChange={handleChangeInt}
                  >
                    <option value={2001}>Aprendiz</option>
                    <option value={2002}>Contratista</option>
                    <option value={2003}>Planta</option>
                    <option value={2004}>Temporal</option>
                    <option value={2005}>Provisional</option>
                  </select>
                </div>
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
                    <option value={10001}>Lider</option>
                    <option value={10002}>Coordinador</option>
                    <option value={10003}>Investigador</option>
                    <option value={10004}>Aprendiz</option>
                    <option value={10005}>Monitor</option>
                  </select>
                </div>
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Estado del contrato*</p>
                  <select
                    className="contentCreateTalentSelect"
                    name="codigo_estado_contrato"
                    id="codigo_estado_contrato"
                    onChange={handleChangeInt}
                  >
                    <option value={1}>Sin iniciar</option>
                    <option value={2}>Ejecución</option>
                    <option value={3}>Terminado</option>
                    <option value={4}>Suspendido</option>
                  </select>
                </div>
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

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import "./modalProduct.scss";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "70%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: "auto",
    maxWidth: 800,
  },
}));

export default function ModalProduct({
  open,
  handleClose,
  setAutores,
  autores,
}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [register, setRegister] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    setRegister({ ...register, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAutores([...autores, register]);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <div className="createTalent">
            <h1 className="createTalentTitle">Crear Talento Humano</h1>
            <div className="contentCreateTalent">
              <form action="">
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Nombre Completo</p>
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
                  <p className="pLetter">Valor Total del contrato</p>
                  <input
                    type="text"
                    name="valor_total_contrato"
                    className="contentCreateTalentInput"
                    placeholder="Ingresar el valor total del contrato"
                    onChange={handleChange}
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
                  <p className="pLetter">Fecha de inicio del contrato</p>
                  <input
                    type="date"
                    name="fecha_inicio_contrato"
                    className="contentCreateTalentInput"
                    onChange={handleChange}
                  />
                </div>
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Fecha de finalización del contrato</p>
                  <input
                    type="date"
                    name="fecha_fin_contrato"
                    className="contentCreateTalentInput"
                    onChange={handleChange}
                  />
                </div>
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Tipo de contrato</p>
                  <select
                    className="contentCreateTalentSelect"
                    name="tipo_contrato"
                    id="tipo_contrato"
                    onChange={handleChange}
                  >
                    <option value="planta">Planta</option>
                    <option value="Contratista">Contratista</option>
                    <option value="auxiliar">Auxiliar</option>
                  </select>
                </div>
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Nivel Academico</p>
                  <select
                    className="contentCreateTalentSelect"
                    name="nivel_academico"
                    id="nivel_academico"
                    onChange={handleChange}
                  >
                    <option value="ingeniero">Ingeniero</option>
                    <option value="tecnologo">Tecnologo</option>
                    <option value="tecnico">Tecnico</option>
                  </select>
                </div>
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Rol de proyectos</p>
                  <select
                    className="contentCreateTalentSelect"
                    name="rol_de_proyectos"
                    id="rol_de_proyectos"
                    onChange={handleChange}
                  >
                    <option value="lider">Lider</option>
                    <option value="investigador">Investigador</option>
                    <option value="desarrollador">Desarrollador</option>
                  </select>
                </div>
                <button
                  className="contentCreateTalentButton"
                  onClick={handleSubmit}
                >
                  Crear
                </button>
                <button
                  className="contentCreateTalentButton"
                  onClick={handleClose}
                >
                  Cancelar
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

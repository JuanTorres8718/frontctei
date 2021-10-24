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
                    name="nombre_completo"
                    className="contentCreateTalentInput"
                    placeholder="Ingresar el nombre completo"
                    onChange={handleChange}
                  />
                </div>
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Objeto del contrato</p>
                  <input
                    type="text"
                    name="correo_electronico"
                    className="contentCreateTalentInput"
                    placeholder="Ingresar el correo electrónico SENA"
                    onChange={handleChange}
                  />
                </div>
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Valor del contrato</p>
                  <input
                    type="text"
                    name="correo_respaldo"
                    className="contentCreateTalentInput"
                    placeholder="Ingresar un correo electrónico de respaldo"
                    onChange={handleChange}
                  />
                </div>
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Fecha de inicio del contrato</p>
                  <input
                    type="date"
                    name="fecha_fin_contrato"
                    className="contentCreateTalentInput"
                  />
                </div>
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Fecha de finalización del contrato</p>
                  <input
                    type="date"
                    name="fecha_fin_contrato"
                    className="contentCreateTalentInput"
                  />
                </div>
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Tipo de contrato</p>
                  <select
                    className="contentCreateTalentSelect"
                    name="centro_formacion"
                    id="centro_formacion"
                  >
                    <option value="antiquia">Planta</option>
                    <option value="antiquia">Contratista</option>
                    <option value="antiquia">Auxiliar</option>
                  </select>
                </div>
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Nivel Academico</p>
                  <select
                    className="contentCreateTalentSelect"
                    name="centro_formacion"
                    id="centro_formacion"
                  >
                    <option value="antiquia">Ingeniero</option>
                    <option value="antiquia">Tecnologo</option>
                    <option value="antiquia">Tecnico</option>
                  </select>
                </div>
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Rol de proyectos</p>
                  <select
                    className="contentCreateTalentSelect"
                    name="centro_formacion"
                    id="centro_formacion"
                  >
                    <option value="antiquia">Lider</option>
                    <option value="antiquia">Investigador</option>
                    <option value="antiquia">Desarrollador</option>
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

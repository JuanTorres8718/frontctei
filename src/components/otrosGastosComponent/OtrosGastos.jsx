import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import "./otrosGastos.scss";
import { schemaRubros } from "../../context/proyectoContext/validateForm";

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

export default function ModalOtrosGastos({
  open,
  handleClose,
  setRubros,
  rubros,
  tables,
}) {
  const classes = useStyles();
  const [register, setRegister] = useState({
    codigo_rubro: undefined,
    valor_rubro: undefined,
  });
  const [errores, setErrores] = useState({
    path: "",
    message: "",
  });

  const handleChangeInt = (e) => {
    const value = parseInt(e.target.value);
    setRegister({ ...register, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    schemaRubros
      .validate(register)
      .then(() => {
        setRubros([...rubros, register]);
        setRegister({
          codigo_rubro: undefined,
          valor_rubro: undefined,
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

  // console.log(register);

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
            <h1 className="createTalentTitle">Agrega un rubro</h1>
            <div className="contentCreateTalent">
              <form action="">
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Nombre del rubro*</p>
                  <select
                    className="contentCreateTalentSelect"
                    name="codigo_rubro"
                    id="codigo_rubro"
                    onChange={handleChangeInt}
                  >
                    <option value="">Selecciones el rubro</option>
                    {tables.rubros &&
                      tables.rubros.map((rubro, id) => (
                        <option key={id} value={rubro.codigo_rubro}>
                          {rubro.nombre_rubro}
                        </option>
                      ))}
                  </select>
                </div>
                {errores.path === "codigo_rubro" && (
                  <p className="error">{errores.message}*</p>
                )}
                <div className="contentCreateTalentGroup">
                  <p className="pLetter">Valor del rubro*</p>
                  <input
                    type="number"
                    name="valor_rubro"
                    className="contentCreateTalentInput"
                    placeholder="Ingresar el valor del rubro"
                    onChange={handleChangeInt}
                  />
                </div>
                {errores.path === "valor_rubro" && (
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
                  Agregar Rubro
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

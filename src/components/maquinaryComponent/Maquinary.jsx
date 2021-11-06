import React from "react";
import "./maquinary.scss";

export default function Maquinary({ maquinary, setMaquinary }) {
  const handleChange = (e) => {
    const value = e.target.value;
    setMaquinary({ ...maquinary, [e.target.name]: value });
  };

  const handleChangeInt = (e) => {
    const value = parseInt(e.target.value);
    setMaquinary({ ...maquinary, [e.target.name]: value });
  };

  return (
    <>
      <div className="contentNewProjectGroup TextArea">
        <p className="pLetter">Descripción del equipo:*</p>
        <textarea
          name="descripcion_equipo"
          id="text_descripcion_equipo"
          cols="10"
          rows="5"
          maxLength="250"
          placeholder="Escribe aquí la descripción del equipo..."
          style={{ fontSize: "16px" }}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="contentNewProjectGroup">
        <p className="pLetter">Valor total del equipo*</p>
        <input
          type="number"
          name="valor_equipo"
          className="contentNewProjectInput"
          placeholder="Ingresar el valor total del equipo"
          onChange={handleChangeInt}
        />
      </div>
      <div className="contentNewProjectGroup">
        <p className="pLetter">Fecha de compra del equipo*</p>
        <input
          type="date"
          name="fecha_comprar"
          className="contentNewProjectInput"
          onChange={handleChange}
        />
      </div>
      <div className="contentNewProjectGroup">
        <p className="pLetter">Tipo de equipo*</p>
        <select
          className="contentNewProjectSelect"
          name="codigo_tipo_equipo"
          id="codigo_tipo_equipo"
          onChange={handleChangeInt}
        >
          <option value={1}>Maquinaria</option>
          <option value={2}>Equipo de Computo</option>
        </select>
      </div>
    </>
  );
}

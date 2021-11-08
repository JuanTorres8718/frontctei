import React, { useEffect, useRef } from "react";
import "./maquinary.scss";

export default function Maquinary({
  maquinary,
  setMaquinary,
  errores,
  setErrores,
}) {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    setMaquinary({
      descripcion_equipo: undefined,
      valor_equipo: undefined,
      fecha_compra: undefined,
      codigo_tipo_equipo: undefined,
    });
    return () => {
      mounted.current = false;
    };
  }, [setMaquinary]);

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
      {errores.path === "descripcion_equipo" && (
        <p className="error">{errores.message}*</p>
      )}
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
      {errores.path === "valor_equipo" && (
        <p className="error">{errores.message}*</p>
      )}
      <div className="contentNewProjectGroup">
        <p className="pLetter">Fecha de compra del equipo*</p>
        <input
          type="date"
          name="fecha_compra"
          className="contentNewProjectInput"
          onChange={handleChange}
        />
      </div>
      {errores.path === "fecha_compra" && (
        <p className="error">{errores.message}*</p>
      )}
      <div className="contentNewProjectGroup">
        <p className="pLetter">Tipo de equipo*</p>
        <select
          className="contentNewProjectSelect"
          name="codigo_tipo_equipo"
          id="codigo_tipo_equipo"
          onChange={handleChangeInt}
        >
          <option value="">Seleccione el tipo de equipo</option>
          <option value={1}>Maquinaria</option>
          <option value={2}>Equipo de Computo</option>
        </select>
      </div>
      {errores.path === "codigo_tipo_equipo" && (
        <p className="error">{errores.message}*</p>
      )}
    </>
  );
}

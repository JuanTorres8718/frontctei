import "./editarTalentoHumano.scss";

export default function EditarTalentoHumano() {
  return (
    <div className="editTalent">
      <h1 className="editTalentTitle">Editar Talento Humano</h1>
      <div className="contentEditTalent">
        <form action="">
          <div className="contentEditTalentGroup">
            <p className="pLetter">Nombre Completo</p>
            <input
              type="text"
              name="nombre_completo"
              className="contentEditTalentInput"
              placeholder="Ingresar el nombre completo"
            />
          </div>
          <div className="contentEditTalentGroup">
            <p className="pLetter">Objeto del contrato</p>
            <input
              type="text"
              name="correo_electronico"
              className="contentEditTalentInput"
              placeholder="Ingresar el correo electrónico SENA"
            />
            </div>
            <div className="contentEditTalentGroup">
            <p className="pLetter">Valor del contrato</p>
            <input
              type="text"
              name="correo_respaldo"
              className="contentEditTalentInput"
              placeholder="Ingresar un correo electrónico de respaldo"
            />
          </div>
          <div className="contentEditTalentGroup">
            <p className="pLetter">Fecha de inicio del contrato</p>
            <input
              type="date"
              name="fecha_fin_contrato"
              className="contentEditTalentInput"
            />
          </div>
          <div className="contentEditTalentGroup">
            <p className="pLetter">Fecha de finalización del contrato</p>
            <input
              type="date"
              name="fecha_fin_contrato"
              className="contentEditTalentInput"
            />
          </div>
          <div className="contentEditTalentGroup">
            <p className="pLetter">Tipo de contrato</p>
            <select
              className="contentEditTalentSelect"
              name="centro_formacion"
              id="centro_formacion"
            >
              <option value="antiquia">
                Planta
              </option>
              <option value="antiquia">
                Contratista
              </option>
              <option value="antiquia">
                Auxiliar
              </option>
            </select>
          </div>
          <button className="contentEditTalentButton">Editar</button>
        </form>
      </div>
    </div>
  );
}

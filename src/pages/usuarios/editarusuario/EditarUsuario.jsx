import "./editarUsuario.scss";

export default function EditarUsuario() {
  return (
    <div className="editUser">
      <h1 className="editUserTitle">Editar Usuario</h1>
      <div className="contentEditUser">
        <form action="">
          <div className="contentEditUserGroup">
            <p className="pLetter">Nombre Completo</p>
            <input
              type="text"
              name="nombre_completo"
              className="contentEditUserInput"
              placeholder="Ingresar el nombre completo"
            />
          </div>
          <div className="contentEditUserGroup">
            <p className="pLetter">Correo electrónico SENA</p>
            <input
              type="text"
              name="correo_electronico"
              className="contentEditUserInput"
              placeholder="Ingresar el correo electrónico SENA"
            />
          </div>
          <div className="contentEditUserGroup">
            <p className="pLetter">Correo electrónico de respaldo</p>
            <input
              type="text"
              name="correo_respaldo"
              className="contentEditUserInput"
              placeholder="Ingresar un correo electrónico de respaldo"
            />
          </div>
          <div className="contentEditUserGroup">
            <p className="pLetter">Centro de formación</p>
            <select
              className="contentEditUserSelect"
              name="centro_formacion"
              id="centro_formacion"
            >
              <option value="antiquia">
                Centro de servicios y gestión empresarial
              </option>
              <option value="antiquia">
                Centro de los Recursos Naturales Renov...
              </option>
              <option value="antiquia">
                Centro de Diseño y Manufactura del Cuero
              </option>
              <option value="antiquia">Centro de Comercio</option>
              <option value="antiquia">
                Centro de la Innovación. La Agroindustri...o
              </option>
              <option value="antiquia">Centro de Servicios de Salud</option>
            </select>
          </div>
          <div className="contentEditUserGroup">
            <p className="pLetter">Fecha de finalización del contrato</p>
            <input
              type="date"
              name="fecha_fin_contrato"
              className="contentEditUserInput"
            />
          </div>
          <div className="contentEditUserGroup">
            <p className="pLetter">Rol</p>
            <select className="contentEditUserSelect" name="rol" id="rol">
              <option value="antiquia">Subdirector</option>
              <option value="antiquia">Dinamizador</option>
              <option value="antiquia">Auxiliar</option>
            </select>
          </div>
          <button className="contentEditUserButton">Editar</button>
        </form>
      </div>
      <div className="containerFooter">
        <small>Derechos de autor ©2021 SENNOVA</small>
      </div>
    </div>
  );
}

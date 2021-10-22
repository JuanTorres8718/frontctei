import "./nuevoUsuario.scss";

export default function NuevoUsuario() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Registrar Usuario</h1>
      <div className="contentNewUser">
        <form action="">
          <div className="contentNewUserGroup">
            <p className="pLetter">Nombre Completo</p>
            <input
              type="text"
              name="nombre_completo"
              className="contentNewUserInput"
              placeholder="Ingresar el nombre completo"
            />
          </div>
          <div className="contentNewUserGroup">
            <p className="pLetter">Correo electrónico SENA</p>
            <input
              type="text"
              name="correo_electronico"
              className="contentNewUserInput"
              placeholder="Ingresar el correo electrónico SENA"
            />
          </div>
          <div className="contentNewUserGroup">
            <p className="pLetter">Correo electrónico de respaldo</p>
            <input
              type="text"
              name="correo_respaldo"
              className="contentNewUserInput"
              placeholder="Ingresar un correo electrónico de respaldo"
            />
          </div>
          <div className="contentNewUserGroup">
            <p className="pLetter">Centro de formación</p>
            <select
              className="contentNewUserSelect"
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
          <div className="contentNewUserGroup">
            <p className="pLetter">Fecha de finalización del contrato</p>
            <input
              type="date"
              name="fecha_fin_contrato"
              className="contentNewUserInput"
            />
          </div>
          <div className="contentNewUserGroup">
            <p className="pLetter">Rol</p>
            <select className="contentNewUserSelect" name="rol" id="rol">
              <option value="antiquia">Subdirector</option>
              <option value="antiquia">Dinamizador</option>
              <option value="antiquia">Auxiliar</option>
            </select>
          </div>
          <button className="contentNewUserButton">Registrar</button>
        </form>
      </div>
    </div>
  );
}

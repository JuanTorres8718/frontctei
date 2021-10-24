import { useState } from "react";
import "./nuevoProyecto.scss";
import ModalProject from "../../../components/modalproduct/ModalProduct";
import { Add } from "@material-ui/icons";

export default function NuevoProyecto() {
  const [autores, setAutores] = useState([]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="newProject">
      <h1 className="newProjectTitle">Registrar Nuevo Proyecto</h1>
      <div className="contentNewProject">
        <form action="">
          <div className="contentNewProjectGroup">
            <p className="pLetter">Codigo del Proyecto</p>
            <input
              type="text"
              name="codigo_Proyecto"
              className="contentNewProjectInput"
              placeholder="Ingresar el codigo del Projecto"
            />
          </div>
          <div className="contentNewProjectGroup">
            <p className="pLetter">Nombre del Proyecto</p>
            <input
              type="text"
              name="nombre_Proyecto"
              className="contentNewProjectInput"
              placeholder="Ingresar el nombre del Projecto"
            />
          </div>
          <div className="contentNewProjectGroup">
            <p className="pLetter">Valor del proyecto</p>
            <input
              type="text"
              name="valor_proyecto"
              className="contentNewProjectInput"
              placeholder="Ingresar el valor del proyecto"
            />
          </div>
          <div className="contentNewProjectGroup">
            <p className="pLetter">Fecha de inicio del proyecto</p>
            <input
              type="date"
              name="fecha_inicio_proyecto"
              className="contentNewProjectInput"
            />
          </div>
          <div className="contentNewProjectGroup">
            <p className="pLetter">Fecha de cierre del proyecto</p>
            <input
              type="date"
              name="fecha_cierre_proyecto"
              className="contentNewProjectInput"
            />
          </div>
          <div className="contentNewProjectGroup">
            <p className="pLetter">Subir Archivo de Acta de Cierre</p>
            <input
              type="file"
              name="archivo_proyecto"
              className="contentNewProjectInput"
            />
          </div>
          <div className="contentNewProjectGroup">
            <p className="pLetter">Centro de formación</p>
            <select
              className="contentNewProjectSelect"
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
          <div className="contentNewProjectGroup">
            <p className="pLetter">Rubro</p>
            <select className="contentNewProjectSelect" name="rubro" id="rubro">
              <option value="antiquia">Rubro 1</option>
              <option value="antiquia">Rubro 2</option>
              <option value="antiquia">Rubro 3</option>
            </select>
          </div>
          <div className="contentNewProjectGroup">
            <p className="pLetter">Semillero</p>
            <select
              className="contentNewProjectSelect"
              name="semillero"
              id="semillero"
            >
              <option value="antiquia">Semillero 1</option>
              <option value="antiquia">Semillero 2</option>
              <option value="antiquia">Semillero 3</option>
            </select>
          </div>
          <div className="contentNewProjectGroup">
            <p className="pLetter">Estado del proyecto</p>
            <select
              className="contentNewProjectSelect"
              name="estado_proyecto"
              id="estado_proyecto"
            >
              <option value="antiquia">Cerrado</option>
              <option value="antiquia">Pendiente</option>
              <option value="antiquia">Iniciar</option>
            </select>
          </div>
          <div className="contentAutores" id="autores">
            <p className="pLetter">Agrega a los Autores del Projecto</p>
            <div className="contentContAutores">
              <button
                className="contentAutorButton"
                type="button"
                onClick={handleOpen}
              >
                <Add className="addButton" />
              </button>
              <ModalProject
                open={open}
                handleClose={handleClose}
                setAutores={setAutores}
                autores={autores}
              />
            </div>
            <div className="rowContentAutores">
              {autores.map((data, id) => (
                <div className="row" key={id}>
                  <div className="rowColumn">
                    <h3>Autor</h3>
                    <p>{data.nombre_persona}</p>
                  </div>
                  <div className="rowColumn">
                    <h3>Tipo de contrato</h3>
                    <p>{data.tipo_contrato}</p>
                  </div>
                  <div className="rowColumn rowDate">
                    <div className="columnDate">
                      <h4>Fecha de inicio del contrato</h4>
                      <p>{data.fecha_inicio_contrato}</p>
                    </div>
                    <div className="columnDate">
                      <h4>Fecha de final del contrato</h4>
                      <p>{data.fecha_fin_contrato}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="contentNewProjectButton">Registrar</button>
        </form>
      </div>
    </div>
  );
}

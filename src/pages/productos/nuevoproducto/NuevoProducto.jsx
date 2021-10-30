import { useState } from "react";
import "./nuevoProducto.scss";
import ModalProduct from "../../../components/modalproduct/ModalProduct";
import { Add } from "@material-ui/icons";

export default function NuevoProducto() {
  const [autores, setAutores] = useState([]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hoverInfoProduct = (e) => {
    if (e.target.value === "0") {
      document.getElementById("proyect").classList.remove("displayOptions");
      document.getElementById("autores").classList.add("displayOptions");
      setAutores([]);
      // options.classList.remove("displayOptions");
    } else if (e.target.value === "1") {
      document.getElementById("autores").classList.remove("displayOptions");
      document.getElementById("proyect").classList.add("displayOptions");
      document.getElementById("proyecto_asociar").value = "";
      // options.classList.add("displayOptions");
    }
  };

  return (
    <div className="newProduct">
      <h1 className="newProductTitle">Registrar Nuevo Producto</h1>
      <div className="contentNewProduct">
        <form action="">
          <div className="contentNewProductGroup">
            <p className="pLetter">Codigo del Producto</p>
            <input
              type="text"
              name="codigo_producto"
              className="contentNewProductInput"
              placeholder="Ingresar el codigo del producto"
            />
          </div>
          <div className="contentNewProductGroup">
            <p className="pLetter">Nombre del producto</p>
            <input
              type="text"
              name="nombre_producto"
              className="contentNewProductInput"
              placeholder="Ingresar el nombre del producto"
            />
          </div>
          <div className="contentNewProductGroup TextArea">
            <p className="pLetter">Descripción del producto</p>
            <textarea
              name="descripcion_producto"
              id=""
              cols="10"
              rows="5"
              maxLength="250"
              placeholder="Escribe aquí la descripción del producto..."
              style={{ fontSize: "16px" }}
            ></textarea>
          </div>
          <div className="contentNewProductGroup">
            <p className="pLetter">Tipologia del producto</p>
            <select
              className="contentNewProductSelect"
              name="tipologia_productos"
              id="tipologia_productos"
            >
              <option value="antiquia">
                Seleccione la tipologia del producto
              </option>
              <option value="antiquia">
                Seleccione la tipologia del producto
              </option>
              <option value="antiquia">
                Seleccione la tipologia del producto
              </option>
              <option value="antiquia">
                Seleccione la tipologia del producto
              </option>
              <option value="antiquia">
                Seleccione la tipologia del producto
              </option>
              <option value="antiquia">
                Seleccione la tipologia del producto
              </option>
            </select>
          </div>
          <div className="contentDataBankCheckAll">
            <p className="pLetter">
              ¿El producto esta asociado algún proyecto?
            </p>
            <div className="contentRadioButtons">
              <div className="contentRadio">
                <input
                  className="radio"
                  name="asociado"
                  id="asocido"
                  type="radio"
                  value="0"
                  onChange={hoverInfoProduct}
                />
                <p>Si</p>
              </div>
              <div className="contentRadio">
                <input
                  className="radio"
                  name="asociado"
                  id="asocido"
                  type="radio"
                  value="1"
                  onChange={hoverInfoProduct}
                />
                <p>No</p>
              </div>
            </div>
          </div>
          <div className="contentNewProductGroup displayOptions" id="proyect">
            <p className="pLetter">Proyecto asociado</p>
            <select
              className="contentNewProductSelect"
              name="centro_formacion"
              id="proyecto_asociar"
            >
              <option value="">Seleccione el proyecto a asociar</option>
              <option value="2">Seleccione el proyecto a asociar 2</option>
              <option value="3">Seleccione el proyecto a asociar 3</option>
              <option value="4">Seleccione el proyecto a asociar 4</option>
              <option value="5">Seleccione el proyecto a asociar 5</option>
              <option value="6">Seleccione el proyecto a asociar 6</option>
            </select>
          </div>
          <div className="contentAutores displayOptions" id="autores">
            <p className="pLetter">Agrega a los Responsables del producto</p>
            <div className="contentContAutores">
              <button
                className="contentAutorButton"
                type="button"
                onClick={handleOpen}
              >
                <Add className="addButton" />
              </button>
              <ModalProduct
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
                    <h3>Responsable</h3>
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
          <button className="contentNewProductButton">Registrar</button>
        </form>
      </div>
      <div className="containerFooter">
        <small>Derechos de autor ©2021 SENNOVA</small>
      </div>
    </div>
  );
}

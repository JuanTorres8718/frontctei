import { useState } from "react";
import "./nuevoProducto.scss";
import ModalProduct from "../../../components/modalproduct/ModalProduct";
import { Add } from "@material-ui/icons";

export default function NuevoProducto() {
  const [autores, setAutores] = useState([]);
  const [product, setProduct] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hoverInfoProduct = (e) => {
    if (e.target.name === "asociado" && e.target.value === "0") {
      document.getElementById("proyect").classList.remove("displayOptions");
      document.getElementById("autores").classList.add("displayOptions");
      setAutores([]);
      // options.classList.remove("displayOptions");
    } else if (e.target.name === "asociado" && e.target.value === "1") {
      document.getElementById("autores").classList.remove("displayOptions");
      document.getElementById("proyect").classList.add("displayOptions");
      document.getElementById("codigo_proyecto").value = "";
      // options.classList.add("displayOptions");
    } else if (e.target.name === "intangible" && e.target.value === "0") {
      document
        .getElementById("tipo_intangible")
        .classList.remove("displayOptions");
    } else if (e.target.name === "intangible" && e.target.value === "1") {
      document
        .getElementById("tipo_intangible")
        .classList.add("displayOptions");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      product: product,
      talent: autores,
    };
    console.log(data);
  };

  return (
    <div className="newProduct">
      <h1 className="newProductTitle">Registrar Nuevo Producto</h1>
      <div className="contentNewProduct">
        <form action="">
          <div className="contentNewProductGroup">
            <p className="pLetter">Codigo del Producto</p>
            <input
              type="number"
              name="codigo_productos"
              className="contentNewProductInput"
              placeholder="Ingresar el codigo del producto"
              onChange={handleChange}
            />
          </div>
          <div className="contentNewProductGroup">
            <p className="pLetter">Nombre del producto</p>
            <input
              type="text"
              name="nombre_productos"
              className="contentNewProductInput"
              placeholder="Ingresar el nombre del producto"
              onChange={handleChange}
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
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="contentNewProductGroup">
            <p className="pLetter">Fecha de registro de producto</p>
            <input
              type="date"
              name="fecha_registro_producto"
              className="contentNewProductInput"
              onChange={handleChange}
            />
          </div>
          <div className="contentNewProductGroup">
            <p className="pLetter">Link de acceso del producto terminado</p>
            <input
              type="text"
              name="link_producto"
              className="contentNewProductInput"
              placeholder="Ingresar el nombre del producto"
              onChange={handleChange}
            />
          </div>
          <div className="contentDataBankCheckAll">
            <p className="pLetter">
              ¿Tiene el aval del autor para divulgar el producto final de
              investigación?
            </p>
            <div className="contentRadioButtons">
              <div className="contentRadio">
                <input
                  className="radio"
                  name="aval_autor"
                  id="aval_autor"
                  type="radio"
                  value="0"
                  onChange={handleChange}
                />
                <p>Si</p>
              </div>
              <div className="contentRadio">
                <input
                  className="radio"
                  name="aval_autor"
                  id="aval_autor"
                  type="radio"
                  value="1"
                  onChange={handleChange}
                />
                <p>No</p>
              </div>
            </div>
          </div>
          <div className="contentDataBankCheckAll">
            <p className="pLetter">¿El producto es un intangible?</p>
            <div className="contentRadioButtons">
              <div className="contentRadio">
                <input
                  className="radio"
                  name="intangible"
                  id="intangible"
                  type="radio"
                  value="0"
                  onChange={hoverInfoProduct}
                />
                <p>Si</p>
              </div>
              <div className="contentRadio">
                <input
                  className="radio"
                  name="intangible"
                  id="intangible"
                  type="radio"
                  value="1"
                  onChange={hoverInfoProduct}
                />
                <p>No</p>
              </div>
            </div>
          </div>
          <div
            className="contentNewProductGroup displayOptions TextArea"
            id="tipo_intangible"
          >
            <p className="pLetterQuestion">
              Describe porque el producto es intangible
            </p>
            <textarea
              name="tipo_intangible"
              id="text_tipo_intangible"
              cols="10"
              rows="5"
              maxLength="250"
              placeholder="Escribe aquí porque el producto es intangible..."
              style={{ fontSize: "16px" }}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="contentNewProductGroup">
            <p className="pLetter">Tipologia del producto</p>
            <select
              className="contentNewProductSelect"
              name="codigo_tipologia"
              id="codigo_tipologia"
              onChange={handleChange}
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
          <div className="contentNewProductGroup">
            <p className="pLetter">Semillero</p>
            <select
              className="contentNewProductSelect"
              name="codigo_semillero"
              id="codigo_semillero"
              onChange={handleChange}
            >
              <option value="antiquia">Semillero 1</option>
              <option value="antiquia">Semillero 2</option>
              <option value="antiquia">Semillero 3</option>
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
              name="codigo_proyecto"
              id="codigo_proyecto"
              onChange={handleChange}
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
          <button className="contentNewProductButton" onClick={handleSubmit}>
            Registrar
          </button>
        </form>
      </div>
      <div className="containerFooter">
        <small>Derechos de autor ©2021 SENNOVA</small>
      </div>
    </div>
  );
}

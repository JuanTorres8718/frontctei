import { useContext, useEffect, useState } from "react";
import "./nuevoProducto.scss";
import ModalProduct from "../../../components/modalproduct/ModalProduct";
import { Add } from "@material-ui/icons";
import { schemaProduct } from "../../../context/productoContext/validateForm";
import { TsContext } from "../../../context/tableSecundaryContext/TsContext";
import {
  getAllNivel,
  getAllProjects,
  getAllRolSennova,
  getAllSemilleros,
  getAllTipologia,
} from "../../../context/tableSecundaryContext/apiCalls";
import { ProductoContext } from "../../../context/productoContext/ProductoContext";
import { createProduct } from "../../../context/productoContext/apiCalls";
import { useHistory } from "react-router-dom";

export default function NuevoProducto() {
  const [autores, setAutores] = useState([]);
  const [product, setProduct] = useState({
    codigo_productos: undefined,
    nombre_productos: undefined,
    descripcion_producto: undefined,
    fecha_registro_producto: undefined,
    link_producto: undefined,
    aval_autor: undefined,
    tipo_intangible: undefined,
    intangible: undefined,
    codigo_tipologia: undefined,
    codigo_semillero: undefined,
    codigo_proyecto: undefined,
  });
  const [open, setOpen] = useState(false);
  const [errores, setErrores] = useState({
    path: "",
    message: "",
  });

  let history = useHistory();

  const { tables, dispatch } = useContext(TsContext);
  const { dispatch: dispatchProducto } = useContext(ProductoContext);

  useEffect(() => {
    getAllSemilleros(dispatch);
    getAllTipologia(dispatch);
    getAllProjects(dispatch);
    getAllRolSennova(dispatch);
    getAllNivel(dispatch);
  }, [dispatch]);

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
      const value = parseInt(e.target.value);
      setProduct({ ...product, [e.target.name]: value });
    } else if (e.target.name === "asociado" && e.target.value === "1") {
      document.getElementById("autores").classList.remove("displayOptions");
      document.getElementById("proyect").classList.add("displayOptions");
      document.getElementById("codigo_proyecto").value = "";
      const value = parseInt(e.target.value);
      setProduct({
        ...product,
        [e.target.name]: value,
        codigo_proyecto: undefined,
      });
    } else if (e.target.name === "tipo_intangible") {
      const value = parseInt(e.target.value);
      setProduct({ ...product, [e.target.name]: value });
      document.getElementById("intangible").classList.remove("displayOptions");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const handleChangeInt = (e) => {
    const value = parseInt(e.target.value);
    setProduct({ ...product, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      product: product,
      talent: autores,
    };
    schemaProduct
      .validate(data.product)
      .then(() => {
        createProduct(data, dispatchProducto);
        history.push("/products");
      })
      .catch((error) => {
        setErrores({
          path: error.path,
          message: error.errors,
        });
      });
  };

  return (
    <div className="newProduct">
      <h1 className="newProductTitle">Registrar Nuevo Producto</h1>
      <div className="contentNewProduct">
        <form action="">
          <div className="contentNewProductGroup">
            <p className="pLetter">Codigo del Producto*</p>
            <input
              type="number"
              name="codigo_productos"
              className="contentNewProductInput"
              placeholder="Ingresar el codigo del producto"
              onChange={handleChangeInt}
            />
          </div>
          {errores.path === "codigo_productos" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentNewProductGroup">
            <p className="pLetter">Nombre del producto*</p>
            <input
              type="text"
              name="nombre_productos"
              className="contentNewProductInput"
              placeholder="Ingresar el nombre del producto"
              onChange={handleChange}
            />
          </div>
          {errores.path === "nombre_productos" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentNewProductGroup TextArea">
            <p className="pLetter">Descripción del producto*</p>
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
          {errores.path === "descripcion_producto" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentNewProductGroup">
            <p className="pLetter">Fecha de registro de producto*</p>
            <input
              type="date"
              name="fecha_registro_producto"
              className="contentNewProductInput"
              onChange={handleChange}
            />
          </div>
          {errores.path === "fecha_registro_producto" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentNewProductGroup">
            <p className="pLetter">Link de acceso del producto terminado*</p>
            <input
              type="text"
              name="link_producto"
              className="contentNewProductInput"
              placeholder="Ingresar el nombre del producto"
              onChange={handleChange}
            />
          </div>
          {errores.path === "link_producto" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentDataBankCheckAll">
            <p className="pLetter">
              ¿Tiene el aval del autor para divulgar el producto final de
              investigación?*
            </p>
            <div className="contentRadioButtons">
              <div className="contentRadio">
                <input
                  className="radio"
                  name="aval_autor"
                  id="aval_autor"
                  type="radio"
                  value="0"
                  onChange={handleChangeInt}
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
                  onChange={handleChangeInt}
                />
                <p>No</p>
              </div>
            </div>
          </div>
          {errores.path === "aval_autor" && (
            <p className="errorTalentRubro">{errores.message}*</p>
          )}
          <div className="contentDataBankCheckAll">
            <p className="pLetter">¿El producto es un intangible?*</p>
            <div className="contentRadioButtons">
              <div className="contentRadio">
                <input
                  className="radio"
                  name="tipo_intangible"
                  id="tipo_intangible"
                  type="radio"
                  value="0"
                  onChange={hoverInfoProduct}
                />
                <p>Si</p>
              </div>
              <div className="contentRadio">
                <input
                  className="radio"
                  name="tipo_intangible"
                  id="tipo_intangible"
                  type="radio"
                  value="1"
                  onChange={hoverInfoProduct}
                />
                <p>No</p>
              </div>
            </div>
          </div>
          {errores.path === "tipo_intangible" && (
            <p className="errorTalentRubro">{errores.message}*</p>
          )}
          <div
            className="contentNewProductGroup displayOptions TextArea"
            id="intangible"
          >
            <p className="pLetterQuestion">Describe porque:</p>
            <textarea
              name="intangible"
              id="text_tipo_intangible"
              cols="10"
              rows="5"
              maxLength="250"
              placeholder="Escribe aquí porque a tú respuesta..."
              style={{ fontSize: "16px" }}
              onChange={handleChange}
            ></textarea>
          </div>
          {errores.path === "intangible" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentNewProductGroup">
            <p className="pLetter">Tipologia del producto*</p>
            <select
              className="contentNewProductSelect"
              name="codigo_tipologia"
              id="codigo_tipologia"
              onChange={handleChangeInt}
            >
              <option value="option-semillero">
                Seleccione la tipologia del producto
              </option>
              {tables.tipologias &&
                tables.tipologias.map((tipologia, id) => (
                  <option
                    className="option-semillero"
                    key={id}
                    value={tipologia.codigo_tipologia}
                  >
                    {tipologia.nombre_tipologia.slice(0, 50)}...
                  </option>
                ))}
            </select>
          </div>
          {errores.path === "codigo_tipologia" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentNewProductGroup">
            <p className="pLetter">Semillero*</p>
            <select
              className="contentNewProductSelect"
              name="codigo_semillero"
              id="codigo_semillero"
              onChange={handleChangeInt}
            >
              <option value="option_semillero">Selecciona un semillero</option>
              {tables.semilleros &&
                tables.semilleros.map((semillero, id) => (
                  <option
                    className="option_semillero"
                    key={id}
                    value={semillero.codigo_semillero}
                  >
                    {semillero.nombre_semillero.slice(0, 50)}...
                  </option>
                ))}
            </select>
          </div>
          {errores.path === "codigo_semillero" && (
            <p className="error">{errores.message}*</p>
          )}
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
          {errores.path === "asociado" && (
            <p className="error">{errores.message}*</p>
          )}
          <div className="contentNewProductGroup displayOptions" id="proyect">
            <p className="pLetter">Proyecto asociado</p>
            <select
              className="contentNewProductSelect"
              name="codigo_proyecto"
              id="codigo_proyecto"
              onChange={handleChange}
            >
              <option value="">Seleccione el proyecto a asociar</option>
              {tables.proyectos &&
                tables.proyectos.map((proyecto, id) => (
                  <option key={id} value={proyecto.codigo_proyecto}>
                    {proyecto.nombre_proyecto}
                  </option>
                ))}
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
                tables={tables}
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

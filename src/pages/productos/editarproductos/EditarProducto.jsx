import { useContext, useEffect, useState } from "react";
import "./editarProducto.scss";
import { schemaProduct } from "../../../context/productoContext/validateForm";
import { TsContext } from "../../../context/tableSecundaryContext/TsContext";
import { getAllTipologia } from "../../../context/tableSecundaryContext/apiCalls";
import { ProductoContext } from "../../../context/productoContext/ProductoContext";
import { createProduct } from "../../../context/productoContext/apiCalls";
import { useHistory, useLocation, Redirect } from "react-router-dom";

export default function EditarProducto() {
  const { product } = useLocation();
  const [editProduct, setEditProduct] = useState(product);

  const [errores, setErrores] = useState({
    path: "",
    message: "",
  });

  let history = useHistory();

  const { tables, dispatch } = useContext(TsContext);
  const { dispatch: dispatchProducto } = useContext(ProductoContext);

  useEffect(() => {
    getAllTipologia(dispatch);
  }, [dispatch]);

  const hoverInfoProduct = (e) => {
    if (e.target.name === "tipo_intangible") {
      if (editProduct.tipo_intangible === 1) {
        setEditProduct({ ...editProduct, [e.target.name]: 0 });
      } else {
        setEditProduct({ ...editProduct, [e.target.name]: 1 });
      }
    } else if (e.target.name === "aval_autor") {
      if (editProduct.aval_autor === 1) {
        setEditProduct({ ...editProduct, [e.target.name]: 0 });
      } else {
        setEditProduct({ ...editProduct, [e.target.name]: 1 });
      }
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEditProduct({ ...editProduct, [e.target.name]: value });
  };

  const handleChangeInt = (e) => {
    const value = parseInt(e.target.value);
    setEditProduct({ ...editProduct, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    schemaProduct
      .validate(editProduct)
      .then(() => {
        createProduct(editProduct, dispatchProducto);
        history.push("/products");
      })
      .catch((error) => {
        setErrores({
          path: error.path,
          message: error.errors,
        });
      });
  };

  console.log(editProduct);

  return (
    <>
      {editProduct ? (
        <div className="editProduct">
          <h1 className="editProductTitle">Editar Producto</h1>
          <div className="contentEditProduct">
            <form action="">
              <div className="contentEditProductGroup">
                <p className="pLetter">Nombre del producto*</p>
                <input
                  type="text"
                  name="nombre_productos"
                  className="contentEditProductInput"
                  placeholder="Ingresar el nombre del producto"
                  onChange={handleChange}
                  value={editProduct.nombre_productos}
                />
              </div>
              {errores.path === "nombre_productos" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentEditProductGroup TextArea">
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
                  value={editProduct.descripcion_producto}
                ></textarea>
              </div>
              {errores.path === "descripcion_producto" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentEditProductGroup">
                <p className="pLetter">Fecha de registro de producto*</p>
                <input
                  type="date"
                  name="fecha_registro_producto"
                  className="contentEditProductInput"
                  onChange={handleChange}
                  value={editProduct.fecha_registro_producto.split("T")[0]}
                />
              </div>
              {errores.path === "fecha_registro_producto" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentEditProductGroup">
                <p className="pLetter">
                  Link de acceso del producto terminado*
                </p>
                <input
                  type="text"
                  name="link_producto"
                  className="contentEditProductInput"
                  placeholder="Ingresar el nombre del producto"
                  onChange={handleChange}
                  value={editProduct.link_producto}
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
                  <p>Si</p>
                  <label className="switch">
                    <input
                      className="radio"
                      name="aval_autor"
                      id="aval_autor"
                      type="checkbox"
                      onClick={hoverInfoProduct}
                      checked={editProduct.aval_autor}
                    />
                    <div className="slider round"></div>
                  </label>
                  <p>No</p>
                </div>
              </div>
              {errores.path === "aval_autor" && (
                <p className="errorTalentRubro">{errores.message}*</p>
              )}
              <div className="contentDataBankCheckAll">
                <p className="pLetter">¿El producto es un intangible?*</p>
                <div className="contentRadioButtons">
                  <p>Si</p>
                  <label className="switch">
                    <input
                      className="radio"
                      name="tipo_intangible"
                      id="tipo_intangible"
                      type="checkbox"
                      onClick={hoverInfoProduct}
                      checked={editProduct.tipo_intangible}
                    />
                    <div className="slider round"></div>
                  </label>
                  <p>No</p>
                </div>
              </div>
              {errores.path === "tipo_intangible" && (
                <p className="errorTalentRubro">{errores.message}*</p>
              )}
              <div className="contentEditProductGroup TextArea" id="intangible">
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
                  value={editProduct.intangible}
                ></textarea>
              </div>
              {errores.path === "intangible" && (
                <p className="error">{errores.message}*</p>
              )}
              <div className="contentEditProductGroup">
                <p className="pLetter">Tipologia del producto*</p>
                <select
                  className="contentEditProductSelect"
                  name="codigo_tipologia"
                  id="codigo_tipologia"
                  onChange={handleChangeInt}
                  value={editProduct.codigo_tipologia}
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
              <button
                className="contentEditProductButton"
                onClick={handleSubmit}
              >
                Editar
              </button>
            </form>
          </div>
          <div className="containerFooter">
            <small>Derechos de autor ©2021 SENNOVA</small>
          </div>
        </div>
      ) : (
        <Redirect to="/products" />
      )}
    </>
  );
}

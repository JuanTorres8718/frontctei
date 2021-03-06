import axios from "axios";
import Swal from "sweetalert2";
import {
  createProductFailure,
  createProductStart,
  createProductSuccess,
  getProductsFailure,
  getProductsSuccess,
  getProductstStart,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} from "./ProductoActions";

//Obtener todos los productos
export const getProducts = async (dispatch) => {
  dispatch(getProductstStart());
  try {
    const res = await axios.get(process.env.REACT_APP_API_URL + "/products");
    dispatch(getProductsSuccess(res.data));
  } catch (err) {
    dispatch(getProductsFailure(err));
  }
};

//crear proyecto
export const createProduct = async (data, dispatch) => {
  dispatch(createProductStart());
  try {
    const res = await axios.post(
      process.env.REACT_APP_API_URL + "/products",
      data
    );
    dispatch(createProductSuccess(res.data));
    Swal.fire({
      title: "Guardado!",
      text: "Proyecto guardado correctamente",
      icon: "success",
      confirmButtonText: "Cerrar",
    });
  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: "Sucedio algún problema con la base de datos",
      icon: "error",
      confirmButtonText: "Cerrar",
    });
    dispatch(createProductFailure());
  }
};

//editar proyecto
export const updateProduct = async (product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await axios.put(
      process.env.REACT_APP_API_URL + "/product/" + product.codigo_productos,
      product
    );
    dispatch(updateProductSuccess(res.data));
    Swal.fire({
      title: "Actualizado!",
      text: "Producto actualizado correctamente",
      icon: "success",
      confirmButtonText: "Cerrar",
    });
  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: "Sucedio algún problema con la base de datos",
      icon: "error",
      confirmButtonText: "Cerrar",
    });
    dispatch(updateProductFailure());
  }
};

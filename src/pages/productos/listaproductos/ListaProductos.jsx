import "./listaProductos.scss";
// import { useState } from 'react'
import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProductoContext } from "../../../context/productoContext/ProductoContext";
import { getProducts } from "../../../context/productoContext/apiCalls";
import { AuthContext } from "../../../context/authContext/AuthContext";

export default function ListaProductos() {
  const { products, dispatch } = useContext(ProductoContext);
  const { user } = useContext(AuthContext);
  //   const handleDelete = (id) => {
  //     setData(data.filter((item) => item.id !== id));
  //   };

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 110,
    },
    {
      field: "nombre_productos",
      headerName: "Nombre del Producto",
      width: 190,
    },
    {
      field: "descripcion_producto",
      headerName: "Descripción del Producto",
      width: 200,
    },
    {
      field: "fecha_registro",
      headerName: "Fecha de registro del producto",
      width: 200,
    },
    {
      field: "link_producto",
      headerName: "link donde se encuentra el producto",
      width: 200,
    },
    {
      field: "aval_autor",
      headerName: "Aval del autor",
      width: 200,
    },
  ];

  if (user.codigo_rol === 3 || user.codigo_rol === 1) {
    columns.push({
      field: "action",
      headerName: "Acciones",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{
                pathname: "/product/" + params.row.id,
                product: params.row,
              }}
            >
              <button className="productListEdit">Editar</button>
            </Link>
            {/* <DeleteOutline
              className="productListDelete"
              //   onClick={() => handleDelete(params.row.id)}
            /> */}
          </>
        );
      },
    });
  }

  products.forEach((product) => {
    product["id"] = product.codigo_productos;
    let dateFecha = product.fecha_registro_producto.split("T");
    product["fecha_registro"] = dateFecha[0];
  });

  return (
    <div className="productList" style={{ height: "75vh", width: "100%" }}>
      <div className="productListContainer">
        <h1 className="productTitle">Productos Registrados</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Registrar</button>
        </Link>
      </div>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={9}
        disableSelectionOnClick
      />
      <div className="containerFooter">
        <small>Derechos de autor ©2021 SENNOVA</small>
      </div>
    </div>
  );
}

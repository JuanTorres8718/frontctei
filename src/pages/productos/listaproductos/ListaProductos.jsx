import "./listaProductos.scss";
// import { useState } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../../dummyData";
import { Link } from "react-router-dom";

export default function ListaProductos() {
  const data = productRows;

  //   const handleDelete = (id) => {
  //     setData(data.filter((item) => item.id !== id));
  //   };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 110,
    },
    {
      field: "nombre_producto",
      headerName: "Nombre del Producto",
      width: 190,
    },
    {
      field: "tipologia_producto",
      headerName: "Descripción del Producto",
      width: 190,
    },
    {
      field: "fecha_registro",
      headerName: "Fecha de registro del producto",
      width: 130,
    },
    {
      field: "semillero",
      headerName: "Semillero",
      width: 130,
    },
    {
      field: "talento_humano",
      headerName: "Talento Humano",
      width: 160,
    },
    {
      field: "action",
      headerName: "Acciones",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Editar</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              //   onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productList" style={{ height: "75vh", width: "100%" }}>
      <div className="productListContainer">
        <h1 className="productTitle">Productos Registrados</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Registrar</button>
        </Link>
      </div>
      <DataGrid
        rows={data}
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

import "./listaProyecto.scss";
// import { useState } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { proyectRows } from "../../../dummyData";
import { Link } from "react-router-dom";

export default function ListaProyecto() {
  const data = proyectRows;

  //   const handleDelete = (id) => {
  //     setData(data.filter((item) => item.id !== id));
  //   };

  const columns = [
    { field: "id", headerName: "ID", width: 110 },
    {
      field: "nombre_proyecto",
      headerName: "Nombre Proyecto",
      width: 190,
    },
    {
      field: "valor_proyecto",
      headerName: "Valor del proyecto",
      width: 160,
    },
    {
      field: "valor_servicios_personales",
      headerName: "Valor de servicios personales",
      width: 160,
    },
    {
      field: "valor_compra_equipos",
      headerName: "Valor de compra de equipos",
      width: 150,
    },
    {
      field: "valor_software",
      headerName: "Valor del software",
      width: 130,
    },
    {
      field: "fecha_cierre_proyecto",
      headerName: "Fecha de cierre del proyecto",
      width: 130,
    },
    {
      field: "estado_proyecto",
      headerName: "Valor del software",
      width: 130,
    },
    {
      field: "action",
      headerName: "Acciones",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/project/" + params.row.id}>
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
        <h1 className="productTitle">Proyectos Registrados</h1>
        <Link to="/newProject">
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

import "./listaTalentoHumano.scss";
// import { useState } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { talentRows } from "../../../dummyData";
import { Link } from "react-router-dom";

export default function ListaTalentoHumano() {
  const data = talentRows;

  //   const handleDelete = (id) => {
  //     setData(data.filter((item) => item.id !== id));
  //   };

  const columns = [
    { field: "id", headerName: "ID", width: 110 },
    {
      field: "nombre_persona",
      headerName: "Nombre Completo",
      width: 190,
    },
    {
      field: "nivel_academico",
      headerName: "Nivel academico",
      width: 190,
    },
    {
      field: "tipo_contrato",
      headerName: "Tipo de contrato",
      width: 150,
    },
    {
      field: "estado_contrato",
      headerName: "Estado del contrato",
      width: 150,
    },
    {
      field: "action",
      headerName: "Acciones",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/talent/" + params.row.id}>
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
        <h1 className="productTitle">Talento Humano Registrado</h1>
        {/* <Link to="/newProduct">
          <button className="productAddButton">Registrar</button>
        </Link> */}
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

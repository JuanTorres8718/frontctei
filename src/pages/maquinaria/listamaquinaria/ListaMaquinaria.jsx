import "./listaMaquinaria.scss";
// import { useState } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { maquinaryRows } from "../../../dummyData";
import { Link } from "react-router-dom";

export default function ListaMaquinaria() {
  const data = maquinaryRows;

  //   const handleDelete = (id) => {
  //     setData(data.filter((item) => item.id !== id));
  //   };

  const columns = [
    { field: "id", headerName: "ID", width: 110 },
    {
      field: "descripcion_equipo",
      headerName: "Descripcion del equipo",
      width: 190,
    },
    {
      field: "valor_equipo",
      headerName: "Valor Total del Equipo",
      width: 190,
    },
    {
      field: "fecha_compra",
      headerName: "Fecha de Compra",
      width: 170,
    },
    {
      field: "tipo_de_equipo",
      headerName: "Tipo de equipo",
      width: 130,
    },
    {
      field: "proyecto_principal",
      headerName: "Proyecto Asociado",
      width: 130,
    },
    {
      field: "action",
      headerName: "Acciones",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="maquinaryListEdit">Editar</button>
            </Link>
            <DeleteOutline
              className="maquinaryListDelete"
              //   onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="maquinaryList" style={{ height: "75vh", width: "100%" }}>
      <div className="maquinaryListContainer">
        <h1 className="maquinaryTitle">Maquinarias y Equipos Registrados</h1>
        {/* <Link to="/newMaquinary">
          <button className="maquinaryAddButton">Registrar</button>
        </Link> */}
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        disableSelectionOnClick
      />
    </div>
  );
}

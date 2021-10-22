import "./listaUsuarios.scss";
// import { useState } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../../dummyData";
import { Link } from "react-router-dom";

export default function ListaUsuarios() {
  const data = userRows;

  //   const handleDelete = (id) => {
  //     setData(data.filter((item) => item.id !== id));
  //   };

  const columns = [
    { field: "id", headerName: "ID", width: 110 },
    {
      field: "nombre_completo",
      headerName: "Nombre Completo",
      width: 190,
    },
    {
      field: "correo_electronico",
      headerName: "Correo Electrónico",
      width: 190,
    },
    {
      field: "centro_formacion",
      headerName: "Centro de Formación",
      width: 170,
    },
    {
      field: "rol",
      headerName: "Rol",
      width: 130,
    },
    {
      field: "estado",
      headerName: "Estado",
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
              <button className="userListEdit">Editar</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              //   onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList" style={{ height: "75vh", width: "100%" }}>
      <div className="userListContainer">
        <h1 className="userTitle">Usuarios Registrados</h1>
        <Link to="/newUser">
          <button className="userAddButton">Registrar</button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={9}
        disableSelectionOnClick
      />
    </div>
  );
}

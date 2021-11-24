import "./listaMaquinaria.scss";
// import { useState } from 'react'
import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MaquinaryContext } from "../../../context/maquinariaContext/MaquinaryContext";
import { getMaquinarys } from "../../../context/maquinariaContext/apiCalls";
import { AuthContext } from "../../../context/authContext/AuthContext";

export default function ListaMaquinaria() {
  const { maquinarys, dispatch } = useContext(MaquinaryContext);
  const { user } = useContext(AuthContext);

  //   const handleDelete = (id) => {
  //     setData(data.filter((item) => item.id !== id));
  //   };
  useEffect(() => {
    getMaquinarys(dispatch);
  }, [dispatch]);

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
      field: "fecha",
      headerName: "Fecha de Compra",
      width: 190,
    },
    {
      field: "tipo_de_equipo",
      headerName: "Tipo de equipo",
      width: 170,
    },
    {
      field: "asociado",
      headerName: "Proyecto/Producto Asociado",
      width: 170,
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
                pathname: "/editmachinery/" + params.row.id,
                maquinary: params.row,
              }}
            >
              <button className="maquinaryListEdit">Editar</button>
            </Link>
            {/* <DeleteOutline
              className="maquinaryListDelete"
              //   onClick={() => handleDelete(params.row.id)}
            /> */}
          </>
        );
      },
    });
  }

  maquinarys.forEach((maquinary) => {
    maquinary["id"] = maquinary.codigo_equipo;
    let dateCompra = maquinary.fecha_compra.split("T");
    maquinary["fecha"] = dateCompra[0];
    let tipoEquipo = "";
    if (maquinary.codigo_tipo_equipo === 1) {
      tipoEquipo = "Maquinaria";
    } else {
      tipoEquipo = "Equipo de Computo";
    }
    maquinary["tipo_de_equipo"] = tipoEquipo;
    if (maquinary.codigo_proyecto) {
      maquinary["asociado"] = `${maquinary.codigo_proyecto}-Proyecto`;
    } else {
      maquinary["asociado"] = `${maquinary.codigo_producto}-Producto`;
    }
  });

  return (
    <div className="maquinaryList" style={{ height: "75vh", width: "100%" }}>
      <div className="maquinaryListContainer">
        <h1 className="maquinaryTitle">Maquinarias y Equipos Registrados</h1>
        {/* <Link to="/newMaquinary">
          <button className="maquinaryAddButton">Registrar</button>
        </Link> */}
      </div>
      <DataGrid
        rows={maquinarys}
        columns={columns}
        pageSize={8}
        disableSelectionOnClick
      />
      <div className="containerFooter">
        <small>Derechos de autor ©2021 SENNOVA</small>
      </div>
    </div>
  );
}

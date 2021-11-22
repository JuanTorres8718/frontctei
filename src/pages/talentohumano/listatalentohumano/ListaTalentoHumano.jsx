import "./listaTalentoHumano.scss";
// import { useState } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { getTalents } from "../../../context/talentoContext/apiCalls";
import { TalentContext } from "../../../context/talentoContext/TalentContext";
import { AuthContext } from "../../../context/authContext/AuthContext";

export default function ListaTalentoHumano() {
  const { talents, dispatch } = useContext(TalentContext);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    getTalents(dispatch);
  }, [dispatch]);

  //   const handleDelete = (id) => {
  //     setData(data.filter((item) => item.id !== id));
  //   };

  const columns = [
    { field: "id", headerName: "ID", width: 110 },
    {
      field: "nombre_persona",
      headerName: "Nombre Completo",
      width: 220,
    },
    {
      field: "fecha_inicio",
      headerName: "Fecha de inicio del contrato",
      width: 250,
    },
    {
      field: "fecha_fin",
      headerName: "Fecha final del contrato",
      width: 250,
    },
    {
      field: "valor_total_contrato",
      headerName: "Valor total del contrato",
      width: 250,
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
    });
  }

  talents.forEach((talent) => {
    talent["id"] = talent.codigo_talento;
    let dateInicio = talent.fecha_fin_contrato.split("T");
    talent["fecha_inicio"] = dateInicio[0];
    let dateFin = talent.fecha_fin_contrato.split("T");
    talent["fecha_fin"] = dateFin[0];
  });

  return (
    <div className="productList" style={{ height: "75vh", width: "100%" }}>
      <div className="productListContainer">
        <h1 className="productTitle">Talento Humano Registrado</h1>
        {/* <Link to="/newProduct">
          <button className="productAddButton">Registrar</button>
        </Link> */}
      </div>
      <DataGrid
        rows={talents}
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

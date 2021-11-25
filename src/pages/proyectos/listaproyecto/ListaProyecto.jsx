import "./listaProyecto.scss";
// import { useState } from 'react'
import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProyectoContext } from "../../../context/proyectoContext/proyectoContext";
import { getProjects } from "../../../context/proyectoContext/apiCalls";
import { AuthContext } from "../../../context/authContext/AuthContext";

export default function ListaProyecto() {
  const { projects, dispatch } = useContext(ProyectoContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getProjects(dispatch);
  }, [dispatch]);

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
      width: 200,
    },
    {
      field: "valor_servicios_personales",
      headerName: "Valor de servicios personales",
      width: 200,
    },
    {
      field: "valor_compra_equipos",
      headerName: "Valor de compra de equipos",
      width: 200,
    },
    {
      field: "valor_software",
      headerName: "Valor del software",
      width: 200,
    },
    {
      field: "fecha_cierre",
      headerName: "Fecha de cierre del proyecto",
      width: 200,
    },
    {
      field: "estado",
      headerName: "Estado del proyecto",
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
                pathname: "/project/" + params.row.codigo_proyecto,
                project: params.row,
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

  projects.forEach((project) => {
    project["id"] = project.codigo_proyecto;
    let dateFecha = project.fecha_cierre_proyecto.split("T");
    project["fecha_cierre"] = dateFecha[0];
    if (project.codigo_estado_proyecto === 1) {
      project["estado"] = "Sin iniciar";
    } else if (project.codigo_estado_proyecto === 2) {
      project["estado"] = "Ejecución";
    } else if (project.codigo_estado_proyecto === 3) {
      project["estado"] = "Terminado";
    } else if (project.codigo_estado_proyecto === 4) {
      project["estado"] = "Suspendido";
    }
  });

  return (
    <div className="productList" style={{ height: "75vh", width: "100%" }}>
      <div className="productListContainer">
        <h1 className="productTitle">Proyectos Registrados</h1>
        <Link to="/newProject">
          <button className="productAddButton">Registrar</button>
        </Link>
      </div>
      <DataGrid
        rows={projects}
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

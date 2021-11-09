import "./listaUsuarios.scss";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { UsuarioContext } from "../../../context/usuarioContext/UsuarioContext";
import { getUsers } from "../../../context/usuarioContext/apiCalls";

export default function ListaUsuarios() {
  const { users, dispatch } = useContext(UsuarioContext);
  const mounted = useRef(false);

  //   const handleDelete = (id) => {
  //     setData(data.filter((item) => item.id !== id));
  //   };
  useEffect(() => {
    mounted.current = true;
    getUsers(dispatch);
    return () => {
      mounted.current = false;
    };
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", width: 110 },
    {
      field: "nombre_usuario",
      headerName: "Nombre Completo",
      width: 190,
    },
    {
      field: "correo_electronico",
      headerName: "Correo Electrónico",
      width: 190,
    },
    {
      field: "correo_respaldo",
      headerName: "Centro de Formación",
      width: 170,
    },
    {
      field: "rolUser",
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

  users.forEach((user) => {
    user["id"] = user.codigo_usuario;
    if (user.codigo_rol === 1) {
      user["rolUser"] = "Administrador";
    } else if (user.codigo_rol === 2) {
      user["rolUser"] = "Director";
    } else if (user.codigo_rol === 3) {
      user["rolUser"] = "Dinamizador";
    } else if (user.codigo_rol === 4) {
      user["rolUser"] = "Auxiliar";
    }
    if (user.codigo_estado === 1) {
      user["estado"] = "Activo";
    } else {
      user["estado"] = "Deshabilitado";
    }
  });

  return (
    <div className="userList" style={{ height: "75vh", width: "100%" }}>
      <div className="userListContainer">
        <h1 className="userTitle">Usuarios Registrados</h1>
        <Link to="/newUser">
          <button className="userAddButton">Registrar</button>
        </Link>
      </div>
      <DataGrid
        rows={users}
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

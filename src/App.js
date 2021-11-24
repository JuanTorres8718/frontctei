import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./app.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import BancodeDatos from "./pages/bancodedatos/BancodeDatos";
import Home from "./pages/home/Home";
import ListaMaquinaria from "./pages/maquinaria/listamaquinaria/ListaMaquinaria";
import ListaUsuarios from "./pages/usuarios/listausuarios/ListaUsuarios";
import Login from "./pages/login/Login";
import NuevoUsuario from "./pages/usuarios/nuevousuario/NuevoUsuario";
import EditarUsuario from "./pages/usuarios/editarusuario/EditarUsuario";
import ListaTalentoHumano from "./pages/talentohumano/listatalentohumano/ListaTalentoHumano";
import EditarTalentoHumano from "./pages/talentohumano/editartalentohumano/EditarTalentoHumano";
import ListaProductos from "./pages/productos/listaproductos/ListaProductos";
import NuevoProducto from "./pages/productos/nuevoproducto/NuevoProducto";
import EditarProducto from "./pages/productos/editarproductos/EditarProducto";
import ChartFinanciero from "./components/charts/ChartFinanciero";
import ChartTalentoHumano from "./components/charts/ChartTalentHumano";
import ChartMaquinaria from "./components/charts/ChartMaquinaria";
import ChartProductos from "./components/charts/ChartProductos";
import ListaProyecto from "./pages/proyectos/listaproyecto/ListaProyecto";
import NuevoProyecto from "./pages/proyectos/nuevoproyecto/NuevoProyecto";
import EditarProyecto from "./pages/proyectos/editarproyecto/EditarProyecto";
import ChartFormacion from "./components/charts/ChartFormacion";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import EditMaquinary from "./pages/maquinaria/editarmaquinaria/EditMaquinary";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {user ? (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              {user.codigo_rol !== 4 ? (
                <>
                  <Route path="/users">
                    <ListaUsuarios />
                  </Route>
                  {user.codigo_rol !== 2 ? (
                    <>
                      <Route path="/newUser">
                        <NuevoUsuario />
                      </Route>
                      {user.codigo_rol === 3 || user.codigo_rol === 1 ? (
                        <Route path="/user/:id">
                          <EditarUsuario />
                        </Route>
                      ) : (
                        <Redirect to="/" />
                      )}
                    </>
                  ) : (
                    <Redirect to="/" />
                  )}
                </>
              ) : (
                <Redirect to="/" />
              )}
              <Route path="/projects">
                <ListaProyecto />
              </Route>
              {user.codigo_rol !== 2 ? (
                <>
                  <Route path="/newProject">
                    <NuevoProyecto />
                  </Route>
                  {user.codigo_rol === 3 || user.codigo_rol === 1 ? (
                    <Route path="/project/:id">
                      <EditarProyecto />
                    </Route>
                  ) : (
                    <Redirect to="/" />
                  )}
                </>
              ) : (
                <Redirect to="/" />
              )}
              <Route path="/talents">
                <ListaTalentoHumano />
              </Route>
              {user.codigo_rol === 3 || user.codigo_rol === 1 ? (
                <Route path="/talent/:id">
                  <EditarTalentoHumano />
                </Route>
              ) : (
                <Redirect to="/" />
              )}
              <Route path="/products">
                <ListaProductos />
              </Route>
              {user.codigo_rol !== 2 ? (
                <>
                  <Route path="/newProduct">
                    <NuevoProducto />
                  </Route>
                  {user.codigo_rol === 3 || user.codigo_rol === 1 ? (
                    <Route path="/product/:id">
                      <EditarProducto />
                    </Route>
                  ) : (
                    <Redirect to="/" />
                  )}
                </>
              ) : (
                <Redirect to="/" />
              )}
              <Route path="/machinery">
                <ListaMaquinaria />
              </Route>
              {user.codigo_rol === 3 || user.codigo_rol === 1 ? (
                <Route path="/editmachinery/:id">
                  <EditMaquinary />
                </Route>
              ) : (
                <Redirect to="/" />
              )}
              <Route path="/chartfinanciero">
                <ChartFinanciero />
              </Route>
              <Route path="/charttalentohumano">
                <ChartTalentoHumano />
              </Route>
              <Route path="/chartmaquinaria">
                <ChartMaquinaria />
              </Route>
              <Route path="/chartproductos">
                <ChartProductos />
              </Route>
              <Route path="/chartformacion">
                <ChartFormacion />
              </Route>
              {user.codigo_rol !== 4 ? (
                <Route path="/databank">
                  <BancodeDatos />
                </Route>
              ) : (
                <Redirect to="/" />
              )}
            </div>
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </Router>
  );
}

export default App;

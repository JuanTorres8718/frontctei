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
import { TsContextProvider } from "./context/tableSecundaryContext/TsContext";
import { MaquinaryContextProvider } from "./context/maquinariaContext/MaquinaryContext";
import { TalentContextProvider } from "./context/talentoContext/TalentContext";
import { ProductoContextProvider } from "./context/productoContext/ProductoContext";
import { ProyectoContextProvider } from "./context/proyectoContext/proyectoContext";
import { UsuarioContextProvider } from "./context/usuarioContext/UsuarioContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {user ? (
          <>
            <UsuarioContextProvider>
              <ProyectoContextProvider>
                <ProductoContextProvider>
                  <TalentContextProvider>
                    <MaquinaryContextProvider>
                      <TsContextProvider>
                        <Topbar />
                        <div className="container">
                          <Sidebar />
                          <Route exact path="/">
                            <Home />
                          </Route>
                          <Route path="/users">
                            <ListaUsuarios />
                          </Route>
                          <Route path="/newUser">
                            <NuevoUsuario />
                          </Route>
                          <Route path="/user/:id">
                            <EditarUsuario />
                          </Route>
                          <Route path="/projects">
                            <ListaProyecto />
                          </Route>
                          <Route path="/newProject">
                            <NuevoProyecto />
                          </Route>
                          <Route path="/project/:id">
                            <EditarProyecto />
                          </Route>
                          <Route path="/talents">
                            <ListaTalentoHumano />
                          </Route>
                          <Route path="/talent/:id">
                            <EditarTalentoHumano />
                          </Route>
                          <Route path="/products">
                            <ListaProductos />
                          </Route>
                          <Route path="/newProduct">
                            <NuevoProducto />
                          </Route>
                          <Route path="/product/:id">
                            <EditarProducto />
                          </Route>
                          <Route path="/machinery">
                            <ListaMaquinaria />
                          </Route>
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
                          <Route path="/databank">
                            <BancodeDatos />
                          </Route>
                        </div>
                      </TsContextProvider>
                    </MaquinaryContextProvider>
                  </TalentContextProvider>
                </ProductoContextProvider>
              </ProyectoContextProvider>
            </UsuarioContextProvider>
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </Router>
  );
}

export default App;

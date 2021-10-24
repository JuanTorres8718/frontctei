import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
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
          <Route path="/proyects">
            <Home />
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
          <Route path="/databank">
            <BancodeDatos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

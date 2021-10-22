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
          <Route path="/machinery">
            <ListaMaquinaria />
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

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import BancodeDatos from "./pages/bancodedatos/BancodeDatos";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

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
          <Route path="/">
            <Home />
          </Route>
          <Route path="/users">
            <Home />
          </Route>
          <Route path="/proyects">
            <Home />
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

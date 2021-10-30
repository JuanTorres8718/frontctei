import { Link } from "react-router-dom";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="containerHome">
        <h1>Bienvenido al sistema CTeI</h1>
        <div className="containerHomeWatchProject">
          <p>
            Si deseas ver los proyectos registrados, pulsa clic en el siguiente
            botón
          </p>
          <Link to="/projects">
            <button className="contentHomeButton">Ver Proyectos</button>
          </Link>
        </div>
        <div className="containerHomeRegisters">
          <h3>Acontinuación encontrará atajo a las siguientes opciones</h3>
          <div className="containerHomeSelect">
            <Link to="/newUser">
              <div className="containerHomeOption">
                <img src="" alt="" />
                <p>Registrar Usuario</p>
              </div>
            </Link>
            <Link to="/newProject">
              <div className="containerHomeOption">
                <img src="" alt="" />
                <p>Registrar Proyecto</p>
              </div>
            </Link>
            <Link to="/newProduct">
              <div className="containerHomeOption">
                <img src="" alt="" />
                <p>Registrar Producto</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="containerFooter">
        <small>Derechos de autor ©2021 SENNOVA</small>
      </div>
    </div>
  );
}

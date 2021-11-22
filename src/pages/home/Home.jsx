import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import imgUser from "../../images/imagen-2.png";
import imgProduct from "../../images/imagen-3.jpg";
import imgProyect from "../../images/imagen_1.jpg";

import "./home.scss";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div className="home">
      <div className="containerHome">
        <h1>Bienvenido al sistema CTeI</h1>
        {user.codigo_rol !== 2 ? (
          <>
            <div className="containerHomeWatchProject">
              <p>
                Si deseas ver los proyectos registrados, pulsa clic en el
                siguiente botón
              </p>
              <Link to="/projects">
                <button className="contentHomeButton">Ver Proyectos</button>
              </Link>
            </div>
            <div className="containerHomeRegisters">
              <h3>Acontinuación encontrará atajo a las siguientes opciones</h3>
              <div className="containerHomeSelect">
                {user.codigo_rol !== 4 && (
                  <div className="containerHomeOption">
                    <Link to="/newUser">
                      <img src={imgUser} alt="registro-usuario" />
                    </Link>
                    <p>Registrar Usuario</p>
                  </div>
                )}
                <div className="containerHomeOption">
                  <Link to="/newProject">
                    <img src={imgProyect} alt="proyecto" />
                  </Link>
                  <p>Registrar Proyecto</p>
                </div>
                <div className="containerHomeOption">
                  <Link to="/newProduct">
                    <img src={imgProduct} alt="Producto" />
                  </Link>
                  <p>Registrar Producto</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="containerHomeRegisters" style={{ marginTop: "15px" }}>
            <h3>Acontinuación encontrará atajo a las siguientes opciones</h3>
            <div className="containerHomeSelect">
              <div className="containerHomeOption">
                <Link to="/users">
                  <img src={imgUser} alt="registro-usuario" />
                </Link>
                <p>Visualizar Usuario</p>
              </div>
              <div className="containerHomeOption">
                <Link to="/projects">
                  <img src={imgProyect} alt="proyecto" />
                </Link>
                <p>Visualizar Proyecto</p>
              </div>
              <div className="containerHomeOption">
                <Link to="/products">
                  <img src={imgProduct} alt="Producto" />
                </Link>
                <p>Visualizar Producto</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="containerFooter">
        <small>Derechos de autor ©2021 SENNOVA</small>
      </div>
    </div>
  );
}

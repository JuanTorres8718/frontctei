import "./login.scss";
import LogoSennova from "../../images/logo-sennova.png";
import Centro from "../../images/Centro.png";
import LogoGrupo from "../../images/Logo_Grupo.png";
import LogoSena from "../../images/Logo_Sena.png";
import grafica from "../../images/graficas-radiales.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useState } from "react";
import { login } from "../../context/authContext/apiCalls";

export default function Login() {
  const [correo_electronico, setCorreo_electronico] = useState("");
  const [contrasena, setContrasena] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ correo_electronico, contrasena }, dispatch);
  };

  return (
    <div className="contentLogin">
      <div className="contentTitleForm">
        <img className="contentLogoSena" src={LogoSena} alt="SENA" />
        <div className="contentLoginTitle">
          <img className="imgGraf" src={grafica} alt="grafica" />
          <h1 className="titleIndicador">Indicadores CTeI</h1>
          <h1 className="titleSennova">SENNOVA</h1>
        </div>
        <div className="contentLoginForm">
          <h3 className="titleForm">Iniciar Sesión</h3>
          <input
            className="inputLogin"
            type="text"
            name="correo_electronico"
            placeholder="Correo electrónico *"
            onChange={(e) => setCorreo_electronico(e.target.value)}
          />
          <input
            className="inputLogin"
            type="password"
            name="contrasena"
            placeholder="Contraseña *"
            onChange={(e) => setContrasena(e.target.value)}
          />
          <div className="contentLoginCheck">
            <input type="checkbox" />
            <small className="checkboxLetter">Recordar mi sesión</small>
          </div>
          <Link to="/">
            <button
              className="contentLoginButton"
              onClick={handleLogin}
              disabled={isFetching}
            >
              Ingresar
            </button>
          </Link>
        </div>
      </div>
      <div className="contentLoginFooter">
        <div className="containerLogos">
          <img className="contentLogo" src={LogoSennova} alt="SENNOVA" />
          <img className="contentLogoGrupo" src={LogoGrupo} alt="GRUPO" />
          <img className="contentLogo Centro" src={Centro} alt="CENTRO" />
        </div>
        <small>Derechos de autor ©2021 SENNOVA</small>
      </div>
    </div>
  );
}

import "./login.scss";
import LogoSennova from "../../images/logo-sennova.png";
import grafica from "../../images/graficas-radiales.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="contentLogin">
      <div className="contentTitleForm">
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
            name="email"
            placeholder="Correo electrónico *"
          />
          <input
            className="inputLogin"
            type="password"
            name="password"
            placeholder="Contraseña *"
          />
          <div className="contentLoginCheck">
            <input type="checkbox" />
            <small className="checkboxLetter">Recordar mi sesión</small>
          </div>
          <Link to="/">
            <button className="contentLoginButton">Ingresar</button>
          </Link>
        </div>
      </div>
      <div className="contentLoginFooter">
        <img src={LogoSennova} alt="" />
        <small>Derechos de autor ©2021 SENNOVA</small>
      </div>
    </div>
  );
}

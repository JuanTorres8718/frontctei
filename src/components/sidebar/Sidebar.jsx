import React from "react";
import {
  ArrowDropDown,
  BusinessCenter,
  Computer,
  DataUsage,
  Equalizer,
  Home,
  PeopleAlt,
  PersonOutline,
  Storage,
} from "@material-ui/icons";
import "./sidebar.scss";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const hoverMenu = () => {
    let options = document.getElementById("options");
    options.classList.toggle("displayOptions")
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menú Rápido</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PersonOutline className="sidebarIcon" />
                Usuarios
              </li>
            </Link>
            <Link to="/projects" className="link">
              <li className="sidebarListItem">
                <BusinessCenter className="sidebarIcon" />
                Proyectos
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storage className="sidebarIcon" />
                Productos
              </li>
            </Link>
            <Link to="/talents" className="link">
              <li className="sidebarListItem">
                <PeopleAlt className="sidebarIcon" />
                Talento Humano
              </li>
            </Link>
            <Link to="/machinery" className="link">
              <li className="sidebarListItem">
                <Computer className="sidebarIcon" />
                Maquinaria y equipo
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <Home className="sidebarIcon" />
                Inicio
              </li>
            </Link>
            <li className="indicator" onClick={hoverMenu}>
              <div className="ListIndicator">
                <Equalizer className="sidebarIcon" />
                Indicadores CTeI
                <ArrowDropDown className="icon" />
              </div>
            </li>
            <div id="options" className="options displayOptions">
              <span>-Financiero</span>
              <span>-Talento Humano</span>
              <span>-Maquinaria y equipos</span>
              <span>-Productos</span>
            </div>
            <Link to="/databank" className="link">
              <li className="sidebarListItem">
                <DataUsage className="sidebarIcon" />
                Banco de datos
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

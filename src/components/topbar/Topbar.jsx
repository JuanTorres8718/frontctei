import "./topbar.scss";
import { ArrowDropDown, Notifications } from "@material-ui/icons";
import logo from "../../images/logo-sena.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logoutFinish } from "../../context/authContext/apiCalls";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function Topbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    logoutFinish(dispatch);
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img className="logo" src={logo} alt="logo-sena" />
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Notifications className="iconNotifications" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="menuSelect">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className="btn-login"
            >
              {user.nombre_usuario}
              <ArrowDropDown className="icon" />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>Perfil</MenuItem>
              <MenuItem
                className="liMenu"
                onClick={() => {
                  handleLogout();
                }}
              >
                Cerrar Sesión
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}

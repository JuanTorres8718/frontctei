import "./topbar.scss";
import { ArrowDropDown, Notifications } from "@material-ui/icons";
import logo from "../../images/logo-sena.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logoutFinish } from "../../context/authContext/apiCalls";

export default function Topbar() {
  const { user, isFetching, dispatch } = useContext(AuthContext);

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
          <div className="profile">
            <span>{user.nombre_usuario}</span>
            <ArrowDropDown className="icon" />
            <div className="options">
              <span className="option">Setting</span>
              <span
                className="option"
                onClick={() => {
                  handleLogout();
                }}
                disabled={isFetching}
              >
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

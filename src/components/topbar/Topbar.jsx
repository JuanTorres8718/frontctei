import "./topbar.scss";
import { ArrowDropDown, Notifications } from "@material-ui/icons";
import logo from "../../images/logo-sena.png";

export default function Topbar() {
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
            <span>Pepito Fdez</span>
            <ArrowDropDown className="icon" />
            <div className="options">
              <span className="option">Setting</span>
              <span className="option">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

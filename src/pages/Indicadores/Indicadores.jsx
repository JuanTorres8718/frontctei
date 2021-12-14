import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import "./indicadores.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";

export default function Indicadores() {
  const { user } = useContext(AuthContext);
  console.log(user.accessToken);
  return (
    <div className="indicadores">
      <h1 style={{ textAlign: "center", marginTop: "25px" }}>
        Indicadores CTeI
      </h1>
      <PowerBIEmbed
        embedConfig={{
          type: "report", // Supported types: report, dashboard, tile, visual and qna
          id: "YOU ID REPORT",
          embedUrl: "YOUR EMBEDURL",
          accessToken: "YOUR ACCESS TOKEN",
          tokenType: models.TokenType.Embed,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
            },
            background: models.BackgroundType.Transparent,
          },
        }}
        eventHandlers={
          new Map([
            [
              "loaded",
              function () {
                console.log("Report loaded");
              },
            ],
            [
              "rendered",
              function () {
                console.log("Report rendered");
              },
            ],
            [
              "error",
              function (event) {
                console.log(event.detail);
              },
            ],
          ])
        }
        cssClassName={"Embed-container"}
        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      />
    </div>
  );
}

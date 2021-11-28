import React, { useContext, useEffect } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { getCategoriesTalent } from "../../context/estadisticaContext/apiCalls";
import { EstadisticaContext } from "../../context/estadisticaContext/EstadisticaContext";
import "./chartStyle.scss";

export default function ChartTalentoHumano() {
  const { estadisticas, dispatch } = useContext(EstadisticaContext);

  useEffect(() => {
    getCategoriesTalent(dispatch);
  }, [dispatch]);

  return (
    <div className="chart">
      <h1 className="titleChart">Número de personas dedicadas a ACTI</h1>
      <div className="chartIndicator">
        <h3 className="chartTitle">Categorizados por:</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <PieChart>
            <Pie
              type="monotone"
              dataKey="cantidad"
              data={
                estadisticas.categories ? estadisticas.categories.nivel : ""
              }
              stroke="#5550bd"
              fill="#82ca9d"
              cx="16%"
              cy="50%"
              outerRadius={80}
            ></Pie>
            <Pie
              type="monotone"
              dataKey="cantidad"
              data={estadisticas.categories ? estadisticas.categories.rol : ""}
              stroke="#5550bd"
              fill="#82ca9d"
              cx="50%"
              cy="50%"
              outerRadius={80}
              // label
            />

            <Pie
              type="monotone"
              dataKey="cantidad"
              data={estadisticas.categories ? estadisticas.categories.tipo : ""}
              stroke="#5550bd"
              fill="#82ca9d"
              cx="82%"
              cy="50%"
              outerRadius={80}
              // label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="containerTitle">
          <h3 className="titleTalent">Nivel academico</h3>
          <h3 className="titleTalent">Rol</h3>
          <h3 className="titleTalent">Tipo de contrato</h3>
        </div>
      </div>
      <div className="chartVisuality">
        <p className="chartP">
          Si deseas visualizar los indicadores completos pulsa el botón de abajo
        </p>
        <button className="chartButton">Visualizar indicadores</button>
      </div>
      <div className="containerFooter">
        <small>Derechos de autor ©2021 SENNOVA</small>
      </div>
    </div>
  );
}

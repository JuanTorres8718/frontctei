import React, { useContext, useEffect } from "react";
import {
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  LabelList,
} from "recharts";
import { getValueForYear } from "../../context/estadisticaContext/apiCalls";
import { EstadisticaContext } from "../../context/estadisticaContext/EstadisticaContext";
import "./chartStyle.scss";

export default function ChartFinanciero() {
  const { estadisticas, dispatch } = useContext(EstadisticaContext);

  useEffect(() => {
    getValueForYear(dispatch);
  }, [dispatch]);

  return (
    <div className="chart">
      <h1 className="titleChart">Gastos en ACTI total</h1>
      <div className="chartIndicator">
        <h3 className="chartTitle">Datos Totales</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <BarChart data={estadisticas.values ? estadisticas.values : ""}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fecha" stroke="#5550bd" />
            <Tooltip />
            <Bar
              type="monotone"
              dataKey="valorProyectos"
              stroke="#5550bd"
              fill="#82ca9d"
            >
              <LabelList dataKey="name" position="insideTop" angle="45" />
            </Bar>
            <Bar
              type="monotone"
              dataKey="valorTalentos"
              stroke="#5550bd"
              fill="#82ca9d"
            />
            <Bar
              type="monotone"
              dataKey="valorMaquinarias"
              stroke="#5550bd"
              fill="#82ca9d"
            />
            <Bar
              type="monotone"
              dataKey="valorSoftware"
              stroke="#5550bd"
              fill="#82ca9d"
            />
            <Bar
              type="monotone"
              dataKey="valorOtrosGastos"
              stroke="#5550bd"
              fill="#82ca9d"
            />
          </BarChart>
        </ResponsiveContainer>
        <h3 className="chartTextX">Años</h3>
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

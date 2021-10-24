import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { finanzaData } from "../../dummyData";
import "./chartStyle.scss";

export default function ChartMaquinaria() {
  return (
    <div className="chart">
      <h1 className="titleChart">Indicadores de Maquinaria y equipos</h1>
      <div className="chartIndicator">
        <h3 className="chartTitle">Compra de equipos</h3>
        <h3 className="chartTextY chartFinAndMaq">Cantidad de inversión</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={finanzaData}>
            <Line
              type="monotone"
              dataKey="Inversion"
              stroke="#5550bd"
              fill="#82ca9d"
            />
            <XAxis dataKey="name" stroke="#5550bd" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          </LineChart>
        </ResponsiveContainer>
        <h3 className="chartTextX">Años</h3>
      </div>
      <div className="chartVisuality">
        <p className="chartP">
          Si deseas visualizar los indicadores completos pulsa el botón de abajo
        </p>
        <button className="chartButton">Visualizar indicadores</button>
      </div>
    </div>
  );
}

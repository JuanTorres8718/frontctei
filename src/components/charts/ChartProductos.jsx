import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { finanzaData } from "../../dummyData";
import "./chartStyle.scss";

export default function ChartProductos() {
  return (
    <div className="chart">
      <h1 className="titleChart">Indicadores de Productos creados</h1>
      <div className="chartIndicator">
        <h3 className="chartTitle">Datos anuales de los Productos</h3>
        <h3 className="chartTextY charth3Product">
          Cantidad de productos creados
        </h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <BarChart data={finanzaData}>
            <Bar
              type="monotone"
              dataKey="Inversion"
              stroke="#5550bd"
              fill="#82ca9d"
            />
            <XAxis dataKey="name" stroke="#5550bd" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
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

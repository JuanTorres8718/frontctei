import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { talentData } from "../../dummyData";
import "./chartStyle.scss";

export default function ChartTalentoHumano() {
  return (
    <div className="chart">
      <h1 className="titleChart">Indicadores de Talento Humano</h1>
      <div className="chartIndicator">
        <h3 className="chartTitle">Datos de Contratación anual</h3>
        {/* <h3 className="chartTextY">Cantidad de contratados anualmente</h3> */}
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <PieChart>
            <Pie
              type="monotone"
              dataKey="Contratados"
              data={talentData}
              stroke="#5550bd"
              fill="#82ca9d"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            />
            {/* <XAxis dataKey="name" stroke="#5550bd" />
            <YAxis /> */}
            <Tooltip />
            {/* <CartesianGrid stroke="#ccc" strokeDasharray="3 3" /> */}
          </PieChart>
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

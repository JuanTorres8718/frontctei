import React, { useContext, useEffect } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { getCreateProducts } from "../../context/estadisticaContext/apiCalls";
import { EstadisticaContext } from "../../context/estadisticaContext/EstadisticaContext";
import "./chartStyle.scss";

export default function ChartProductos() {
  const { estadisticas, dispatch } = useContext(EstadisticaContext);

  useEffect(() => {
    getCreateProducts(dispatch);
  }, [dispatch]);

  return (
    <div className="chart">
      <h1 className="titleChart">Indicadores de Productos creados</h1>
      <div className="chartIndicator">
        <h3 className="chartTitle">Datos anuales de los Productos</h3>
        <ResponsiveContainer width="100%" aspect={3 / 1}>
          <LineChart data={estadisticas.products ? estadisticas.products : ""}>
            <Line
              type="monotone"
              dataKey="creados"
              stroke="#5550bd"
              fill="#82ca9d"
            />
            <XAxis dataKey="fecha" stroke="#5550bd" />
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
      <div className="containerFooter">
        <small>Derechos de autor ©2021 SENNOVA</small>
      </div>
    </div>
  );
}

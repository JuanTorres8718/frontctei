import React from "react";
// import "./home.scss";
import { finanzaData } from "../../dummyData";
import ChartFinanciero from "../../components/charts/chartfinanciero/ChartFinanciero";

export default function Financiero() {
  return (
    <div className="home">
      <ChartFinanciero
        data={finanzaData}
        title="User Analitycs"
        grid
        dataKey="Active user"
      />
    </div>
  );
}
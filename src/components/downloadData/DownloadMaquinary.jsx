import React from "react";
import ReactExport from "react-export-excel";

export default function DownloadMaquinary({ maquinary }) {
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

  maquinary.forEach((maq) => {
    maq["fecha"] = maq.fecha_compra.split("T")[0];
    if (maq.codigo_tipo_equipo === 1) {
      maq["tipo_equipo"] = "Maquinaria";
    } else {
      maq["tipo_equipo"] = "Equipo de Computo";
    }
  });

  return (
    <ExcelFile
      element={
        <button className="contentDataBankButton">
          Descargar datos de la maquinaria
        </button>
      }
      filename="Datos Maquinaria"
    >
      <ExcelSheet data={maquinary} name="Proyectos">
        <ExcelColumn
          style={{ font: { sz: "30", bold: true } }}
          label="Codigo del equipo"
          value="codigo_equipo"
        />
        <ExcelColumn
          style={{ font: { sz: "35", bold: true } }}
          label="Descripción del equipo"
          value="descripcion_equipo"
        />
        <ExcelColumn
          style={{ font: { sz: "35", bold: true } }}
          label="Valor del equipo"
          value="valor_equipo"
        />
        <ExcelColumn
          style={{ font: { sz: "35", bold: true } }}
          label="Fecha de compra"
          value="fecha"
        />
        <ExcelColumn
          style={{ font: { sz: "35", bold: true } }}
          label="Tipo de equipo"
          value="tipo_equipo"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Proyecto vinculado"
          value="codigo_proyecto"
        />
        <ExcelColumn
          style={{ font: { sz: "30", bold: true } }}
          label="Producto vinculado"
          value="codigo_producto"
        />
      </ExcelSheet>
    </ExcelFile>
  );
}

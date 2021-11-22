import React from "react";
import ReactExport from "react-export-excel";

export default function DownloadProducts({ products }) {
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

  products.forEach((product) => {
    if (product.aval_autor === true) {
      product["aval"] = "Verdadero";
    } else if (product.aval_autor === false) {
      product["aval"] = "Falso";
    }

    if (product.tipo_intangible === true) {
      product["tipo"] = "Verdadero";
    } else if (product.tipo_intangible === false) {
      product["tipo"] = "Falso";
    }

    product["fecha_registro"] = product.fecha_registro_producto.split("T")[0];
    product["fecha"] = product.fecha_creacion.split("T")[0];
  });

  return (
    <ExcelFile
      element={
        <button className="contentDataBankButton">
          Descargar datos de los productos
        </button>
      }
      filename="Datos Productos"
    >
      <ExcelSheet data={products} name="Proyectos">
        <ExcelColumn
          style={{ font: { sz: "30", bold: true } }}
          label="Codigo del producto"
          value="codigo_productos"
        />
        <ExcelColumn
          style={{ font: { sz: "35", bold: true } }}
          label="Nombre del producto"
          value="nombre_productos"
        />
        <ExcelColumn
          style={{ font: { sz: "35", bold: true } }}
          label="Descripcion del producto"
          value="descripcion_producto"
        />
        <ExcelColumn
          style={{ font: { sz: "35", bold: true } }}
          label="Link del producto"
          value="link_producto"
        />
        <ExcelColumn
          style={{ font: { sz: "35", bold: true } }}
          label="Aval del autor"
          value="aval"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Producto es intangible?"
          value="tipo"
        />
        <ExcelColumn
          style={{ font: { sz: "30", bold: true } }}
          label="Respuesta a si es o no intangible"
          value="intangible"
        />
        <ExcelColumn
          style={{ font: { sz: "30", bold: true } }}
          label="Fecha registrado del producto"
          value="fecha_registro"
        />
        <ExcelColumn
          style={{ font: { sz: "30", bold: true } }}
          label="Codigo del proyecto en caso de estar relacionado a uno"
          value="codigo_proyecto"
        />
        <ExcelColumn
          style={{ font: { sz: "30", bold: true } }}
          label="Tipologia del productos"
          value="codigo_tipologia"
        />
        <ExcelColumn
          style={{ font: { sz: "30", bold: true } }}
          label="Fecha de creacion en la pagina"
          value="fecha"
        />
      </ExcelSheet>
    </ExcelFile>
  );
}

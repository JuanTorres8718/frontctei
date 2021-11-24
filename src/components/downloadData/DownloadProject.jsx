import React from "react";
import ReactExport from "react-export-excel";

export default function DownloadProject({ projects }) {
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

  projects.forEach((project) => {
    project["fecha_inicio"] = project.fecha_inicio_proyecto.split("T")[0];
    project["fecha_cierre"] = project.fecha_cierre_proyecto.split("T")[0];
    project["fecha_creacion_proyecto"] = project.fecha_creacion.split("T")[0];
    project["finaciado"] =
      project.proyecto_financiado === 0 ? "Verdadero" : "Falso";
    if (project.codigo_estado_proyecto === 1) {
      project["estado_proyecto"] = "Sin iniciar";
    } else if (project.codigo_estado_proyecto === 2) {
      project["estado_proyecto"] = "Ejecución";
    } else if (project.codigo_estado_proyecto === 3) {
      project["estado_proyecto"] = "Terminado";
    } else if (project.codigo_estado_proyecto === 4) {
      project["estado_proyecto"] = "Suspendido";
    }
  });

  return (
    <ExcelFile
      element={
        <button className="contentDataBankButton">
          Descargar datos de proyectos
        </button>
      }
      filename="Datos Proyectos"
    >
      <ExcelSheet data={projects} name="Proyectos">
        <ExcelColumn
          style={{ font: { sz: "30", bold: true } }}
          label="Código del proyecto"
          value="codigo_proyecto"
        />
        <ExcelColumn
          style={{ font: { sz: "35", bold: true } }}
          label="Nombre del proyecto"
          value="nombre_proyecto"
        />
        <ExcelColumn
          style={{ font: { sz: "35", bold: true } }}
          label="Presupuesto solicitado"
          value="presupuesto_solicitado"
        />
        <ExcelColumn
          style={{ font: { sz: "35", bold: true } }}
          label="Presupuesto aprobado"
          value="presupuesto_aprobado"
        />
        <ExcelColumn
          style={{ font: { sz: "35", bold: true } }}
          label="Presupuesto asignado"
          value="presupuesto_asignado"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Observación general"
          value="observacion_general"
        />
        <ExcelColumn
          style={{ font: { sz: "30", bold: true } }}
          label="Valor total del proyecto"
          value="valor_proyecto"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Valor de servicios personales"
          value="valor_servicios_personales"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Valor de compra de equipos"
          value="valor_compra_equipos"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Valor de software"
          value="valor_software"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Valor de otros gastos"
          value="valor_otros_gastos"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Fecha de inicio del proyecto"
          value="fecha_inicio"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Fecha de cierre del proyecto"
          value="fecha_cierre"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Industria 4.0"
          value="industria_4_0"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Economia naranja"
          value="economia_naranja"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Politicas Institucionales"
          value="politica_institucional"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Proyecto financiado"
          value="proyecto_financiado"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Resumen del proyecto"
          value="resumen_proyecto"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Video del proyecto"
          value="video_proyecto"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Línea programatica"
          value="codigo_linea_programatica"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Centro de formación"
          value="codigo_centro"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Actividad económica CIIU"
          value="codigo_ciiu"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Red de conocimiento"
          value="codigo_red_conocimiento"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Area de conocimiento OCDE"
          value="codigo_area_ocde"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Subarea de conocimiento"
          value="codigo_subarea_conocimiento"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Disciplina"
          value="codigo_disciplina"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Estado del proyecto"
          value="estado_proyecto"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Fecha de creación en la plataforma"
          value="fecha_creacion_proyecto"
        />
      </ExcelSheet>
    </ExcelFile>
  );
}

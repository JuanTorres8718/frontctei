import React from "react";
import ReactExport from "react-export-excel";

export default function DownloadTalents({ talents }) {
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

  talents.forEach((talent) => {
    talent["fecha_inicio"] = talent.fecha_inicio_contrato.split("T")[0];
    talent["fecha_fin"] = talent.fecha_fin_contrato.split("T")[0];
    if (talent.codigo_tipo_contrato === 2001) {
      talent["nombre_contrato"] = "Aprendiz";
    } else if (talent.codigo_tipo_contrato === 2002) {
      talent["nombre_contrato"] = "Contratista";
    } else if (talent.codigo_tipo_contrato === 2003) {
      talent["nombre_contrato"] = "Planta";
    } else if (talent.codigo_tipo_contrato === 2004) {
      talent["nombre_contrato"] = "Temporal";
    } else if (talent.codigo_tipo_contrato === 2005) {
      talent["nombre_contrato"] = "Provisional";
    }

    if (talent.codigo_rol_proyecto === 10001) {
      talent["rol_proyecto"] = "Líder";
    } else if (talent.codigo_rol_proyecto === 10002) {
      talent["rol_proyecto"] = "Coordinador";
    } else if (talent.codigo_rol_proyecto === 10003) {
      talent["rol_proyecto"] = "Investigador";
    } else if (talent.codigo_rol_proyecto === 10004) {
      talent["rol_proyecto"] = "Aprendíz";
    } else if (talent.codigo_rol_proyecto === 10005) {
      talent["rol_proyecto"] = "Monitor";
    }

    if (talent.codigo_nivel === 5001) {
      talent["nivel"] = "Bachiller";
    } else if (talent.codigo_nivel === 5002) {
      talent["nivel"] = "Técnico certificado";
    } else if (talent.codigo_nivel === 5003) {
      talent["nivel"] = "Técnico profesional";
    } else if (talent.codigo_nivel === 5004) {
      talent["nivel"] = "Técnico profesional con especialización";
    } else if (talent.codigo_nivel === 5005) {
      talent["nivel"] = "Tecnólogo";
    } else if (talent.codigo_nivel === 5006) {
      talent["nivel"] = "Tecnólogo con especialización";
    } else if (talent.codigo_nivel === 5007) {
      talent["nivel"] = "Profesional";
    } else if (talent.codigo_nivel === 5008) {
      talent["nivel"] = "Profesional con especialización";
    } else if (talent.codigo_nivel === 5009) {
      talent["nivel"] = "Profesional con maestría";
    } else if (talent.codigo_nivel === 5010) {
      talent["nivel"] = "Profesional con doctorado";
    } else {
      talent["nivel"] = "";
    }

    if (talent.codigo_rol_sennova === 6000) {
      talent["rol"] = "Aprendiz";
    } else if (talent.codigo_rol_sennova === 6001) {
      talent["rol"] = "Semillero";
    } else if (talent.codigo_rol_sennova === 6002) {
      talent["rol"] = "Aprendiz Sennova con Contrato de aprendizaje";
    } else if (talent.codigo_rol_sennova === 6003) {
      talent["rol"] = "Monitor";
    } else if (talent.codigo_rol_sennova === 6004) {
      talent["rol"] = "Dinamizador del conocimiento";
    } else if (talent.codigo_rol_sennova === 6005) {
      talent["rol"] = "Instructor - Investigador";
    } else if (talent.codigo_rol_sennova === 6006) {
      talent["rol"] = "Investigador Experto";
    } else if (talent.codigo_rol_sennova === 6007) {
      talent["rol"] = "Líder de grupo de investigación";
    } else if (talent.codigo_rol_sennova === 6008) {
      talent["rol"] = "Líder de proyectos";
    } else if (talent.codigo_rol_sennova === 6009) {
      talent["rol"] = "Líder de semillero";
    } else if (talent.codigo_rol_sennova === 6010) {
      talent["rol"] = "Dinamizador Sennova";
    } else if (talent.codigo_rol_sennova === 6011) {
      talent["rol"] = "Responsable de gestión editorial";
    } else if (talent.codigo_rol_sennova === 6012) {
      talent["rol"] = "Auxiliar editorial";
    } else {
      talent["rol"] = "";
    }

    if (talent.codigo_estado_contrato === 1) {
      talent["estado_contrato"] = "Sin iniciar";
    } else if (talent.codigo_estado_contrato === 2) {
      talent["estado_contrato"] = "Ejecución";
    } else if (talent.codigo_estado_contrato === 3) {
      talent["estado_contrato"] = "Terminado";
    } else if (talent.codigo_estado_contrato === 4) {
      talent["estado_contrato"] = "Suspendido";
    }
  });

  return (
    <ExcelFile
      element={
        <button className="contentDataBankButton">
          Descargar datos del talento humano
        </button>
      }
      filename="Datos Talento Humano"
    >
      <ExcelSheet data={talents} name="Proyectos">
        <ExcelColumn
          style={{ font: { sz: "30", bold: true } }}
          label="Codigo del talento"
          value="codigo_talento"
        />
        <ExcelColumn
          style={{ font: { sz: "35", bold: true } }}
          label="Nombre de la persona"
          value="nombre_persona"
        />
        <ExcelColumn
          style={{ font: { sz: "35", bold: true } }}
          label="Objeto del contrato"
          value="objeto_contrato"
        />
        <ExcelColumn
          style={{ font: { sz: "35", bold: true } }}
          label="Fecha de inicio del contrato"
          value="fecha_inicio"
        />
        <ExcelColumn
          style={{ font: { sz: "35", bold: true } }}
          label="Fecha de fin del contrato"
          value="fecha_fin"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Genero"
          value="genero"
        />
        <ExcelColumn
          style={{ font: { sz: "30", bold: true } }}
          label="Tiempo de dedicación semanal"
          value="tiempo_dedicacion_semanal"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Valor mensual del contrato"
          value="valor_mensual_contrato"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Valor total del contrato"
          value="valor_total_contrato"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="SENA/SENNOVA"
          value="sena_sennova"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Nivel academico"
          value="nivel"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Tipo de contrato"
          value="nombre_contrato"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Rol de sennova"
          value="rol"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Rol en el proyecto"
          value="rol_proyecto"
        />
        <ExcelColumn
          style={{ font: { sz: "24", bold: true } }}
          label="Estado del contrato"
          value="estado_contrato"
        />
      </ExcelSheet>
    </ExcelFile>
  );
}

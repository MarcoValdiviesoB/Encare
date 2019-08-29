import { Component, OnInit } from '@angular/core';
import { SurveyComponent } from '../survey.component'

@Component({
  selector: 'encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.scss']
})
export class EncuestasComponent implements OnInit {

  json = {
 "pages": [
  {
   "name": "Gestion y Administracion",
   "elements": [
    {
     "type": "text",
     "name": "nombre",
     "title": "Nombre Empresa",
     "isRequired": true
    },
    {
     "type": "text",
     "name": "actividad",
     "title": "Actividad Principal"
    },
    {
     "type": "text",
     "name": "rut",
     "title": "Rut",
     "isRequired": true
    },
    {
     "type": "text",
     "name": "domicilio",
     "title": "Domicilio",
     "isRequired": true
    },
    {
     "type": "panel",
     "name": "propiedad",
     "elements": [
      {
       "type": "file",
       "name": "propiedad-escritura",
       "title": "Escritura/Contrato de Arriendo/Contribuciones",
       "maxSize": 0
      },
      {
       "type": "boolean",
       "name": "propiedad-boolean",
       "title": "Si"
      }
     ],
     "title": "Propiedad del terreno"
    },
    {
     "type": "panel",
     "name": "panel5",
     "elements": [
      {
       "type": "file",
       "name": "¿Su empresa realiza auditorías internas, supervisiones y revisiones que queden documentadas?",
       "title": "Documentos/Archivos de auditorías internas",
       "maxSize": 0
      },
      {
       "type": "boolean",
       "name": "question14",
       "title": "Si"
      }
     ],
     "title": "¿Su empresa realiza auditorías internas, supervisiones y revisiones que queden documentadas?"
    },
    {
     "type": "panel",
     "name": "panel4",
     "elements": [
      {
       "type": "comment",
       "name": "question16",
       "title": "Descripcion de  cargos"
      },
      {
       "type": "boolean",
       "name": "question13",
       "title": "Si"
      }
     ],
     "title": "¿Su empresa cuenta con un organigrama formal y reconocido por todos los miembros de la organización?"
    },
    {
     "type": "panel",
     "name": "panel1",
     "elements": [
      {
       "type": "file",
       "name": "¿Tiene un plan estratégico corporativo  de largo plazo?",
       "title": "Documento: Memoria/PPT/Otro",
       "maxSize": 0
      },
      {
       "type": "comment",
       "name": "question6",
       "title": "Comentario"
      },
      {
       "type": "boolean",
       "name": "question12",
       "title": "Si"
      }
     ],
     "title": "¿Tiene un plan estratégico corporativo  de largo plazo?"
    },
    {
     "type": "panel",
     "name": "panel2",
     "elements": [
      {
       "type": "file",
       "name": "¿Cuál es el presupuesto proyectado en inversiones para los siguientes 5 años de sus rubros principales? (promedio anual)",
       "title": "Documento: Memoria/PPT/Otro",
       "maxSize": 0
      },
      {
       "type": "boolean",
       "name": "question7",
       "title": "Si"
      }
     ],
     "title": "¿Cuál es el presupuesto proyectado en inversiones para los siguientes 5 años de sus rubros principales? (promedio anual)"
    },
    {
     "type": "panel",
     "name": "Metodologia gestion de administracion",
     "elements": [
      {
       "type": "file",
       "name": "¿Tiene una metodología de gestión de Administración de contratos ?",
       "title": "Documento: Memoria/PPT/Otro",
       "maxSize": 0
      },
      {
       "type": "comment",
       "name": "question5",
       "title": "Comentario"
      },
      {
       "type": "boolean",
       "name": "question11",
       "title": "Si"
      }
     ],
     "title": "¿Tiene una metodología de gestión de Administración de contratos ?"
    },
    {
     "type": "panel",
     "name": "panel3",
     "elements": [
      {
       "type": "comment",
       "name": "question10",
       "title": "Comentario"
      },
      {
       "type": "boolean",
       "name": "question8",
       "title": "¿Utiliza algun sistema ERP?"
      },
      {
       "type": "file",
       "name": "question9",
       "title": "Propiedad Factura o licencia ",
       "maxSize": 0
      }
     ],
     "title": "¿Como es el sistema informatico de la empresa?"
    }
   ],
   "title": "Gestion y Administracion"
  },
  {
   "name": "Recursos humanos",
   "elements": [
    {
     "type": "matrixdropdown",
     "name": "Empleados",
     "columns": [
       {
         "name" : "Hombres",
         "cellType" : "text"
       },
       {
         "name" : "Mujeres",
         "cellType" : "text"
       }
     ],
     "rows": [
      "Empleados Propios",
      "Gerentes",
      "Directores",
      "Socios",
      "Representantes legales"
      ],
      "cellType" : "text",
    },
    {
     "type": "text",
     "name": "subcontratados",
     "title": "Indique la cantidad de trabajadores subcontratados permanentes (N°)",
    },
    {
     "type": "panel",
     "name": "plan-capacitacion",
     "elements": [
      {
       "type": "file",
       "name": "plan-capacitacion-archivo",
       "title": "Documento del plan y temarios de los cursos y certificados",
       "maxSize": 0
      },
      {
       "type": "comment",
       "name": "plan-capacitacion-comentario",
       "title": "Informacion adicional"
      },
      {
       "type": "boolean",
       "name": "plan-capacitacion-si",
       "title": "Si"
      }
     ],
     "title": "¿Tiene plan de capacitación y desarrollo?"
    },
    {
     "type": "panel",
     "name": "panel5",
     "elements": [
       {
        "type": "text",
        "name": "personal-certificado-porcentaje",
        "title": "¿Qué porcentaje del personal de su empresa se encuentra certificado?"
      },
     ],
     "title": "¿Qué porcentaje del personal de su empresa se encuentra certificado?"
    },
    {
     "type": "panel",
     "name": "personal-sindicato",
     "elements": [
      {
       "type": "boolean",
       "name": "personal-sindicato-si",
       "title": "si"
      },
      {
       "type": "file",
       "name": "",
       "title": "Documentos de inspección del trabajo o internos",
       "maxSize": 0
      }
     ],
     "title": "¿Cuenta con personal sindicalizado?"
    }
   ],
   "title": "Recursos humanos"
  },
 ],
 "showQuestionNumbers": "off"
}

  opened = false

  constructor() { }

  ngOnInit() {
  }

  openForm = (event) => {
    this.opened = true
  }

}

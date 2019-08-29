import { Component, OnInit } from '@angular/core';
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

const getAllVisitas = `query ListVisitas(
  $filter: TableVisitasAmpFilterInput
  $limit: Int
  $nextToken: String
) {
  listVisitasAmps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      username
      inspector
      datos
    }
    nextToken
  }
}`


@Component({
  selector: 'encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})

export class EncuestaComponent implements OnInit {

  distribucion = (dataset, datos = {}) => {
    var mujeres = 0.0
    var hombres = 0.0
    hombres = parseFloat(dataset["Empleados Propios"]["Hombres"])
    mujeres = parseFloat(dataset["Empleados Propios"]["Mujeres"])
    var total = hombres + mujeres
    var hombresP = (hombres/total*100).toPrecision(4)
    var mujeresP = (mujeres/total*100).toPrecision(4)
    return { titulo: "Distribucion de la dotacion propia", valor: ["Mujeres : " + hombresP + "%" ,"Hombres : " + mujeresP + "%"]}
  }

  subcontratados = (dataset, datos = {}) => {
    if(!dataset || !datos["subcontratados"]){
      return {}
    }
    var propio = parseFloat(dataset["Empleados Propios"]["Hombres"]) + parseFloat(dataset["Empleados Propios"]["Mujeres"])
    var subcontratista = parseFloat(datos["subcontratados"])
    var total = propio + subcontratista
    console.log("propio: ",propio, "sub: ",subcontratista)
    var propioP = (propio/total*100).toPrecision(4)
    var subcontratistaP = (subcontratista/total*100).toPrecision(4)
    return { titulo: "Dotacion subcontratada", valor: ["Subcontratista : " + subcontratistaP + "%" ,"Propio : " + propioP + "%"]}

  }

  info = {
    "Antecedentes Generales" : [
      {
        "campo" : "nombre",
        "titulo" : "Empresa proveedora",
      },
      {
        "campo" : "actividad",
        "titulo" : "Actividades principales",
        "class" : "col-12 col-md-6"
      },
      {
        "campo" : "rut",
        "titulo" : "RUT"
      },
      {
        "campo" : "fecha",
        "titulo" : "Fecha"
      },
      {
        "campo" : "domicilio",
        "titulo" : "Direccion"
      },
      {
        "campo" : "inspector",
        "titulo" : "Nombre inspector"
      },
      {
        "campo" : "participanes",
        "titulo" : "Participantes de la inspeccion"
      },
      {
        "campo" : "descripcion",
        "titulo" : "Descripcion de la empresa"
      },
      {
        "operacion" : this.distribucion,
        "campo" : "Empleados",
      },
      {
        "operacion" : this.subcontratados,
        "campo" : "Empleados",
      },
      {
        "grupo" : "personal-certificado",
        "titulo" : "Certificacion de personal",
        "campos" : {
          "si" : "boolean"
        }
      },
      {
        "grupo" : "plan-capacitacion",
        "titulo" : "Plan de capacitacion",
        "campos" : {
          "si" : "boolean",
          "comentario": "string",
        }
      }
    ]
  }


  user : String
  display : Array<Object>

  constructor() {
    Auth.currentAuthenticatedUser({
    bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => {
      this.user = user.username
    })
  }

  async ngOnInit() {
    const listVisitasAmps = await API.graphql(graphqlOperation(getAllVisitas, {filter: { username: { eq: this.user}}}))
    var datos = JSON.parse(listVisitasAmps["data"]["listVisitasAmps"]["items"][0]["datos"])
    this.display = []
    for (var categoria in this.info){
      for (var campo in this.info[categoria]){
        console.log(this.info[categoria][campo]["campo"])
        if(this.info[categoria][campo]["operacion"] && datos[this.info[categoria][campo]["campo"]]){
          var ret = this.info[categoria][campo]["operacion"](datos[this.info[categoria][campo]["campo"]],datos)
          if(ret){
            this.display.push(ret)
          }
        }
        else if(this.info[categoria][campo]["grupo"]){
          var agrupados = this.info[categoria][campo]["campos"]
          var grupo  = this.info[categoria][campo]["grupo"]
          var displayObject = []
          for ( var valor in agrupados){
            if (datos[grupo+"-"+valor]){
              displayObject.push({ "campo": valor, "valor" : datos[grupo+"-"+valor]})
            }
          }
          if(displayObject.length){
            this.display.push({ titulo:  this.info[categoria][campo]["titulo"], valores: displayObject, class: this.info[categoria][campo]["class"] })
          }
        }
        else if(datos[this.info[categoria][campo]["campo"]]){
          this.display.push({ titulo: this.info[categoria][campo]["titulo"], valor: [datos[this.info[categoria][campo]["campo"]]], class: this.info[categoria][campo]["class"]})
        }
      }
    }
    console.log(datos)
  }

}

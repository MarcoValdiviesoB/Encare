import { Component, OnInit } from '@angular/core';
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { Router } from '@angular/router'

const updateVisitas = `mutation updateVisita($input: UpdateVisitasAmpInput!){
  updateVisitasAmp(input: $input){
    username
    inspector
    encuesta
    asigned
  }
}`

const getAllVisitas = `query ListVisitas(
  $filter: TableVisitasAmpFilterInput
  $limit: Int
  $nextToken: String
) {
  listVisitasAmps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      username
      inspector
      encuesta
    }
    nextToken
  }
}`

const getAllUsers = `query ListUsers(
  $filter: TableUsersAmpFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsersAmps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      username
      type
    }
    nextToken
  }
}
`

@Component({
  selector: 'solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit {
  solicitudes : Array<Object>
  usuarios : Array<Object>
  solicitadas : Array<Object>

  asignar = async (id) => {
    console.log(id)
    const listUsersAmps = await API.graphql(graphqlOperation(getAllUsers,{filter: { type: { eq : "Inspector"}}}))
    var elements = document.getElementById(id)["children"]
    var assign = []
    for (var element in elements){
      if(elements[element]["attributes"]){
        if(elements[element]["attributes"]["placeholder"]){
          if(elements[element]["innerText"] != elements[element]["attributes"]["placeholder"]["nodeValue"]){
            assign.push(elements[element]["innerText"])
          }
        }
      }
    }

    if(assign.length == 2){
      const updateUsers = await API.graphql(graphqlOperation(updateVisitas,{input : { username : id, inspector: assign[0], encuesta: assign[1], asigned: true }}))
      this.router.navigateByUrl("/pages/visitas/solicitudes")
    }
  }

  constructor(private router:Router) {

  }

  async ngOnInit() {
    const listVisitasAmps = await API.graphql(graphqlOperation(getAllVisitas, {filter: { asigned: { ne: true}}}))
    const listVisitasAmpsNo = await API.graphql(graphqlOperation(getAllVisitas, {filter: { asigned: { eq: true}}}))
    const listUsersAmps = await API.graphql(graphqlOperation(getAllUsers,{filter: { type: { eq : "Inspector"}}}))
    console.log(listVisitasAmps.data.listVisitasAmps.items)
    this.solicitudes = listVisitasAmps.data.listVisitasAmps.items
    this.usuarios = listUsersAmps.data.listUsersAmps.items
    this.solicitadas = listVisitasAmpsNo.data.listVisitasAmps.items
  }

}

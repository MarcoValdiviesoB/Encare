import { Component, OnInit } from '@angular/core';
import { Auth, API, graphqlOperation } from 'aws-amplify'


const getAllVisitas = `query ListVisitas(
  $filter: TableVisitasAmpFilterInput
  $limit: Int
  $nextToken: String
) {
  listVisitasAmps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      username
      inspector
      ubicacion
      encuesta
    }
    nextToken
  }
}`

@Component({
  selector: 'inspecciones',
  templateUrl: './inspecciones.component.html',
  styleUrls: ['./inspecciones.component.scss']
})
export class InspeccionesComponent implements OnInit {

  visitas : Array<Object>

  constructor() {
  }

  async ngOnInit() {
    Auth.currentAuthenticatedUser().then( async (user) => {
      const oneEvent = await API.graphql(graphqlOperation(getAllVisitas, { filter : { inspector :  {eq : user.username} } }))
      this.visitas = oneEvent.data.listVisitasAmps.items
    })
  }
}

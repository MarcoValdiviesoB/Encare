import { Component, OnInit } from '@angular/core';
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { Router } from '@angular/router'


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
      datos
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

  goToForm = (cliente) => {
    this.router.navigateByUrl("/pages/encuesta/formulario/"+cliente)
  }

  visitas : Array<Object>

  constructor(private router: Router) {
  }

  async ngOnInit() {
    Auth.currentAuthenticatedUser().then( async (user) => {
      const oneEvent = await API.graphql(graphqlOperation(getAllVisitas, { filter : { inspector :  {eq : user.username}}}))
      this.visitas = oneEvent.data.listVisitasAmps.items
    })
  }
}

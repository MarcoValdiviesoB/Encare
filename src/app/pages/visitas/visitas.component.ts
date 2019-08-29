import { Component, OnInit } from '@angular/core';
import { API , graphqlOperation, Auth } from 'aws-amplify'
import { Router } from '@angular/router'

const getVisita = `query getVisitasAmp($username: String! ) {
  getVisitasAmp(username: $username){
   username
   ubicacion
   inspector
   asigned
   datos
  }
}`

@Component({
  selector: 'visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.scss']
})

export class VisitasComponent implements OnInit {

  user : string
  step : number
  solicitud : Object
  display = false

  verInforme = () => {
    this.router.navigateByUrl("/pages/encuesta/view")
  }

  constructor(private router : Router) {
    Auth.currentAuthenticatedUser().then((user) => {
      this.user = user.username
    })
  }

  async ngOnInit() {
    const oneEvent = await API.graphql(graphqlOperation(getVisita, { username : this.user }))
    this.solicitud = oneEvent.data.getVisitasAmp
    if(!this.solicitud){
      this.display = true
    }
    else{
      this.step = 0
      if(this.solicitud["datos"]){
        this.step = 2
      }
      else if(this.solicitud["asigned"]){
        this.step = 1
      }
    }
    console.log(this.user)
  }

}

import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { API, Auth } from 'aws-amplify'

@Component({
  selector: 'solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {

  source : SafeUrl;

  solicitarVisita = () => {
    Auth.currentAuthenticatedUser({
    bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => {
      let apiName = 'apiVisitas'; // replace this with your api name.
      let path = '/visitas'; // replace this with the path you have configured on your API
      let myInit = {
          body: {
            username:user.username,
            ubicacion: document.getElementById("lugar")["value"],
            date:2041,
          }, // replace this with attributes you need
          headers: {} // OPTIONAL
      }

      API.put(apiName, path, myInit).then(response => {
          console.log(response)
      }).catch(error => {
          console.log(error.response)
      });
    })
    .catch(err => console.log(err));
  }

  changeMap = (event) => {
    this.source = this.sanitizer.bypassSecurityTrustResourceUrl("https://maps.google.com/maps?q="+event.target.value+"&t=&z=14&ie=UTF8&iwloc=&output=embed");
  }

  constructor(public sanitizer: DomSanitizer) {
    this.source = this.sanitizer.bypassSecurityTrustResourceUrl("https://maps.google.com/maps?q="+"Santiago, chile"+"&t=&z=11&ie=UTF8&iwloc=&output=embed");
  }

  ngOnInit() {
  }

}

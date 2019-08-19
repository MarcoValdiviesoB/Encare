import { Component } from '@angular/core';
import { Auth } from 'aws-amplify'
import * as jwt_decode from "jwt-decode";


import { MENU_ITEMS } from './pages-menu';
import { GRUPOS } from './groups'

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  signedIn : boolean;
  user : any;
  greeting: string;
  menu = MENU_ITEMS;

  constructor(){
    Auth.currentSession().then((session) => {
      var grupos = jwt_decode(session.getIdToken()["jwtToken"])["cognito:groups"]
      for ( var grupo in grupos ){
        if(GRUPOS[grupos[grupo]]){
          this.menu = this.menu.concat(GRUPOS[grupos[grupo]])
        }
      }
    })
    .catch( (err) => console.log(err))
  }

}

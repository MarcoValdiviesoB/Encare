/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { AmplifyService } from 'aws-amplify-angular'

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  signedIn : boolean
  user : any
  greeting: string
  constructor(private analytics: AnalyticsService, private amplifyService:AmplifyService) {
    this.amplifyService.authStateChange$.subscribe((authState) => {
      this._validAuthStates = ['signedIn'];
      this.signedIn = authState.state === "signedIn"
      if(!authState.user){
        this.user = null
      }
      else{
        this.user = authState.user
        this.greeting = "Bienvenido"+authState.user.username
      }
    })
  }

  ngOnInit() {
    this.analytics.trackPageViews();
  }
}

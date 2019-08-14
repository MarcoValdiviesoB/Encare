import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular'
import { Router } from '@angular/router'

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private amplifyService:AmplifyService, private router:Router) {
    this.amplifyService.authStateChange$.subscribe((authState) => {
      if(authState.state === "signedIn"){
        this.router.navigateByUrl("/pages/dashboard")
      }
    })
   }

  ngOnInit() {
  }

}

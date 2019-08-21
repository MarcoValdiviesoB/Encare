import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  created = false

  submit = () => {
    var user = document.getElementById("username")["value"]
    var email = document.getElementById("email")["value"]
    var type = document.getElementById("type")["textContent"]
    Auth.signUp({
    username : user,
    password: "temporal1234",
    attributes: {
        email: email,          // optional
    },
    })
    .then(data => this.created = true)
    .catch(err => console.log(err));
  }

  constructor() {
  }

  ngOnInit() {
  }

}

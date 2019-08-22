import { Component, OnInit } from '@angular/core';
import { Auth , API } from 'aws-amplify';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  created = false

  submitToDb = (user,email,type) => {
    let apiName = 'apiUsers'; // replace this with your api name.
    let path = '/users'; // replace this with the path you have configured on your API
    let myInit = {
        body: {
          username:user,
          type:type,
          verified:false,
        }, // replace this with attributes you need
        headers: {} // OPTIONAL
    }

    API.put(apiName, path, myInit).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error.response)
    });
  }

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
    .then(data => {
      this.created = true
      this.submitToDb(user,email,type)
    })
    .catch(err => console.log(err));
  }

  constructor() {
  }

  ngOnInit() {
  }

}

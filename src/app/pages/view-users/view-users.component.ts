import { Component, OnInit } from '@angular/core';
import { API } from 'aws-amplify'

@Component({
  selector: 'view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {

  users = []

  constructor() {
    let apiName = 'apiUsers';
    let path = '/users';
    let myInit = { // OPTIONAL
        headers: {}, // OPTIONAL
        response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
        queryStringParameters: {}
    }
    API.get(apiName, path, myInit).then(response => {
        this.users = response.data
        console.log(response.data[0].username)
    }).catch(error => {
        console.log(error.response)
    });
  }

  ngOnInit() {
  }

}

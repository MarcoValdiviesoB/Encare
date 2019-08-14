import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.scss']
})
export class EncuestasComponent implements OnInit {

  opened = false

  constructor() { }

  ngOnInit() {
  }

  openForm = (event) => {
    this.opened = true
  }

}

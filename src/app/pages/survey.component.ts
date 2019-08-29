import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';
import * as widgets from 'surveyjs-widgets';
import 'inputmask/dist/inputmask/phone-codes/phone.js';
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { ActivatedRoute } from '@angular/router'


widgets.icheck(Survey);
widgets.select2(Survey);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey);
widgets.bootstrapslider(Survey);
widgets.prettycheckbox(Survey);

const addData = `mutation updateVisita($input: UpdateVisitasAmpInput!){
  updateVisitasAmp(input: $input){
    username
    datos
  }
}`


Survey.JsonObject.metaData.addProperty('questionbase', 'popupdescription:text');
Survey.JsonObject.metaData.addProperty('page', 'popupdescription:text');

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'survey',
  template: `<div class='survey-container contentcontainer codecontainer'><div id='surveyElement'></div></div>`
})
export class SurveyComponent implements OnInit {
  cliente : String;
  @Output() submitSurvey = new EventEmitter<any>();
  @Input()
  json: object;
  result: any;

  constructor(private route : ActivatedRoute){}

  async ngOnInit() {
    this.route.params.subscribe( async (params) => {
      this.cliente = params.cliente
    })
    var myCss = {
        row: "sv_row rowOpt",
        question: {
          "mainRoot" : "test"
        }
    }
    const surveyModel = new Survey.Model(this.json);
    surveyModel.onAfterRenderQuestion.add((survey, options) => {
      if (!options.question.popupdescription) { return; }
      // Add a button;
      const btn = document.createElement('button');
      btn.className = 'btn btn-info btn-xs';
      btn.innerHTML = 'More Info';
      const question = options.question;
      btn.onclick = function () {
        // showDescription(question);
        alert(options.question.popupdescription);
      };
      const header = options.htmlElement.querySelector('h5');
      const span = document.createElement('span');
      span.innerHTML = '  ';
      header.appendChild(span);
      header.appendChild(btn);
    });
    surveyModel.onComplete
      .add(async (result, options) => {
        this.submitSurvey.emit(result.data);
        this.result = result.data;
        console.log(result.data)
        const updateUsers = await API.graphql(graphqlOperation(addData,{input : { username : this.cliente, datos : JSON.stringify(result.data)}}))
        console.log(updateUsers)
      }
    );
    Survey.SurveyNG.render('surveyElement', { model: surveyModel , css: myCss});

  }
}

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewUsersComponent } from './view-users/view-users.component';

var routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'encuesta/nueva',
      component: EncuestasComponent
    },
    {
      path: 'users',
      component: ViewUsersComponent
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
  constructor(){
  }
}

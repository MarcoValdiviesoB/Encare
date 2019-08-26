import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { SolicitudComponent } from './visitas/solicitud/solicitud.component'
import { VisitasComponent } from './visitas/visitas.component'
import { SolicitudesComponent } from './visitas/solicitudes/solicitudes.component'
import { InspeccionesComponent } from './visitas/inspecciones/inspecciones.component'


var routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'visitas',
      component: VisitasComponent,
      children:[
        {
          path: 'solicitud',
          component: SolicitudComponent
        },
        {
          path: 'solicitudes',
          component: SolicitudesComponent
        },
        {
          path: 'inspecciones',
          component: InspeccionesComponent
        }
      ]
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

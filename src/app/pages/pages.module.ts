import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { SurveyComponent } from './survey.component'


import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { NbCardModule,
         NbIconModule,
         NbInputModule,
         NbButtonModule,
         NbStepperModule,
         NbSelectModule,
 } from '@nebular/theme';
import { SolicitudComponent } from './visitas/solicitud/solicitud.component';
import { VisitasComponent } from './visitas/visitas.component';
import { SolicitudesComponent } from './visitas/solicitudes/solicitudes.component';
import { InspeccionesComponent } from './visitas/inspecciones/inspecciones.component';
import { EncuestaComponent } from './encuesta/encuesta.component'
import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbStepperModule,
    NbSelectModule,
    ChartsModule,
  ],
  declarations: [
    PagesComponent,
    EncuestasComponent,
    ViewUsersComponent,
    SolicitudComponent,
    VisitasComponent,
    SolicitudesComponent,
    InspeccionesComponent,
    SurveyComponent,
    EncuestaComponent
  ],
})
export class PagesModule {
}

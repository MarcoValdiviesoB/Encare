import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { NbCardModule,
         NbIconModule,
 } from '@nebular/theme'


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    NbCardModule,
    NbIconModule,
  ],
  declarations: [
    PagesComponent,
    EncuestasComponent,
    ViewUsersComponent
  ],
})
export class PagesModule {
}

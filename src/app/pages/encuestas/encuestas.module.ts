import { NgModule } from '@angular/core';
import { NbButtonModule } from '@nebular/theme'
import { CommonModule } from '@angular/common';
import { EncuestasComponent } from './encuestas.component';
import { ThemeModule } from '../../@theme/theme.module';


@NgModule({
  declarations: [EncuestasComponent],
  imports: [
    ThemeModule,
    NbButtonModule,
  ]
})
export class EncuestasModule { }

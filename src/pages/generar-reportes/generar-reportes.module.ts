import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenerarReportesPage } from './generar-reportes';

@NgModule({
  declarations: [
    GenerarReportesPage,
  ],
  imports: [
    IonicPageModule.forChild(GenerarReportesPage),
  ],
})
export class GenerarReportesPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisualizarEstadísticasPage } from './visualizar-estadísticas';

@NgModule({
  declarations: [
    VisualizarEstadísticasPage,
  ],
  imports: [
    IonicPageModule.forChild(VisualizarEstadísticasPage),
  ],
})
export class VisualizarEstadísticasPageModule {}

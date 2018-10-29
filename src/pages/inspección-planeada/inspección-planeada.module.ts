import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InspecciónPlaneadaPage } from './inspección-planeada';

@NgModule({
  declarations: [
    InspecciónPlaneadaPage,
  ],
  imports: [
    IonicPageModule.forChild(InspecciónPlaneadaPage),
  ],
})
export class InspecciónPlaneadaPageModule {}

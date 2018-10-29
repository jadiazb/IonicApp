import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CondicionSaludPage } from './condicion-salud';

@NgModule({
  declarations: [
    CondicionSaludPage,
  ],
  imports: [
    IonicPageModule.forChild(CondicionSaludPage),
  ],
})
export class CondicionSaludPageModule {}

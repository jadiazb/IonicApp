import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EliminarUsuarioPage } from './eliminar-usuario';

@NgModule({
  declarations: [
    EliminarUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(EliminarUsuarioPage),
  ],
})
export class EliminarUsuarioPageModule {}

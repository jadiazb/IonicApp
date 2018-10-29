import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReportarCondicionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reportar-condiciones',
  templateUrl: 'reportar-condiciones.html',
})
export class ReportarCondicionesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportarCondicionesPage');
  }

  openIncidenteTrabajo() {
    this.navCtrl.push('IncidenteTrabajoPage');
  }

  openActoInseguro() {
    this.navCtrl.push('ActoInseguroPage');
  }

  openCondicionTrabajo() {
    this.navCtrl.push('CondicionTrabajoPage');
  }

  openCondicionSalud() {
    this.navCtrl.push('CondicionSaludPage');
  }

}

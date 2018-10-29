import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider } from "../../providers/rest/rest"


/**
 * Generated class for the ListarUsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-usuarios',
  templateUrl: 'listar-usuarios.html',
})
export class ListarUsuariosPage {
  
  users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
  }

  ionViewDidLoad(){
    this.rest.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
    (error) => {
      console.error(error);
    }
    )
  }

}

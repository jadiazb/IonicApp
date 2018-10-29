import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider } from "../../providers/rest/rest"


/**
 * Generated class for the ElementosProtecciónPersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-elementos-protección-personal',
  templateUrl: 'elementos-protección-personal.html',
})
export class ElementosProtecciónPersonalPage {
  
  elements: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
  }

  ionViewDidLoad(){
    this.rest.getElements().subscribe(
      (data) => {
        this.elements = data;
      },
    (error) => {
      console.error(error);
    }
    )
  }

}

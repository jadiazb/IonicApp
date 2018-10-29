import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages';
import { Settings } from '../providers';

@Component({
  template: `<ion-menu type="overlay" [content]="content">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Menú</ion-title>
        <button ion-button menuToggle left>
        <ion-icon name="menu"></ion-icon>
        </button>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header>
          Administrador
        </ion-list-header>
        <button menuClose ion-item *ngFor="let p of pagesAdmin" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
      <br>

      <ion-list>
        <ion-list-header>
          Usuario
        </ion-list-header>
        <button menuClose ion-item *ngFor="let p of pagesUser" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
      <br>

      <ion-list>
        <ion-list-header>
          Director de Área
        </ion-list-header>
        <button menuClose ion-item *ngFor="let p of pagesDirector" (click)="openPage(p)">
        {{p.title}}
      </button>
      </ion-list>
      <br>

      <ion-list>
        <ion-list-header>
          Personal de Mantenimiento
        </ion-list-header>
        <button menuClose ion-item *ngFor="let p of pagesPersonal" (click)="openPage(p)">
        {{p.title}}
      </button>
      </ion-list>
      <br>

      <ion-list>
        <ion-list-header>
          Comité Paritario
        </ion-list-header>
        <button menuClose ion-item *ngFor="let p of pagesComite" (click)="openPage(p)">
        {{p.title}}
      </button>
      </ion-list>
      <br>

      <ion-list>
        <ion-list-header>
          Otros
        </ion-list-header>
        <button menuClose ion-item *ngFor="let p of pagesOtros" (click)="openPage(p)">
        {{p.title}}
      </button>
      </ion-list>      

    </ion-content>
  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})

export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pagesAdmin: any[] = [
    { title: 'Crear Usuario', component: 'CrearUsuarioPage' },
    { title: 'Listar Usuarios', component: 'ListarUsuariosPage' },
    { title: 'Eliminar Usuarios', component: 'EliminarUsuarioPage' }
  ]

  pagesUser: any[] = [
    { title: 'Reportar Condiciones', component: 'ReportarCondicionesPage' },
    { title: 'Inspección Planeada / Seguimiento', component: 'InspecciónPlaneadaPage' },
    { title: 'Elementos de Protección Personal', component: 'ElementosProtecciónPersonalPage' }
  ]

  pagesDirector: any[] = [
    { title: 'Visualizar Estadísticas', component: 'VisualizarEstadísticasPage' },
    { title: 'Generar Reportes', component: 'GenerarReportesPage' },
    { title: 'Notificar Llamado de Atención', component: 'NotificarLlamadoAtenciónPage' }
  ]

  pagesPersonal: any[] = [
    { title: 'Visualizar Reportes', component: 'VisualizarReportesPage' },
    { title: 'Notificar Tarea Completada', component: 'NotificarTareaCompletadaPage' }
  ]

  pagesComite: any[] = [
    { title: 'Visualizar Estadísticas', component: 'VisualizarEstadísticasPage' },
    { title: 'Control de Correctivos', component: 'ControlCorrectivosPage' }
  ]

  pagesOtros: any[] = [
    { title: 'Acerca de', component: 'AcercaDePage' },
    { title: 'Salir', component: 'SalirPage' }
  ]

  pages: any[] = [
    { title: 'Tabs', component: 'TabsPage' },
    { title: 'Ingresar', component: 'LoginPage' },
    { title: 'Registrarse', component: 'SignupPage' },
    { title: 'Settings', component: 'SettingsPage' },
    { title: 'Search', component: 'SearchPage' }
  ]

  constructor(private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      platform.registerBackButtonAction(() => {
        platform.exitApp();
      });

    /* //back button handle
      //Registration of push in Android and Windows Phone
      var lastTimeBackPress = 0;
      var timePeriodToExit = 2000;
      platform.registerBackButtonAction(() => {
        let ref = this.viewCtrl.pageRef();
        console.log('Check your needed page ref name', ref.nativeElement.localName)
        if (ref.nativeElement.localName == 'page-no-internet') {
          //Double check to exit app
          if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
            this.platform.exitApp(); //Exit from app
          } else {
            let toast = this.toastCtrl.create({
              message: 'Press back again to exit App?',
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
            lastTimeBackPress = new Date().getTime();
          }
        } else {
          this.nav.pop();
        }
      });*/

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();

  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}



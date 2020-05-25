import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor( public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentInput() {
    const input = await this.alertCtrl.create({
      header: "Agregar Titulo",
      subHeader: "Ingrese el titulo",
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Escriba el titulo'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
        }
      },
        {
          text: 'Ok',
          handler: ( data ) => {
            console.log('Ok', data);
            this.titulo = data.txtNombre;
          }
        }
    ]
    });
    
    await input.present();

  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      subHeader: 'Charla de Ionic',
      message: 'Buenas tardes, Profe Zamora',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
        }
      },
        {
          text: 'Ok',
          handler: (blah) => {
            console.log('Ok');
          }
        }
    ]
    });

    await alert.present();
  }

}

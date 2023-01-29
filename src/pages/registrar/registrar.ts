import { Component, ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HabitosPage } from '../habitos/habitos';


@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  @ViewChild('usuario') user;
  @ViewChild('senha') password;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fire: AngularFireAuth,
              public toastCtrl: ToastController) {
  }

  registrar(){
    let toast = this.toastCtrl.create({duration: 2000, position: 'bottom'})
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
    .then(data => {
      toast.setMessage('Usuário cadastrado com sucesso');
      toast.present();
      this.navCtrl.setRoot(HabitosPage)
    })
    .catch((error: any) => {
      toast.setMessage('Erro ao realizar cadastro');
      toast.present();
    })
  }

}

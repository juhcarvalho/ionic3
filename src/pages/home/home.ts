import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { HabitosPage } from '../habitos/habitos';
import { RegistrarPage } from '../registrar/registrar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('usuario') user;
  @ViewChild('senha') password;
  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) {

  }

  entrar(){
    let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'})
    if(this.user.value == 'admin' && this.password.value == 'admin'){
      this.navCtrl.push(HabitosPage);
      toast.setMessage('Usuário logado com sucesso!');
      toast.present();  
    }else {
      toast.setMessage('Usuário ou senha não encontrados!');
      toast.present();  
    }
  }

  registrar(){
    this.navCtrl.push(RegistrarPage);
  }

}

import { Component, ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController, ToastController } from 'ionic-angular';
import { HabitosPage } from '../habitos/habitos';
import { RegistrarPage } from '../registrar/registrar';
import { Users } from './users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: Users = new Users();

  @ViewChild('usuario') email;
  @ViewChild('senha') password;
  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public afAuth: AngularFireAuth) {

  }

  entrar(){
    let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'})
    
    this.afAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
    .then(data => {
      this.user.email = this.email.value;
      this.user.senha = this.password.value;
      this.navCtrl.setRoot(HabitosPage);
    })
    .catch((error: any) => {
      if(error.code == 'auth/invalid-email')
        toast.setMessage('Email inválido');
      else if(error.code == 'auth/user-disabled')
        toast.setMessage('');
      else if(error.code == 'auth/user-not-found')
        toast.setMessage('');
      else if(error.code == 'auth/wrong-password')
        toast.setMessage('Email inválido');
      else
        toast.setMessage(error.code);

      toast.present();
    })

  }

  registrar(){
    this.navCtrl.push(RegistrarPage);
  }
}

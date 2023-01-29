import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HabitosPage } from '../pages/habitos/habitos';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegistrarPage } from '../pages/registrar/registrar';
import { MetaPage } from '../pages/meta/meta';

const firebaseAuth = {
  apiKey: "AIzaSyB9seepd6MQy65kokU7tQD8JYlAfyCXaBg",
  authDomain: "cdh-controle-de-habitos.firebaseapp.com",
  projectId: "cdh-controle-de-habitos",
  storageBucket: "cdh-controle-de-habitos.appspot.com",
  messagingSenderId: "841605370939",
  appId: "1:841605370939:web:b283c077909d38d0b2381e"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HabitosPage,
    RegistrarPage,
    MetaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseAuth)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HabitosPage,
    RegistrarPage,
    MetaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

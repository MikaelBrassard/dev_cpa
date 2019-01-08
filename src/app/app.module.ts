import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { Network } from '@ionic-native/network';
import { AlertController } from 'ionic-angular';

import { MyApp } from './app.component';
import { AuthRequestProvider } from '../providers/auth-request/auth-request';
import { FirebaseRequestProvider } from '../providers/firebase-request/firebase-request';

import { FIREBASE_CONFIG } from "./app.firebase.config";
import { ToastProvider } from '../providers/toast/toast';
import { AuthProvider } from '../providers/auth/auth';
import { DataProvider } from '../providers/data/data';
import { FunctionsProvider } from '../providers/functions/functions';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    IonicStorageModule.forRoot(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Network,
    AlertController,
    AuthRequestProvider,
    FirebaseRequestProvider,
    ToastProvider,
    AuthProvider,
    DataProvider,
    FunctionsProvider,
    Facebook,
    AngularFireDatabase
  ]
})
export class AppModule {}

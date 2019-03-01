import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
//redux
import { NgReduxModule } from '@angular-redux/store';
import { StoreModule } from 'src/redux/store/all_module';

//firebase
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyALML5rY-J9_ZR80Ut63yOWUC04jwRACsk",
  authDomain: "atbidder.firebaseapp.com",
  databaseURL: "https://atbidder.firebaseio.com",
  projectId: "atbidder",
  storageBucket: "atbidder.appspot.com",
  messagingSenderId: "459901499641"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    NgReduxModule,
    StoreModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

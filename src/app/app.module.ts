import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

export const firebaseConfig = {
    apiKey: "AIzaSyCpqD1kgpDZt9tPXkW58iUTiV1QDbsKW8o",
    authDomain: "authproject-861c9.firebaseapp.com",
    databaseURL: "https://authproject-861c9.firebaseio.com",
    projectId: "authproject-861c9",
    storageBucket: "authproject-861c9.appspot.com",
    messagingSenderId: "313676563012"
};

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

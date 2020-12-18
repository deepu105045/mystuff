import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialModule } from 'src/modules/angular-material/angular-material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { AngularFireModule } from '@angular/fire'
import { FirebaseService } from './components/services/firebase/firebase.service';
import { SigninComponent } from './components/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    KitchenComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBBPLkfO6cibqcxoMUvaLqBHwVi6RJb0Pk",
      authDomain: "mystuff-105045.firebaseapp.com",
      projectId: "mystuff-105045",
      storageBucket: "mystuff-105045.appspot.com",
      messagingSenderId: "1065774327395",
      appId: "1:1065774327395:web:ab68f565b87ec5d7767a56",
      measurementId: "G-VYSTYTJCZ1"
    }

    )

  ],
  providers: [AuthGuard, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

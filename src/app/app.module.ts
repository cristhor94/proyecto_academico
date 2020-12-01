
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { HomeComponent } from './components/home/home.component';


import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import { TestComponent } from './components/test/test.component';
import { AppRoutingModule } from './router/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonitoriaComponent } from './components/monitoria/monitoria.component';
import { DataTablesModule } from 'angular-datatables';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    TestComponent,
    RankingComponent,
    MonitoriaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

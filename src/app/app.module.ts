import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercice1Component } from './exercice1/exercice1.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Exercice2Component } from './exercice2/exercice2.component';
import { Exercice3Component } from './exercice3/exercice3.component';
import { FormComponent } from './exercice3/form/form.component';
import { Tp2Component } from './tp2/tp2.component';
import { Tp2Exercice1Component } from './tp2/tp2-exercice1/tp2-exercice1.component';
import { HomeComponent } from './home/home.component';
import { TpguardGuard } from "./guard/tpguard.guard";
import { BodyComponent } from './tp2-exercice2/body/body.component';
import { Tp2Exercice2Component } from "./tp2-exercice2/tp2-exercice2.component";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    Exercice1Component,
    Exercice2Component,
    Exercice3Component,
    FormComponent,
    Tp2Component,
    Tp2Exercice1Component,
    HomeComponent,
    BodyComponent,
    Tp2Exercice2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
   
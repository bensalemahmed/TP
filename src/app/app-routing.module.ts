import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Exercice1Component } from './exercice1/exercice1.component';
import { Exercice2Component } from './exercice2/exercice2.component';
import { Exercice3Component } from './exercice3/exercice3.component';
import { Tp2Exercice1Component } from './tp2/tp2-exercice1/tp2-exercice1.component';

import { HomeComponent } from './home/home.component';
import { TpguardGuard } from "./guard/tpguard.guard";
import { Tp2Exercice2Component } from './tp2-exercice2/tp2-exercice2.component';
const routes: Routes = [

  { path :"1" , component : Exercice1Component, canActivate:[TpguardGuard] },
  { path :"2" , component : Exercice2Component, canActivate:[TpguardGuard]},
  { path :"3" , component : Exercice3Component, canActivate:[TpguardGuard]},
  { path :"4" , component : Tp2Exercice1Component, canActivate:[TpguardGuard] },
  { path :"5" , component : Tp2Exercice2Component, canActivate:[TpguardGuard] },
  { path :"**" , component : HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ActiveService } from '../active.service';
import { TpguardGuard } from '../guard/tpguard.guard';
@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public nom = "";
  public prenom = "";
  public age = 0;
  model = { options: 'Mr' };
  constructor(private verif: ActiveService) {

  }

  ngOnInit() {
    this.verif.active[0] = this.verif.active[0] + 1;
    this.verif.state += 1;
    console.log(this.verif.active[0])
  }
  get cili() {
    return (this.model.options)
  }

}


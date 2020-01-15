import { Component, OnInit } from '@angular/core';
import { ActiveService } from 'src/app/active.service';

@Component({
  selector: 'app-tp2-exercice1',
  templateUrl: './tp2-exercice1.component.html',
  styleUrls: ['./tp2-exercice1.component.css']
})
export class Tp2Exercice1Component implements OnInit {

  constructor(private verif : ActiveService) { }

  ngOnInit() {
    this.verif.state += 1;
    this.verif.active[3] = this.verif.active[3]+1;
    console.log("tp21" ,this.verif.active[3])
  }

}

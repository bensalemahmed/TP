import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';
import { ActiveService } from '../active.service';
import { TpguardGuard } from '../guard/tpguard.guard';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {


  mail;
  index;
 constructor(public servi: MailService , private verif : ActiveService , private  guard : TpguardGuard) { 

  }
  ngOnInit() {
    this.verif.state += 1;

    if (this.verif.testVerif(2)){
      this.guard.data=true;
    }
    this.verif.active[2] = this.verif.active[2]+1;
    console.log("ex3" ,this.verif.active[2])
  }


}

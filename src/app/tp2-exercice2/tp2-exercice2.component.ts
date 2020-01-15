import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActiveService } from '../active.service';
import { TpguardGuard } from '../guard/tpguard.guard';

@Component({
  selector: 'app-tp2-exercice2',
  templateUrl: './tp2-exercice2.component.html',
  styleUrls: ['./tp2-exercice2.component.css']
})
export class Tp2Exercice2Component implements OnInit {
  datas ;
  urls;
  constructor(private servi : ApiService ,private verif: ActiveService) { 
    
  }
  
  ngOnInit() { 
    this.verif.state += 1;
    // if (this.verif.testVerif(2)){
    //   this.guard.data=true;
    // }
    this.servi.getData().subscribe((data:any)=>{
      this.datas = data.results;
    })

  }
  getOne(url){
    this.urls = url;
  }

}

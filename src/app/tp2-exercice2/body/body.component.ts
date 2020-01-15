import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit ,OnChanges {
  @Input('urls') urls :any;
  car : any ;
  constructor(private servi : ApiService) { 
    
  }

  ngOnChanges(changes: SimpleChanges) {

      this.getOne(changes.urls.currentValue);
      // You can also use categoryId.previousValue and 
      // categoryId.firstChange for comparing old and new values

  }
  ngOnInit() {


  }
  getOne(a){
this.servi.getone(a).subscribe(data=>{
  this.car = data

})
  }

}

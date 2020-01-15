import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {
  active = [3, 1, 1, 1, 1];
  state = 1;
  constructor() { }


  testVerif(val) {
    if (this.active[val-1]>1) {
      return true
    }
    else
      return false
  }

}

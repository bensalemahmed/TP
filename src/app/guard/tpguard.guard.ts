import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ActiveService } from '../active.service';

@Injectable({
  providedIn: 'root'
})
export class TpguardGuard implements CanActivate {
  data = false;
  constructor(private servi: ActiveService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(this.servi.state)
    return Number.parseInt(next.url[0].path, 0) <= this.servi.state;
  }

}

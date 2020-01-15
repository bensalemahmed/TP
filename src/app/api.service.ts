import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  mode = ''
  constructor(private http : HttpClient) { }
    getData(){
    return this.http.get("https://swapi.co/api/vehicles/")
  }
  getone(url){
    return this.http.get(url)
  }
}

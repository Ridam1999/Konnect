import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { details } from 'src/details';

@Injectable({
  providedIn: 'root'
})
export class EmailKonnectService {

  constructor(private http:HttpClient) { }

  public getData(){
    console.log("seccusfool");
   return this.http.get<details[]>("http://localhost:3000/data");
  }
}

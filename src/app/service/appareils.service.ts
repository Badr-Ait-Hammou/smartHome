import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Appareil} from "../model/Appareil";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppareilsService {
  apiUrl="http://localhost:8080/api/controller/appareil";

  constructor(private http:HttpClient) { }



  findAll(): Observable<Appareil[]> {
    return this.http.get<Appareil[]>(`${this.apiUrl}/`);
  }

  saveAppareil(appareil: Appareil): Observable<Appareil> {
    return this.http.post<Appareil>(`${this.apiUrl}/`, appareil);
  }
  // appareils=[
  //   {
  //     id:1,
  //     name:"Lamp",
  //     image:"assets/images/lamp.jpg",
  //     status:true
  //   }, {
  //     id:2,
  //     name:"Floor robot ",
  //     image:"assets/images/floor robor.jpg",
  //     status:false
  //   }, {
  //     id:3,
  //     name:"Refrigerator",
  //     image:"assets/images/refrigerator.jpg",
  //     status:true
  //   },{
  //     id:4,
  //     name:"Tv",
  //     image:"assets/images/modern-indoor-living-room.jpg",
  //     status:true
  //   },{
  //     id:5,
  //     name:"Washing Machine",
  //     image:"assets/images/washing-machine.jpg",
  //     status:true
  //   },
  // ]



  // switchAllOn() {
  //   console.log("Turning all devices on");
  //   for(let app of this.appareils){
  //     app.status = true;
  //   }
  // }
  //
  //
  //
  // switchAllOff() {
  //   console.log("Turning all devices off");
  //   for(let app of this.appareils){
  //     app.status = false;
  //   }
  // }
  //
  // switchapp(id:number):void{
  //   for(let app of this.appareils){
  //     if(app.id ==id){
  //       this.appareils[id].status = true;
  //     }else{
  //       this.appareils[id].status = false
  //     }
  //   }
  // }

}

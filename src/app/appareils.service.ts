import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilsService {
  appareils=[
    {
      name:"Lamp",
      image:"assets/images/lamp.jpg",
      status:true
    }, {
      name:"Floor robot ",
      image:"assets/images/floor robor.jpg",
      status:false
    }, {
      name:"Refrigerator",
      image:"assets/images/refrigerator.jpg",
      status:true
    },{
      name:"Tv",
      image:"assets/images/modern-indoor-living-room.jpg",
      status:true
    },{
      name:"Washing Machine",
      image:"assets/images/washing-machine.jpg",
      status:true
    },
  ]

  areAllDevicesOn(): boolean {
    return this.appareils.every(device => device.status);
  }

  areAllDevicesOff(): boolean {
    return this.appareils.every(device => !device.status);
  }

  switchAllOn() {
    console.log("Turning all devices on");
    this.appareils = this.appareils.map(device => ({ ...device, status: true }));
  }
  switchAllOff() {
    console.log("Turning all devices off");
    this.appareils = this.appareils.map(device => ({ ...device, status: false }));
  }

  constructor() { }
}

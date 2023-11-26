import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-appareil',
  templateUrl: './list-appareil.component.html',
  styleUrls: ['./list-appareil.component.css']
})
export class ListAppareilComponent implements OnInit {
  isOk:boolean=true;
  appareils=[
    {
      name:"Lamp",
      image:"assets/images/lamp.jpg",
      status:true
    }, {
      name:"laptop",
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
  constructor() {
    setTimeout(()=>{
      this.isOk=false;
    },5000);
  }

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
  ngOnInit(): void {
  }

}

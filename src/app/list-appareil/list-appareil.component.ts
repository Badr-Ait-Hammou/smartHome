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
      name:"Machine a laver",
      status:true
    }, {
      name:"laptop",
      status:false
    }, {
      name:"phone",
      status:true
    },
  ]
  constructor() {
    setTimeout(()=>{
      this.isOk=false;
    },5000);
  }


  switchAllOn() {
    console.log("Turning all devices on");

    // Create a new array with modified status
    this.appareils = this.appareils.map(device => ({ ...device, status: true }));

  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { AppareilsService } from '../appareils.service';

@Component({
  selector: 'app-list-appareil',
  templateUrl: './list-appareil.component.html',
  styleUrls: ['./list-appareil.component.css'],
  providers: [AppareilsService],

})
export class ListAppareilComponent implements OnInit {
  isOk:boolean=true;

  constructor(private appareilsService: AppareilsService) {
    setTimeout(()=>{
      this.isOk=false;
    },5000);
  }

  get appareils() {
    return this.appareilsService.appareils;
  }

  areAllDevicesOn(): boolean {
    return this.appareilsService.areAllDevicesOn();
  }

  areAllDevicesOff(): boolean {
    return this.appareilsService.areAllDevicesOff();
  }

  switchAllOn(): void {
    this.appareilsService.switchAllOn();
  }

  switchAllOff(): void {
    this.appareilsService.switchAllOff();
  }



  ngOnInit(): void {
  }

}

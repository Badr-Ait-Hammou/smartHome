import { Component, OnInit } from '@angular/core';
import { AppareilsService } from '../service/appareils.service';
import {Appareil} from "../model/Appareil";

@Component({
  selector: 'app-list-appareil',
  templateUrl: './list-appareil.component.html',
  styleUrls: ['./list-appareil.component.css'],

})
export class ListAppareilComponent implements OnInit {
  displaySaveDialog = false;

  appareils: Appareil[] = [];
  newAppareil: Appareil = {
    id: 0,
    label: '',
    state:false,
    description: '',
    photo: '',
  };






  constructor(private appareilService: AppareilsService) {}

  ngOnInit(): void {
    this.loadAppareils();
  }

  loadAppareils(): void {
    this.appareilService.findAll().subscribe(
      (data) => {
        this.appareils = data;
      },
      (error) => {
        console.error('Error fetching appareils:', error);
      }
    );
  }

  openSaveDialog(): void {
    this.displaySaveDialog = true;
  }
  onFileChange(event: any): void {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    if (file) {
      this.newAppareil.photo = URL.createObjectURL(file);
    }
  }

  saveAppareil(): void {
    this.appareilService.saveAppareil(this.newAppareil).subscribe(
      (savedAppareil) => {
        // Handle success, e.g., close the modal, refresh the list, etc.
        this.displaySaveDialog = false;
        this.loadAppareils(); // Reload the list after saving
      },
      (error) => {
        console.error('Error saving appareil:', error);
      }
    );
  }
}


// constructor(private appareilsService: AppareilsService) {
//   setTimeout(()=>{
//     this.isOk=false;
//   },5000);
// }
//
// get appareils() {
//   return this.appareilsService.appareils;
// }
//
// areAllDevicesOn(): boolean {
//   return this.appareilsService.areAllDevicesOn();
// }
//
// areAllDevicesOff(): boolean {
//   return this.appareilsService.areAllDevicesOff();
// }
//
// switchAllOn(): void {
//   this.appareilsService.switchAllOn();
// }
//
// switchAllOff(): void {
//   this.appareilsService.switchAllOff();
// }
//
//
//

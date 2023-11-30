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

  /************************ load apps ***********************/


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

  /************************ Save Dialog  ***********************/

  openSaveDialog(): void {
    this.displaySaveDialog = true;
  }


  /************************ Image upload ***********************/

  onFileChange(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        this.newAppareil.photo = reader.result;
      }
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }


  /************************ Save app ***********************/


  saveAppareil(): void {
    this.appareilService.saveAppareil(this.newAppareil).subscribe(
      (savedAppareil) => {
        console.log("saved app",savedAppareil);
        this.displaySaveDialog = false;
        this.loadAppareils();
      },
      (error) => {
        console.error('Error saving appareil:', error);
      }
    );
  }

  /************************ Delete app ***********************/

  deleteAppareil(id: number): void {
    this.appareilService.deleteAppareil(id).subscribe(
      () => {
        this.loadAppareils();
      },
      (error) => {
        console.log("id",id);
        console.error('Error deleting appareil:', error);
      }
    );
  }

  /************************ Update app ***********************/

  updateAppareil(appareil: Appareil): void {
    const updatedAppareil: { id: number; state: boolean } = {
      id: appareil.id,
      state: appareil.state,
    };
    this.appareilService.updateAppareil(appareil.id, updatedAppareil).subscribe(
      () => {
        console.log("Appareil state updated successfully");
      },
      (error) => {
        console.error('Error updating appareil:', error);
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

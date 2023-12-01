import { Component, OnInit } from '@angular/core';
import { AppareilsService } from '../service/appareils.service';
import {Appareil} from "../model/Appareil";
import {Categorie} from "../model/Categorie";

@Component({
  selector: 'app-list-appareil',
  templateUrl: './list-appareil.component.html',
  styleUrls: ['./list-appareil.component.css'],

})
export class ListAppareilComponent implements OnInit {
  displaySaveDialog = false;
  appareils: Appareil[] = [];
  categories: Categorie[] = [];

  newAppareil: Appareil = {
    id: 0,
    label: '',
    state:false,
    description: '',
    photo: '',
    categorie: {
      id: 0
    },
  };

  constructor(private appareilService: AppareilsService) {}

  ngOnInit(): void {
    this.loadAppareils();
    this.loadCategories();

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

  loadCategories(): void {
    this.appareilService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }


  /************************ Save Dialog  ***********************/

  openSaveDialog(): void {
    this.displaySaveDialog = true;
  }


  /************************ Image upload ***********************/

  // onFileChange(event: any): void {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     if (typeof reader.result === 'string') {
  //       this.newAppareil.photo = reader.result;
  //     }
  //   };
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // }

  // Replace the existing onFileChange method with onFileSelect
  onFileSelect(event: any): void {
    const file = event.files && event.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          this.newAppareil.photo = reader.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

// Remove the existing onFileChange method



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


  switchOnAllAppareils(): void {
    const updatedAppareil: { id: number; state: boolean } = {
      id: 0,
      state: true,

    };
    this.appareilService.switchOnAllAppareils(updatedAppareil).subscribe(
      () => {
        console.log("All appareils updated successfully");
        this.loadAppareils();
      },
      (error) => {
        console.error('Error updating all appareils:', error);
      }
    );
  }

  switchOffAllAppareils(): void {
    const updatedAppareil: { id: number; state: boolean } = {
      id: 0,
      state: false,

    };
    this.appareilService.switchOffAllAppareils(updatedAppareil).subscribe(
      () => {
        console.log("All appareils updated successfully");
        this.loadAppareils();
      },
      (error) => {
        console.error('Error updating all appareils:', error);
      }
    );
  }


}


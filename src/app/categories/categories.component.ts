import { Component, OnInit } from '@angular/core';
import {Categorie} from "../model/Categorie";
import {CategorieService} from "../service/categorie.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Categorie[] = [];
  displaySaveDialog = false;

  newCategorie: Categorie = {
    id: 0,
    label: '',
  };

  constructor(private categorieService: CategorieService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categorieService.findAll().subscribe(
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

  /************************ Save cat ***********************/


  saveCategorie(): void {
    this.categorieService.saveCategory(this.newCategorie).subscribe(
      (savedCategorie) => {
        console.log("saved cat",savedCategorie);
        this.displaySaveDialog = false;
        this.loadCategories();
      },
      (error) => {
        console.error('Error saving cat:', error);
      }
    );
  }

  /************************ Delete cat ***********************/

  daleteCategorie(id: number): void {
    this.categorieService.deleteCategorie(id).subscribe(
      () => {
        this.loadCategories();
      },
      (error) => {
        console.log("id",id);
        console.error('Error deleting cat:', error);
      }
    );
  }
}

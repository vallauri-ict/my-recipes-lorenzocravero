import { Injectable } from '@angular/core';
import { RecipeModel } from '../models/recipe.models';
import { DatastorageService } from 'src/app/shared/datastorage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: RecipeModel[] = [];
  selectedRecipe: RecipeModel;

  constructor(private dataStorageService: DatastorageService, public router : Router) { }

  getRecipes() {
    //dobbiamo passargli l'endpoint per la chiamata al json server
    this.dataStorageService.sendGetRequest("recipes").subscribe(data => {
      //console.log(data);
      this.recipes = data as RecipeModel[];
      this.selectedRecipe = this.recipes[0];
    },
      error => {
        console.error(error);
      })
  }

  getRecipe(index: any) {
    //dobbiamo passargli l'endpoint per la chiamata al json server
    this.dataStorageService.sendGetRequest("recipes/" + index).subscribe(data => {
      this.selectedRecipe = data as RecipeModel
    },
      error => {
        console.error(error);
      })
  }

  postRecipe(recipe:RecipeModel){
    this.dataStorageService.sendPostRequest('recipes', recipe).subscribe(data => {
      this.getRecipes();
    },
    error => {
      console.error(error);
    })
  }

  patchRecipe(recipeId : number, recipe:RecipeModel){
    this.dataStorageService.sendPatchRequest('recipes/' + recipeId, recipe).subscribe(data => {
      alert("Recipe modified");
      this.router.navigate(['recipes/', recipeId]);
    },
    error => {
      console.error(error);
    })
  }

  deleteRecipe(recipeId : any){
    //dobbiamo passargli l'endpoint per la chiamata al json server
    this.dataStorageService.sendGetRequest("recipes/" + recipeId).subscribe(data => {
      alert("Recipe deleted");
      this.getRecipes();
    },
      error => {
        console.error(error);
      })
  }
}

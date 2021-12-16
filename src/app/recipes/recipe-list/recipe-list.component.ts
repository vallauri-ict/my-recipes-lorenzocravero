import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.models';
//import { RecipesService } from 'src/app/shared/recipes.service';
import { DatastorageService } from 'src/app/shared/datastorage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedInList = new EventEmitter<RecipeModel>()

  recipes : RecipeModel[] = [];
  selectedRecipe:RecipeModel
  constructor(private dataStorageService:DatastorageService) {
   }

  ngOnInit(): void {
    //dobbiamo passargli l'endpoint per la chiamata al json server
    this.dataStorageService.sendGetRequest("recipes").subscribe(data => {
      //console.log(data);
      this.recipes = data as RecipeModel[];
      this.selectedRecipe=this.recipes[0];
    })
  }

  onRecipeSelected(recipe:RecipeModel){
    this.recipeSelectedInList.emit(recipe);
  }

}
